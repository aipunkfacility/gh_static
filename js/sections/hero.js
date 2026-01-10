function HeroSection(siteMeta) {
  return `
    <section id="hero" class="hero-section">
      
      <div class="hero-bg">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/hero-desktop.jpg">
          <img 
            src="./images/hero-mobile.jpg" 
            alt="${escapeHTML(siteMeta.mainTitle)}"
          >
        </picture>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-text">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            ${escapeHTML(siteMeta.mainTitle)}
          </h1>
          <p class="text-xl md:text-2xl">
            ${escapeHTML(siteMeta.mainSubtitle)}
          </p>
        </div>

        <div class="hero-buttons">
          <button
            onclick="smoothScroll('excursions')"
            class="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Выбрать экскурсию
          </button>
          <button
            onclick="smoothScroll('transport')"
            class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition"
          >
            Арендовать байк
          </button>
        </div>
      </div>

    </section>
  `;
}
