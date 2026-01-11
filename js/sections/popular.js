function PopularSection(excursions, services, transport, categories) {
  // Собираем все популярные элементы в один массив
  const popularItems = [
    ...excursions.filter(e => e.isPopular).map(e => ({...e, type: 'excursion'})),
    ...services.filter(s => s.isPopular).map(s => ({...s, type: 'service'})),
    ...transport.filter(t => t.isPopular).map(t => ({...t, type: 'transport'}))
  ];
  
  return `
    <section id="popular" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-fire-line text-orange-500"></i> Популярное
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${popularItems.map(item => {
            // Для транспорта используем специализированную карточку
            if (item.type === 'transport') {
              return renderCardTransport(item, categories);
            }
            
            // Для экскурсий и сервисов используем общую карточку сервиса, 
            // которая теперь поддерживает аккордеон. 
            // ПЕРЕДАЕМ ВЕСЬ ОБЪЕКТ item, чтобы не потерять поле details.
            return renderCardService(item);
          }).join('')}
        </div>
      </div>
    </section>
  `;
}
