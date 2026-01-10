function HeroSection(siteMeta) {
  return `
    <section id="hero" class="relative text-white px-4 text-center overflow-hidden" style="height: 100vh;">
      
      <!-- Фоновое изображение - фиксированная высота -->
      <div class="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/hero-desktop.jpg">
          <img src="./images/hero-mobile.jpg" alt="${escapeHTML(siteMeta.mainTitle)}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
        </picture>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      
      <!-- Контент с абсолютным позиционированием -->
      <div style="position: relative; height: 100%; z-index: 10;">
        
        <!-- Текст наверху -->
        <div style="position: absolute; top: 8rem; left: 0; right: 0; max-width: 56rem; margin: 0 auto; padding: 0 1rem;">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">${escapeHTML(siteMeta.mainTitle)}</h1>
          <p class="text-xl md:text-2xl">${escapeHTML(siteMeta.mainSubtitle)}</p>
        </div>
        
        <!-- Кнопки внизу -->
        <div style="position: absolute; bottom: 6rem; left: 0; right: 0;">
          <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
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
        
      </div>
    </section>
  `;
}
