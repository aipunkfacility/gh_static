let siteMeta = {}, excursions = [], transportCategories = [], transportItems = [], accommodations = [], services = [], offices = [];

async function loadData() {
  try {
    const [meta, exc, cat, trans, acc, serv, off] = await Promise.all([
      fetch('./data/site-meta.json').then(r => r.json()),
      fetch('./data/excursions.json').then(r => r.json()),
      fetch('./data/transport-categories.json').then(r => r.json()),
      fetch('./data/transport-items.json').then(r => r.json()),
      fetch('./data/accommodations.json').then(r => r.json()),
      fetch('./data/services.json').then(r => r.json()),
      fetch('./data/offices.json').then(r => r.json())
    ]);
    
    siteMeta = meta; excursions = exc; transportCategories = cat;
    transportItems = trans; accommodations = acc; services = serv; offices = off;
    
    document.getElementById('app').innerHTML = `
      ${HeroSection(siteMeta)}
      ${PopularSection(excursions, services, transportItems)}
      ${ExcursionsSection(excursions)}
      ${TransportSection(transportCategories, transportItems)}
      ${AccommodationSection(accommodations)}
      ${ServicesSection(services)}
      ${ContactsSection(offices, siteMeta)}
    `;
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    document.getElementById('app').innerHTML = `<div class="text-center py-20"><h2 class="text-2xl font-bold text-red-600">Ошибка загрузки данных</h2></div>`;
  }
}

document.addEventListener('DOMContentLoaded', loadData);