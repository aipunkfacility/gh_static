function HeroSection(siteMeta) {
  return `
    <section id="hero" class="hero-section">
      
      <div class="hero-bg">
        <picture>
          <source media="(min-width: 1024px)" srcset="./images/hero-desktop.jpg">
          <img 
            src="./images/hero-mobile.jpg" 
            alt="${escapeHTML(siteMeta.mainTitle)}"
          >
        </picture>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-text">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            ${escapeHTML(siteMeta.mainTitle)}
          </h1>
          <p class="text-xl md:text-2xl drop-shadow-md text-gray-100">
            ${escapeHTML(siteMeta.mainSubtitle)}
          </p>
        </div>

        <div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <!-- Кнопка 1 -->
          <button
            onclick="smoothScroll('excursions')"
            class="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition flex items-center justify-center gap-3"
          >
            <i class="ri-map-2-line text-2xl"></i>
            Выбрать экскурсию
          </button>

          <!-- Кнопка 2 -->
          <button
            onclick="smoothScroll('transport')"
            class="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition flex items-center justify-center gap-3"
          >
            <i class="ri-motorbike-line text-orange-500 text-2xl"></i>
            Арендовать байк
          </button>
        </div>
      </div>

    </section>
  `;
}
