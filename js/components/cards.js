/**
 * КАРТОЧКА УСЛУГИ / ЭКСКУРСИИ
 */
function renderCardService(service) {
  const title = service.title || '';
  const hasDetails = !!(service.details && service.details.trim());
  const message = `Хочу заказать: ${title}`;
  const safeMessage = escapeHTML(message).replace(/'/g, "\\'");

  const imageHtml = service.image 
    ? `<div class="h-48 overflow-hidden border-b border-gray-100 flex-shrink-0">
         <img src="${service.image}" alt="${escapeHTML(title)}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy">
       </div>`
    : '';

  const detailsHtml = hasDetails ? formatServiceDetails(service.details) : '';

  return `
    <div class="service-card bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full ${hasDetails ? 'is-clickable' : ''}" 
         ${hasDetails ? 'onclick="toggleServiceAccordion(this)"' : ''}>
      ${imageHtml}
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-xl font-bold text-gray-800">${escapeHTML(title)}</h3>
          ${hasDetails ? '<i class="ri-arrow-down-s-line accordion-chevron text-2xl text-gray-400"></i>' : ''}
        </div>

        <p class="service-short-desc text-gray-600 mb-4 flex-grow">${escapeHTML(service.shortDescription || '')}</p>

        ${hasDetails ? `
          <div class="service-details-container">
            <div class="service-details-content">
              ${detailsHtml}
            </div>
          </div>
        ` : ''}

        <button onclick="event.stopPropagation(); openWhatsApp('${safeMessage}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-6 flex items-center justify-center">
          <i class="ri-whatsapp-line mr-2 text-xl"></i>Заказать
        </button>
      </div>
    </div>
  `;
}

/**
 * КАРТОЧКА ТРАНСПОРТА
 */
function renderCardTransport(transport, categories) {
  const category = categories ? categories.find(c => c.id === transport.categoryId) : null;
  const title = transport.title || '';
  const hasDetails = !!(transport.details && transport.details.trim());
  const hasSpecs = (transport.benefits && transport.benefits.length > 0) || (transport.specs && transport.specs.length > 0);
  
  const isExpandable = hasDetails || hasSpecs;
  
  const message = `Хочу забронировать: ${title}`;
  const safeMessage = escapeHTML(message).replace(/'/g, "\\'");

  let topContent = '';
  if (transport.image) {
      topContent = `
      <div class="h-56 overflow-hidden relative group flex-shrink-0">
        <img src="${transport.image}" alt="${escapeHTML(title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        ${category ? `<span class="absolute top-4 right-4 px-3 py-1 text-sm font-bold rounded-full shadow-md ${getCategoryColor(category.slug)}">${escapeHTML(category.title)}</span>` : ''}
      </div>`;
  }

  const detailsHtml = hasDetails ? formatServiceDetails(transport.details) : '';

  return `
    <div class="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full ${isExpandable ? 'is-clickable' : ''}"
         ${isExpandable ? 'onclick="toggleServiceAccordion(this)"' : ''}>
      ${topContent}
      <div class="bg-gray-100 p-4 border-b flex-shrink-0 flex justify-between items-center">
        <h3 class="text-lg font-bold">${escapeHTML(title)}</h3>
        ${isExpandable ? '<i class="ri-arrow-down-s-line accordion-chevron text-xl text-gray-500"></i>' : ''}
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <p class="service-short-desc text-gray-600 mb-4 flex-grow">${escapeHTML(transport.useCases || '')}</p>
        
        ${isExpandable ? `
          <div class="service-details-container">
            <div class="service-details-content">
              ${detailsHtml}
              
              <div class="mt-4 pt-4 border-t border-gray-100">
                ${transport.benefits && transport.benefits.length > 0 ? `
                  <h4 class="font-bold text-gray-800 mb-2">Преимущества:</h4>
                  <ul class="list-disc list-inside text-gray-600 text-sm mb-4">
                    ${transport.benefits.map(b => `<li>${escapeHTML(b)}</li>`).join('')}
                  </ul>
                ` : ''}
                
                ${transport.specs && transport.specs.length > 0 ? `
                  <h4 class="font-bold text-gray-800 mb-2">Характеристики:</h4>
                  <ul class="list-disc list-inside text-gray-600 text-sm">
                    ${transport.specs.map(s => `<li>${escapeHTML(s)}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            </div>
          </div>
        ` : ''}

        <button onclick="event.stopPropagation(); openWhatsApp('${safeMessage}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-6 flex items-center justify-center">
          <i class="ri-motorbike-fill mr-2 text-xl"></i>Забронировать
        </button>
      </div>
    </div>
  `;
}

/**
 * КАРТОЧКА ПРОЖИВАНИЯ
 */
function renderCardAccommodation(acc) {
  const title = acc.title || '';
  const hasDetails = !!(acc.details && acc.details.trim());
  const message = `Хочу узнать цены на: ${title}`;
  const safeMessage = escapeHTML(message).replace(/'/g, "\\'");

  const imageHtml = acc.image 
    ? `<div class="h-64 overflow-hidden relative flex-shrink-0">
         <img src="${acc.image}" alt="${escapeHTML(title)}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy">
         <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
            <h3 class="text-white text-2xl font-bold drop-shadow-md">${escapeHTML(title)}</h3>
         </div>
       </div>`
    : ''; 

  const detailsHtml = hasDetails ? formatServiceDetails(acc.details) : '';

  return `
    <div class="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full ${hasDetails ? 'is-clickable' : ''}"
         ${hasDetails ? 'onclick="toggleServiceAccordion(this)"' : ''}>
      ${imageHtml}

      <div class="p-8 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-4">
          ${!acc.image ? `<h3 class="text-2xl font-bold text-gray-800">${escapeHTML(title)}</h3>` : '<span></span>'}
          ${hasDetails ? '<i class="ri-arrow-down-s-line accordion-chevron text-2xl text-gray-400"></i>' : ''}
        </div>

        <p class="service-short-desc text-gray-600 mb-6 italic border-l-4 border-purple-500 pl-4">${escapeHTML(acc.slogan || '')}</p>
        
        <div class="service-short-desc flex-grow">
          <div class="mb-4">
            <h4 class="font-semibold mb-2 flex items-center"><i class="ri-home-smile-line text-green-600 mr-2"></i>Территория:</h4>
            <p class="text-gray-600">${escapeHTML(acc.territoryDescription || '')}</p>
          </div>
          <div class="mb-6">
            <h4 class="font-semibold mb-2 flex items-center"><i class="ri-map-pin-line text-red-500 mr-2"></i>Локация:</h4>
            <p class="text-gray-800 font-medium">${escapeHTML(acc.address || '')}</p>
          </div>
        </div>

        ${hasDetails ? `
          <div class="service-details-container">
            <div class="service-details-content">
              ${detailsHtml}
            </div>
          </div>
        ` : ''}
        
        <button onclick="event.stopPropagation(); openWhatsApp('${safeMessage}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-auto flex items-center justify-center">
          <i class="ri-price-tag-3-line mr-2"></i>Узнать цены
        </button>
      </div>
    </div>
  `;
}

/**
 * КАРТОЧКА ОФИСА
 */
function renderCardOffice(office) {
  const title = office.title || '';

  return `
    <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500 flex flex-col h-full">
      <h3 class="text-xl font-bold mb-3">${escapeHTML(title)}</h3>
      <p class="text-gray-600 mb-4 flex-grow">${escapeHTML(office.description || '')}</p>
      <div class="mb-2">
        <p class="font-semibold">📍 Адрес:</p>
        <p class="text-gray-600">${escapeHTML(office.address || '')}</p>
      </div>
      <div class="mb-4">
        <p class="font-semibold">⏰ Время работы:</p>
        <p class="text-gray-600">${escapeHTML(office.workTime || '')}</p>
      </div>
    </div>
  `;
}

function getCategoryColor(slug) {
  const colors = {
    'standard': 'bg-green-100 text-green-800',
    'comfort': 'bg-blue-100 text-blue-800',
    'maxi': 'bg-yellow-100 text-yellow-800',
    'moto': 'bg-red-100 text-red-800',
    'car': 'bg-gray-100 text-gray-800'
  };
  return colors[slug] || 'bg-gray-100 text-gray-800';
}
