function HeroSection(siteMeta) {
  return `
    <!-- Убираем все отступы сверху, так как main уже имеет pt-20 -->
    <section id="hero" class="relative text-white px-4 text-center flex flex-col justify-center items-center overflow-hidden" style="min-height: calc(100vh - 5rem);">
      
      <!-- Фоновое изображение -->
      <div class="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/hero-desktop.jpg">
          <img src="./images/hero-mobile.jpg" alt="${escapeHTML(siteMeta.mainTitle)}" class="w-full h-full object-cover">
        </picture>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      
      <!-- Контент -->
      <div class="relative z-10 max-w-4xl mx-auto">
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
