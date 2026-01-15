import { escapeHTML, formatServiceDetails } from '../utils.js';

export function ExcursionsSection(excursions) {
  const activeExcursions = excursions.filter(e => e.isActive);

  if (activeExcursions.length === 0) {
    return '';
  }

  return `
    <section id="excursions" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-compass-3-line text-blue-500"></i> Все экскурсии
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          ${activeExcursions.map(excursion => {
    const title = excursion.title || '';
    const hasDetails = !!(excursion.details && excursion.details.trim());
    const message = `Хочу забронировать экскурсию: ${title}`;
    const safeMessage = escapeHTML(message).replace(/'/g, "\\'");

    const imageHtml = excursion.image
      ? `<div class="overflow-hidden group flex-shrink-0 relative">
                   <img src="${excursion.image}" alt="${escapeHTML(title)}" width="600" height="400" class="w-full h-auto block group-hover:scale-105 transition-transform duration-500" loading="lazy">
                   <div class="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-lg font-bold shadow-md">
                     ${escapeHTML(excursion.priceFrom)}
                   </div>
                 </div>`
      : '';

    const detailsHtml = hasDetails ? formatServiceDetails(excursion.details) : '';

    return `
              <div class="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col ${hasDetails ? 'is-clickable' : ''}"
                   ${hasDetails ? 'onclick="toggleServiceAccordion(this)"' : ''}>
                
                ${imageHtml}
                
                <div class="p-6 flex flex-col flex-grow">
                  <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold text-gray-800">${escapeHTML(title)}</h3>
                    ${hasDetails ? '<i class="ri-arrow-down-s-line accordion-chevron text-2xl text-gray-400"></i>' : ''}
                  </div>
                  
                  <!-- Короткое инфо (скрывается при открытии) -->
                  <div class="service-short-desc flex flex-col flex-grow">
                    <p class="text-gray-600 mb-2 flex-grow">${escapeHTML(excursion.shortDescription || '')}</p>
                    <p class="text-sm text-gray-500 mb-4 mt-2">
                      <i class="ri-time-line align-bottom mr-1 text-blue-500"></i>${escapeHTML(excursion.duration || '')}
                    </p>
                  </div>

                  <!-- Подробности (аккордеон) -->
                  ${hasDetails ? `
                    <div class="service-details-container">
                      <div class="service-details-content">
                        ${detailsHtml}
                      </div>
                    </div>
                  ` : ''}

                  <button onclick="event.stopPropagation(); openWhatsApp('${safeMessage}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-auto">
                    Забронировать
                  </button>
                </div>
              </div>
            `;
  }).join('')}
        </div>
      </div>
    </section>
  `;
}
