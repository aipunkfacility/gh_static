function PopularSection(excursions, services, transport, categories) {
  const popularItems = [
    ...excursions.filter(e => e.isPopular).map(e => ({...e, type: 'excursion'})),
    ...services.filter(s => s.isPopular).map(s => ({...s, type: 'service'})),
    ...transport.filter(t => t.isPopular).map(t => ({...t, type: 'transport'}))
  ];
  
  return `
    <section id="popular" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">🔥 Популярное</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${popularItems.map(item => {
            // ИСПРАВЛЕНИЕ: Добавил image: item.image в объект
            if (item.type === 'excursion') {
                return renderCardService({
                    title: item.title, 
                    shortDescription: item.shortDescription, 
                    slug: item.slug, 
                    image: item.image 
                });
            }
            if (item.type === 'transport') return renderCardTransport(item, categories);
            return renderCardService(item);
          }).join('')}
        </div>
      </div>
    </section>
  `;
}
