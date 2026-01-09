function HeroSection(siteMeta) {
  return `
    <!-- 
      ИСПРАВЛЕНИЯ:
      1. pt-32 (padding-top): Большой отступ сверху (примерно 128px), чтобы опустить текст.
      2. pb-8 (padding-bottom): Небольшой отступ снизу для кнопок.
      3. px-4: Вернул стандартные боковые отступы (px-40 ломает вид на мобильных).
    -->
    <section id="hero" class="relative text-white pt-232 pb-128 px-4 text-center flex flex-col justify-between items-center overflow-hidden" style="min-height: 70vh;">
      
      <!-- ФОН -->
      <div class="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/hero-desktop.jpg">
          <img src="./images/hero-mobile.jpg" alt="${escapeHTML(siteMeta.mainTitle)}" class="w-full h-full object-cover">
        </picture>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- ВЕРХНИЙ БЛОК: Текст -->
      <!-- Убрал margin-top (mt-10), так как теперь работает общий padding секции (pt-32) -->
      <div class="relative z-10 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">${escapeHTML(siteMeta.mainTitle)}</h1>
        <p class="text-xl md:text-2xl">${escapeHTML(siteMeta.mainSubtitle)}</p>
      </div>

      <!-- НИЖНИЙ БЛОК: Кнопки -->
      <div class="relative z-10 w-full flex flex-col sm:flex-row gap-4 justify-center">
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



