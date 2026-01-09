function HeroSection(siteMeta) {
  return `
    <!-- 
      1. flex-col: элементы встают в колонку
      2. justify-between: раскидывает элементы по краям (верх/низ)
      3. items-center: центрирует по горизонтали
      4. py-16: отступы сверху и снизу, чтобы текст не прилип к самому краю экрана
    -->
    <section id="hero" class="relative text-white py-6 px-40 text-center flex flex-col justify-between items-center overflow-hidden" style="min-height: 60vh;">
      
      <!-- ФОН -->
      <div class="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/hero-desktop.jpg">
          <img src="./images/hero-mobile.jpg" alt="${escapeHTML(siteMeta.mainTitle)}" class="w-full h-full object-cover">
        </picture>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- ВЕРХНИЙ БЛОК: Заголовок и текст -->
      <!-- mt-10 добавил, чтобы не наезжало на шапку сайта (хедер) -->
      <div class="relative z-10 max-w-4xl mx-auto mt-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">${escapeHTML(siteMeta.mainTitle)}</h1>
        <p class="text-xl md:text-2xl">${escapeHTML(siteMeta.mainSubtitle)}</p>
      </div>

      <!-- НИЖНИЙ БЛОК: Кнопки -->
      <!-- mb-4 небольшой отступ от самого низа -->
      <div class="relative z-10 w-full flex flex-col sm:flex-row gap-4 justify-center mb-4">
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



