function AccommodationSection(accommodations) {
  return `
    <section id="accommodation" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">🏨 Проживание</h2>
        <div class="grid grid-cols-1 gap-8">
          ${accommodations.filter(a => a.isActive).map(acc => renderCardAccommodation(acc)).join('')}
        </div>
      </div>
    </section>
  `;
}