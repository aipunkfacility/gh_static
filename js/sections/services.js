function ServicesSection(services) {
  // Используем валидацию из utils.js
  const validServices = filterValidActive(services, validateService);
  
  // Если нет валидных активных сервисов — не показываем секцию
  if (validServices.length === 0) {
    return '';
  }
  
  return `
    <section id="services" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">🛠 Наши сервисы</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${validServices.map(service => renderCardService(service)).join('')}
        </div>
      </div>
    </section>
  `;
}
