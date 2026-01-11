(function() {
  // Глобальная переменная для хранения метаданных сайта
  window.siteMeta = { whatsappNumber: '84372733431' }; // fallback значение
  
  // Функция загрузки одного файла с retry
  async function fetchWithRetry(url, retries) {
    // Используем CONFIG.RETRY_ATTEMPTS если доступен, иначе fallback
    const maxRetries = retries !== undefined ? retries : (typeof CONFIG !== 'undefined' && CONFIG.RETRY_ATTEMPTS ? CONFIG.RETRY_ATTEMPTS : 3);
    
    for (let i = 0; i <= maxRetries; i++) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${url}`);
        }
        return await response.json();
      } catch (error) {
        console.warn(`Попытка ${i + 1} загрузки ${url} не удалась:`, error.message);
        if (i === maxRetries) {
          console.error(`❌ Не удалось загрузить ${url} после ${maxRetries + 1} попыток`);
          return null; // Возвращаем null вместо ошибки
        }
        // Ждём перед повтором
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
      }
    }
  }

  async function loadData() {
    try {
      const appElement = document.getElementById('app');
      const globalError = document.getElementById('global-error-msg');
      
      if (!appElement) {
        console.error('❌ Контейнер #app не найден на странице');
        return;
      }

      // Используем пути из CONFIG (если config.js подключен)
      const endpoints = (typeof API_ENDPOINTS !== 'undefined') ? API_ENDPOINTS : {
        SITE_META: './data/site-meta.json',
        EXCURSIONS: './data/excursions.json',
        TRANSPORT_CATEGORIES: './data/transport-categories.json',
        TRANSPORT_ITEMS: './data/transport-items.json',
        ACCOMMODATIONS: './data/accommodations.json',
        SERVICES: './data/services.json',
        OFFICES: './data/offices.json'
      };

      // Загружаем все JSON-файлы параллельно
      const [meta, exc, cat, trans, acc, serv, off] = await Promise.all([
        fetchWithRetry(endpoints.SITE_META),
        fetchWithRetry(endpoints.EXCURSIONS),
        fetchWithRetry(endpoints.TRANSPORT_CATEGORIES),
        fetchWithRetry(endpoints.TRANSPORT_ITEMS),
        fetchWithRetry(endpoints.ACCOMMODATIONS),
        fetchWithRetry(endpoints.SERVICES),
        fetchWithRetry(endpoints.OFFICES)
      ]);
      
      // Если критические данные не загрузились (null из fetchWithRetry)
      if (!meta && !exc && !trans) {
         throw new Error("Не удалось загрузить основные данные сайта");
      }

      // Сохраняем siteMeta в глобальную переменную
      if (meta) {
        window.siteMeta = meta;
      }
      
      // Применяем валидацию и фильтрацию данных
      const excursions = filterValidActive(exc || [], validateExcursion);
      const transportCategories = cat || []; 
      const transportItems = filterValidActive(trans || [], validateTransport);
      const accommodations = filterValidActive(acc || [], validateAccommodation);
      const services = filterValidActive(serv || [], validateService);
      const offices = filterValidActive(off || [], validateOffice);
      
      // Рендер основной разметки
      appElement.innerHTML = `
        ${HeroSection(window.siteMeta)}
        ${PopularSection(excursions, services, transportItems, transportCategories)}
        ${ExcursionsSection(excursions)}
        ${TransportSection(transportCategories, transportItems)}
        ${AccommodationSection(accommodations)}
        ${ServicesSection(services)}
        ${ContactsSection(offices, window.siteMeta)}
      `;

      console.log('✅ Сайт загружен успешно');

    } catch (error) {
      console.error('❌ Критическая ошибка загрузки:', error);
      
      // Показываем глобальную плашку ошибки вверху экрана
      const globalError = document.getElementById('global-error-msg');
      if (globalError) {
        globalError.style.display = 'block';
      }
      
      // Показываем расширенный UI ошибки в основном контенте
      const appElement = document.getElementById('app');
      if (appElement) {
        appElement.innerHTML = `
          <div class="max-w-2xl mx-auto text-center py-20 px-4">
            <div class="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <i class="ri-error-warning-line text-red-500 text-6xl mb-4"></i>
              <h2 class="text-2xl font-bold text-red-600 mb-4">Упс! Что-то пошло не так</h2>
              <p class="text-gray-600 mb-6">Мы не смогли загрузить данные для отображения сайта. Пожалуйста, проверьте подключение к сети.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="location.reload()" class="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition">
                  <i class="ri-refresh-line mr-2"></i>Попробовать снова
                </button>
                <button onclick="openWhatsApp()" class="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition">
                  <i class="ri-whatsapp-line mr-2"></i>Связаться в WhatsApp
                </button>
              </div>
            </div>
          </div>
        `;
      }
    }
  }

  // Запуск
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
  } else {
    loadData();
  }
})();
