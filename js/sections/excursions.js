function ExcursionsSection(excursions) {
  return `
    <section id="excursions" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">🎯 Все экскурсии</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${excursions.filter(e => e.isActive).map(excursion => {
            const message = `Хочу забронировать экскурсию: ${excursion.title}`;
            return `
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="bg-primary text-white px-4 py-2 text-center font-bold">
                  ${escapeHTML(excursion.priceFrom)}
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-3">${escapeHTML(excursion.title)}</h3>
                  <p class="text-gray-600 mb-2">${escapeHTML(excursion.shortDescription)}</p>
                  <p class="text-sm text-gray-500 mb-4">⏱ ${escapeHTML(excursion.duration)}</p>
                  <button onclick='openWhatsApp("${escapeHTML(message).replace(/"/g, '&quot;')}")' class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition">
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
