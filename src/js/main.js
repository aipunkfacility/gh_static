import {
  filterValidActive,
  validateExcursion,
  validateTransport,
  validateAccommodation,
  validateService,
  validateOffice,
  toggleMobileMenu,
  toggleServiceAccordion,
  openWhatsApp,
  smoothScroll
} from './utils.js';

import { dataService } from './services/dataService.js';

import { HeroSection } from './sections/hero.js';
import { PopularSection } from './sections/popular.js';
import { ExcursionsSection } from './sections/excursions.js';
import { TransportSection } from './sections/transport.js';
import { AccommodationSection } from './sections/accommodation.js';
import { ServicesSection } from './sections/services.js';
import { ContactsSection } from './sections/contacts.js';

// Глобальные обработчики для HTML атрибутов onclick
window.toggleMobileMenu = toggleMobileMenu;
window.toggleServiceAccordion = toggleServiceAccordion;
window.openWhatsApp = openWhatsApp;
window.smoothScroll = smoothScroll;

// Глобальная переменная для хранения метаданных сайта
window.siteMeta = { whatsappNumber: '84372733431' }; // fallback значение

async function loadData() {
  try {
    const appElement = document.getElementById('app');

    if (!appElement) {
      console.error('❌ Контейнер #app не найден на странице');
      return;
    }

    // Загружаем все данные через наш сервис (с кешированием)
    const data = await dataService.getAll();

    // Если критические данные не загрузились
    if (!data.meta && !data.excursions && !data.transport) {
      throw new Error("Не удалось загрузить основные данные сайта");
    }

    // Сохраняем siteMeta
    if (data.meta) {
      window.siteMeta = data.meta;
    }

    // Применяем валидацию и фильтрацию данных
    const excursions = filterValidActive(data.excursions || [], validateExcursion);
    const transportCategories = data.categories || [];
    const transportItems = filterValidActive(data.transport || [], validateTransport);
    const accommodations = filterValidActive(data.accommodations || [], validateAccommodation);
    const services = filterValidActive(data.services || [], validateService);
    const offices = filterValidActive(data.offices || [], validateOffice);

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

    console.log('✅ Сайт загружен успешно (Data Layer Optimized)');

  } catch (error) {
    console.error('❌ Критическая ошибка загрузки:', error);

    // Показываем глобальную плашку ошибки
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
  document.addEventListener('DOMContentLoaded', () => {
    loadData();
    // Инициализация мобильного меню
    const menuToggle = document.getElementById('mobile-menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMobileMenu);
    }
  });
} else {
  loadData();
  const menuToggle = document.getElementById('mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
}
