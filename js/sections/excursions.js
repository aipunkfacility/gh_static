function ExcursionsSection(excursions) {
  return `
    <section id="excursions" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-compass-3-line text-blue-500"></i> Все экскурсии
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${excursions.filter(e => e.isActive).map(excursion => {
            const message = `Хочу забронировать экскурсию: ${excursion.title}`;
            
            const imageHtml = excursion.image 
              ? `<div class="h-56 overflow-hidden group flex-shrink-0">
                   <img src="${excursion.image}" alt="${escapeHTML(excursion.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                 </div>`
              : '';

            return `
              <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full">
                ${imageHtml}
                <div class="bg-primary text-white px-4 py-2 text-center font-bold flex-shrink-0">
                  ${escapeHTML(excursion.priceFrom)}
                </div>
                <div class="p-6 flex flex-col flex-grow">
                  <h3 class="text-xl font-bold mb-3">${escapeHTML(excursion.title)}</h3>
                  <p class="text-gray-600 mb-2 flex-grow">${escapeHTML(excursion.shortDescription)}</p>
                  <p class="text-sm text-gray-500 mb-4 mt-2">
                    <i class="ri-time-line align-bottom mr-1"></i>${escapeHTML(excursion.duration)}
                  </p>
                  <button onclick='openWhatsApp("${escapeHTML(message).replace(/"/g, '&quot;')}")' class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-auto">
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
