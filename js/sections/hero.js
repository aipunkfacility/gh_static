function HeroSection(siteMeta) {
  return `
    <section id="hero" class="relative text-white text-center" style="height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: 0; overflow: hidden;">
      
      <!-- Фоновое изображение -->
      <div class="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/hero-desktop.jpg">
          <img src="./images/hero-mobile.jpg" alt="${escapeHTML(siteMeta.mainTitle)}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
        </picture>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      
      <!-- Контент с автоматическими отступами -->
      <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem 1rem;">
        <div class="relative z-10 max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">${escapeHTML(siteMeta.mainTitle)}</h1>
          <p class="text-xl md:text-2xl">${escapeHTML(siteMeta.mainSubtitle)}</p>
        </div>
      </div>
      
      <!-- Кнопки внизу -->
      <div class="relative z-10 flex flex-col sm:flex-row gap-4 justify-center px-4" style="padding-bottom: 3rem; padding-top: 1rem;">
        <button onclick="smoothScroll('excursions')" 
                class="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
          Выбрать экскурсию
        </button>
        <button onclick="smoothScroll('transport')" 
                class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition">
          Арендовать байк
        </button>
      </div>
    </section>
  `;
}
