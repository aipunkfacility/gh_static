function ServicesSection(services) {
  const validServices = filterValidActive(services, validateService);
  
  if (validServices.length === 0) {
    return '';
  }
  
  return `
    <section id="services" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-tools-line text-gray-600"></i> Наши сервисы
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          ${validServices.map(service => renderCardService(service)).join('')}
        </div>
      </div>
    </section>
  `;
}
