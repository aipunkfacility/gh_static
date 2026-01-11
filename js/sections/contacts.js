function ContactsSection(offices, siteMeta) {
  return `
    <section id="contacts" class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        
        <h2 class="text-4xl font-bold text-center mb-16">На связи с вами</h2>

        <!-- БЛОК 1: ЦИФРОВЫЕ СЕРВИСЫ (TELEGRAM) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <!-- Поддержка -->
          <a href="https://t.me/GreenHill_Support" target="_blank" 
             class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-blue-50 flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
              <i class="ri-telegram-fill text-3xl text-blue-500 group-hover:text-white"></i>
            </div>
            <span class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Написать</span>
            <h3 class="font-bold text-gray-800">Менеджер</h3>
            <p class="text-sm text-gray-500 mt-1">@GreenHill_Support</p>
          </a>

          <!-- Канал -->
          <a href="https://t.me/GreenHill_tours" target="_blank" 
             class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-blue-50 flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-400 transition-colors">
              <i class="ri-notification-3-line text-3xl text-blue-400 group-hover:text-white"></i>
            </div>
            <span class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Подписаться</span>
            <h3 class="font-bold text-gray-800">Наш канал</h3>
            <p class="text-sm text-gray-500 mt-1">@GreenHill_tours</p>
          </a>

          <!-- Бот -->
          <a href="https://t.me/GHtours_bot" target="_blank" 
             class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-blue-50 flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
              <i class="ri-robot-2-line text-3xl text-indigo-500 group-hover:text-white"></i>
            </div>
            <span class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Запустить</span>
            <h3 class="font-bold text-gray-800">Бот-помощник</h3>
            <p class="text-sm text-gray-500 mt-1">@GHtours_bot</p>
          </a>

        </div>

        <!-- БЛОК 2: ОФИСЫ В МУЙНЕ -->
        <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
          <div class="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <i class="ri-map-pin-2-fill text-2xl text-orange-500"></i>
            <h2 class="text-2xl font-bold text-gray-800">Наши офисы</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Офис 1 -->
            <a href="https://maps.app.goo.gl/CoBgDGcdES5Ktx1G6" target="_blank" 
               class="flex items-center gap-4 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors group">
              <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span class="font-bold text-orange-500">1</span>
              </div>
              <div class="flex-grow">
                <p class="text-sm text-orange-600 font-bold uppercase tracking-tight">Green Hill Resort</p>
                <p class="text-gray-800 font-medium">121 Nguyễn Đình Chiểu</p>
              </div>
              <i class="ri-arrow-right-up-line text-orange-300 group-hover:text-orange-500 transition-colors text-xl"></i>
            </a>

            <!-- Офис 2 -->
            <a href="https://maps.app.goo.gl/yUP4APRYq7dLKTDn9" target="_blank" 
               class="flex items-center gap-4 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors group">
              <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span class="font-bold text-orange-500">2</span>
              </div>
              <div class="flex-grow">
                <p class="text-sm text-orange-600 font-bold uppercase tracking-tight">Центр Муйне</p>
                <p class="text-gray-800 font-medium">107 Nguyễn Đình Chiểu</p>
              </div>
              <i class="ri-arrow-right-up-line text-orange-300 group-hover:text-orange-500 transition-colors text-xl"></i>
            </a>

          </div>
        </div>

        <!-- БЛОК 3: ГЛАВНЫЙ КАНАЛ СВЯЗИ (WHATSAPP) -->
        <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-10 text-center text-white shadow-xl shadow-green-200">
          <h3 class="text-2xl font-bold mb-2 text-white">Нужна быстрая консультация?</h3>
          <p class="text-green-50 mb-8 opacity-90">${escapeHTML(siteMeta.responseTimeText || 'Отвечаем быстро с 8:00 до 22:00')}</p>
          <button onclick="openWhatsApp()" 
                  class="bg-white text-green-600 px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center mx-auto">
            <i class="ri-whatsapp-line mr-3 text-3xl"></i>
            Открыть WhatsApp
          </button>
        </div>

      </div>
    </section>
  `;
}
