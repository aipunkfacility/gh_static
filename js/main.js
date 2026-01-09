let siteMeta = {}, excursions = [], transportCategories = [], transportItems = [], accommodations = [], services = [], offices = [];

async function loadData() {
  try {
    // Проверяем, существует ли контейнер #app
    const appElement = document.getElementById('app');
    if (!appElement) {
      console.error('❌ Контейнер #app не найден на странице');
      return;
    }

    // Загружаем все JSON-файлы параллельно
    const [meta, exc, cat, trans, acc, serv, off] = await Promise.all([
      fetch('./data/site-meta.json').then(r => r.json()),
      fetch('./data/excursions.json').then(r => r.json()),
      fetch('./data/transport-categories.json').then(r => r.json()),
      fetch('./data/transport-items.json').then(r => r.json()),
      fetch('./data/accommodations.json').then(r => r.json()),
      fetch('./data/services.json').then(r => r.json()),
      fetch('./data/offices.json').then(r => r.json())
    ]);
    
    // Сохраняем в глобальные переменные
    siteMeta = meta; 
    excursions = exc; 
    transportCategories = cat;
    transportItems = trans; 
    accommodations = acc; 
    services = serv; 
    offices = off;
    
    // Собираем всю страницу из секций
    appElement.innerHTML = `
      ${HeroSection(siteMeta)}
      ${PopularSection(excursions, services, transportItems)}
      ${ExcursionsSection(excursions)}
      ${TransportSection(transportCategories, transportItems)}
      ${AccommodationSection(accommodations)}
      ${ServicesSection(services)}
      ${ContactsSection(offices, siteMeta)}
    `;

    console.log('✅ Сайт загружен успешно');

  } catch (error) {
    console.error('❌ Ошибка загрузки:', error);
    
    const appElement = document.getElementById('app');
    if (appElement) {
      appElement.innerHTML = `
        <div class="max-w-2xl mx-auto text-center py-20 px-4">
          <div class="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <i class="fas fa-exclamation-circle text-red-500 text-6xl mb-4"></i>
            <h2 class="text-2xl font-bold text-red-600 mb-4">Не удалось загрузить данные</h2>
            <p class="text-gray-600 mb-6">Попробуйте обновить страницу или свяжитесь с нами напрямую</p>
            <button onclick="location.reload()" class="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition mr-4">
              <i class="fas fa-redo mr-2"></i>Обновить страницу
            </button>
            <button onclick="openWhatsApp()" class="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition">
              <i class="fab fa-whatsapp mr-2"></i>Написать в WhatsApp
            </button>
          </div>
        </div>
      `;
    }
  }
}

// Запускаем загрузку после загрузки DOM
document.addEventListener('DOMContentLoaded', loadData);
