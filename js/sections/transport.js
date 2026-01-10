function TransportSection(categories, transportItems) {
  return `
    <section id="transport" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-motorbike-line text-green-600"></i> Аренда транспорта
        </h2>
        ${categories.filter(c => c.isActive !== false).map(category => {
          const items = transportItems.filter(item => item.categoryId === category.id && item.isActive);
          if (items.length === 0) return '';
          
          // Для заголовков категорий можно оставить иконку из JSON (если там класс ri-...)
          // Или заменить на общую. Оставим как есть, но выведем иконку через тег <i>
          
          return `
            <div class="mb-16">
              <div class="bg-white rounded-lg p-6 mb-8 shadow-md flex items-center gap-4">
                <i class="${category.icon} text-3xl text-primary"></i>
                <div>
                    <h3 class="text-2xl font-bold mb-1">${category.title}</h3>
                    <p class="text-gray-600">${category.description}</p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${items.map(item => renderCardTransport(item, categories)).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}
