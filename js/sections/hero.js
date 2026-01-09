function HeroSection(siteMeta) {
  return `
    <!-- 
      РЕШЕНИЕ ДЛЯ АДАПТИВА:
      1. padding-top: 20vh — отступ сверху равен 20% высоты экрана (на мобиле меньше, на ПК больше).
      2. padding-bottom: 5vh — отступ снизу 5% высоты экрана.
      3. min-height: 75vh — секция занимает 75% экрана, открывая панораму.
    -->
    <section id="hero" 
             class="relative text-white px-4 text-center flex flex-col justify-between items-center overflow-hidden" 
             style="min-height: 75vh; padding-top: 20vh; padding-bottom: 5vh;">
      
      <!-- ФОН -->
      <div class="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/hero-desktop.jpg">
          <img src="./images/hero-mobile.jpg" alt="${escapeHTML(siteMeta.mainTitle)}" class="w-full h-full object-cover">
        </picture>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- ВЕРХНИЙ БЛОК: Текст -->
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
