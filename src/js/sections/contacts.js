import { escapeHTML } from '../utils.js';

export function ContactsSection(offices, siteMeta) {
  // Use contacts from siteMeta if available, otherwise fallback to hardcoded
  const contacts = siteMeta.contacts || {
    telegramManager: 'https://t.me/GreenHill_Support',
    telegramChannel: 'https://t.me/GreenHill_tours',
    telegramBot: 'https://t.me/GHtours_bot',
    offices: [
      { address: '121 Nguyễn Đình Chiểu', mapUrl: 'https://maps.app.goo.gl/CoBgDGcdES5Ktx1G6' },
      { address: '107 Nguyễn Đình Chiểu', mapUrl: 'https://maps.app.goo.gl/yUP4APRYq7dLKTDn9' }
    ]
  };

  return `
    <section id="contacts" class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        
        <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">Наши контакты</h2>

        <!-- СЕКЦИЯ TELEGRAM -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <a href="${escapeHTML(contacts.telegramManager)}" target="_blank" rel="noopener noreferrer"
             class="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md">
            <i class="ri-telegram-fill text-2xl"></i>
            Менеджер
          </a>
          
          <a href="${escapeHTML(contacts.telegramChannel)}" target="_blank" rel="noopener noreferrer"
             class="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md">
            <i class="ri-notification-3-line text-2xl"></i>
            Наш канал
          </a>

          <a href="${escapeHTML(contacts.telegramBot)}" target="_blank" rel="noopener noreferrer"
             class="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md">
            <i class="ri-robot-2-line text-2xl"></i>
            Наш бот
          </a>
        </div>

        <!-- СЕКЦИЯ ОФИСЫ -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          ${contacts.offices.map(office => `
            <a href="${escapeHTML(office.mapUrl)}" target="_blank" rel="noopener noreferrer"
               class="bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md text-center">
              <i class="ri-map-pin-2-fill text-2xl"></i>
              ${escapeHTML(office.address)}
            </a>
          `).join('')}
        </div>

        <!-- ГЛАВНАЯ КНОПКА WHATSAPP -->
        <div class="text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <p class="text-gray-600 mb-6 font-medium">${escapeHTML(siteMeta.responseTimeText || 'Отвечаем быстро с 8:00 до 22:00')}</p>
          <button onclick="openWhatsApp()" 
                  class="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:scale-105 flex items-center justify-center mx-auto gap-3">
            <i class="ri-whatsapp-line text-3xl"></i>
            Написать в WhatsApp
          </button>
        </div>

      </div>
    </section>
  `;
}
