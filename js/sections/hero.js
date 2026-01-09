function HeroSection(siteMeta) {
  return `
    <section id="hero" class="bg-gradient-to-r from-primary to-orange-600 text-white py-20 px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">${escapeHTML(siteMeta.mainTitle)}</h1>
        <p class="text-xl md:text-2xl mb-8">${escapeHTML(siteMeta.mainSubtitle)}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button onclick="smoothScroll('excursions')" 
                  class="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
            Выбрать экскурсию
          </button>
          <button onclick="smoothScroll('transport')" 
                  class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition">
            Арендовать байк
          </button>
        </div>
      </div>
    </section>
  `;
}
