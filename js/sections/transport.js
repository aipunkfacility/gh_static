function TransportSection(categories, transportItems) {
  // Фильтруем категории, которые не помечены как неактивные
  const activeCategories = categories.filter(c => c.isActive !== false);

  if (activeCategories.length === 0) {
    return '';
  }

  return `
    <section id="transport" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-motorbike-line text-orange-500"></i> Аренда транспорта
        </h2>

        ${activeCategories.map(category => {
          // Выбираем активные модели для текущей категории
          const items = transportItems.filter(item => item.categoryId === category.id && item.isActive);
          
          // Если в категории нет активных байков/авто, не отображаем заголовок категории
          if (items.length === 0) return '';
          
          return `
            <div class="mb-16">
              <!-- Заголовок категории (Standard, Maxi и т.д.) -->
              <div class="bg-white rounded-lg p-6 mb-8 shadow-md flex items-center gap-4 border-l-4 border-orange-500">
                <i class="${category.icon || 'ri-motorbike-line'} text-3xl text-orange-500"></i>
                <div>
                    <h3 class="text-2xl font-bold mb-1">${escapeHTML(category.title)}</h3>
                    <p class="text-gray-600">${escapeHTML(category.description || '')}</p>
                </div>
              </div>

              <!-- Сетка карточек транспорта -->
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
