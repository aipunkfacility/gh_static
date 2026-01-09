function ContactsSection(offices, siteMeta) {
  return `
    <section id="contacts" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">📞 Контакты</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          ${offices.filter(o => o.isActive).map(office => renderCardOffice(office)).join('')}
        </div>
        <div class="bg-blue-50 rounded-lg p-8 text-center">
          <h3 class="text-2xl font-bold mb-4">💬 Остались вопросы?</h3>
          <p class="text-gray-600 mb-6">${escapeHTML(siteMeta.responseTimeText)}</p>
          <button onclick="openWhatsApp()" class="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600">
            <i class="fab fa-whatsapp mr-2"></i>Написать в WhatsApp
          </button>
        </div>
      </div>
    </section>
  `;
}
