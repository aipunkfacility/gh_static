function TransportSection(categories, transportItems) {
  return `
    <section id="transport" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">🛵 Аренда транспорта</h2>
        ${categories.filter(c => c.isActive !== false).map(category => {
          const items = transportItems.filter(item => item.categoryId === category.id && item.isActive);
          if (items.length === 0) return '';
          return `
            <div class="mb-16">
              <div class="bg-white rounded-lg p-6 mb-8 shadow-md">
                <h3 class="text-2xl font-bold mb-3">${category.title}</h3>
                <p class="text-gray-600">${category.description}</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${items.map(item => renderCardTransport(item)).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}