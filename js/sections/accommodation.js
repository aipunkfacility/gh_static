function AccommodationSection(accommodations) {
  // Используем валидацию из utils.js
  const validAccommodations = filterValidActive(accommodations, validateAccommodation);
  
  // Если нет валидных активных вариантов проживания — не показываем секцию
  if (validAccommodations.length === 0) {
    return '';
  }
  
  return `
    <section id="accommodation" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">🏨 Проживание</h2>
        <div class="grid grid-cols-1 gap-8">
          ${validAccommodations.map(acc => renderCardAccommodation(acc)).join('')}
        </div>
      </div>
    </section>
  `;
}
