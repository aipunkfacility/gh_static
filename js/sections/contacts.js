function ContactsSection(offices, siteMeta) {
  return `
    <section id="contacts" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        
        <!-- Заголовок секции -->
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-phone-line text-green-500"></i> Контакты
        </h2>

        <!-- Список офисов -->
        <div class="flex flex-col gap-10 mb-16 text-center">
          
          <!-- Офис 1 -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <i class="ri-map-pin-2-fill text-2xl text-orange-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Офис 1 (Green Hill Resort & Spa)</h3>
            <p class="text-gray-600 mb-4 max-w-md">
              Главный офис в резорте. Аренда байков, обмен валюты и заказ трансферов.
            </p>
            <a href="https://maps.app.goo.gl/CoBgDGcdES5Ktx1G6" target="_blank" 
               class="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 transition border-b-2 border-blue-100 pb-1">
              121 Nguyễn Đình Chiểu, Ham Tien
              <i class="ri-external-link-line text-sm"></i>
            </a>
          </div>

          <div class="w-16 h-px bg-gray-100 mx-auto"></div>

          <!-- Офис 2 -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <i class="ri-map-pin-2-fill text-2xl text-orange-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Офис 2 (Центр Муйне)</h3>
            <p class="text-gray-600 mb-4 max-w-md">
              Дополнительный офис в центре туристической зоны.
            </p>
            <a href="https://maps.app.goo.gl/yUP4APRYq7dLKTDn9" target="_blank" 
               class="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 transition border-b-2 border-blue-100 pb-1">
              107 Nguyễn Đình Chiểu, Ham Tien
              <i class="ri-external-link-line text-sm"></i>
            </a>
          </div>

        </div>

        <!-- Нижний блок с WhatsApp -->
        <div class="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 class="text-2xl font-bold mb-4">💬 Остались вопросы?</h3>
          <p class="text-gray-600 mb-6">${escapeHTML(siteMeta.responseTimeText || 'Отвечаем быстро в рабочее время')}</p>
          <button onclick="openWhatsApp()" class="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg flex items-center justify-center mx-auto">
            <i class="ri-whatsapp-line mr-2 text-2xl"></i>Написать в WhatsApp
          </button>
        </div>

      </div>
    </section>
  `;
}
