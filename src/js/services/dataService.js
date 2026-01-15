import { CONFIG, API_ENDPOINTS } from '../config.js';

/**
 * Сервис для работы с данными сайта.
 * Обеспечивает кеширование в sessionStorage и автоматические повторы запросов.
 */
const CACHE_PREFIX = 'gh_static_cache_';

export const dataService = {
    /**
     * Загружает данные по ключу эндпоинта.
     * @param {string} endpointKey - Ключ из API_ENDPOINTS (например, 'SITE_META')
     * @param {boolean} forceRefresh - Принудительно обновить данные, игнорируя кеш
     */
    async get(endpointKey, forceRefresh = false) {
        const url = API_ENDPOINTS[endpointKey];
        if (!url) {
            console.error(`❌ Неизвестный эндпоинт: ${endpointKey}`);
            return null;
        }

        const cacheKey = CACHE_PREFIX + endpointKey;

        if (!forceRefresh) {
            const cached = sessionStorage.getItem(cacheKey);
            if (cached) {
                try {
                    return JSON.parse(cached);
                } catch (e) {
                    console.warn(`⚠️ Ошибка парсинга кеша для ${endpointKey}:`, e);
                    sessionStorage.removeItem(cacheKey);
                }
            }
        }

        const data = await this.fetchWithRetry(url);

        if (data) {
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify(data));
            } catch (e) {
                console.warn(`⚠️ Не удалось сохранить в кеш для ${endpointKey}:`, e);
            }
        }

        return data;
    },

    /**
     * Вспомогательный метод для выполнения fetch с повторными попытками.
     */
    async fetchWithRetry(url, retries = CONFIG.RETRY_ATTEMPTS) {
        for (let i = 0; i <= retries; i++) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${url}`);
                }
                return await response.json();
            } catch (error) {
                console.warn(`Попытка ${i + 1} загрузки ${url} не удалась:`, error.message);
                if (i === retries) {
                    console.error(`❌ Ошибка загрузки ${url} после ${retries + 1} попыток`);
                    return null;
                }
                // Экспоненциальный бэкoff перед повтором
                await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
            }
        }
    },

    /**
     * Загружает все необходимые данные для инициализации сайта.
     */
    async getAll(forceRefresh = false) {
        const [
            meta,
            excursions,
            categories,
            transport,
            accommodations,
            services,
            offices
        ] = await Promise.all([
            this.get('SITE_META', forceRefresh),
            this.get('EXCURSIONS', forceRefresh),
            this.get('TRANSPORT_CATEGORIES', forceRefresh),
            this.get('TRANSPORT_ITEMS', forceRefresh),
            this.get('ACCOMMODATIONS', forceRefresh),
            this.get('SERVICES', forceRefresh),
            this.get('OFFICES', forceRefresh)
        ]);

        return {
            meta,
            excursions,
            categories,
            transport,
            accommodations,
            services,
            offices
        };
    },

    /**
     * Очищает кеш данных.
     */
    clearCache() {
        Object.keys(sessionStorage)
            .filter(key => key.startsWith(CACHE_PREFIX))
            .forEach(key => sessionStorage.removeItem(key));
    }
};
