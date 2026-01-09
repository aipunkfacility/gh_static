function renderCardService(service) {
  return `
    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 class="text-xl font-bold text-gray-800 mb-3">${service.title}</h3>
      <p class="text-gray-600 mb-4">${service.shortDescription}</p>
      <button onclick="openWhatsApp()" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition">
        Заказать
      </button>
    </div>
  `;
}

function renderCardTransport(transport, categories) {
  const category = categories ? categories.find(c => c.id === transport.categoryId) : null;
  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="bg-gray-100 p-4 border-b">
        <h3 class="text-lg font-bold">${transport.title}</h3>
        ${category ? `<span class="inline-block mt-2 px-3 py-1 text-sm rounded-full ${getCategoryColor(category.slug)}">${category.title}</span>` : ''}
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">${transport.useCases}</p>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Преимущества:</h4>
          <ul class="list-disc list-inside text-gray-600 text-sm">
            ${transport.benefits.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Характеристики:</h4>
          <ul class="list-disc list-inside text-gray-600 text-sm">
            ${transport.specs.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
        <button onclick="openWhatsApp()" class="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-green-600 transition">
          Забронировать
        </button>
      </div>
    </div>
  `;
}

function renderCardAccommodation(acc) {
  return `
    <div class="bg-white rounded-lg shadow-md p-8">
      <h3 class="text-2xl font-bold mb-4">${acc.title}</h3>
      <p class="text-gray-600 mb-6">${acc.slogan}</p>
      
      <div class="mb-4">
        <h4 class="font-semibold mb-2">🏡 Территория:</h4>
        <p class="text-gray-600">${acc.territoryDescription}</p>
      </div>
      
      <div class="mb-4">
        <h4 class="font-semibold mb-2">🛏 В номерах:</h4>
        <ul class="list-disc list-inside text-gray-600">
          ${acc.roomFeatures.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      
      <div class="mb-4">
        <h4 class="font-semibold mb-2">🍹 Атмосфера:</h4>
        <p class="text-gray-600">${acc.atmosphere}</p>
      </div>
      
      <div class="mb-6">
        <h4 class="font-semibold mb-2">📍 Локация:</h4>
        <p class="text-gray-600">${acc.locationDescription}</p>
        <p class="text-gray-800 font-medium mt-1">${acc.address}</p>
      </div>
      
      <button onclick="openWhatsApp()" class="w-full bg-purple-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-purple-600 transition">
        Узнать цены
      </button>
    </div>
  `;
}

function renderCardOffice(office) {
  return `
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-bold mb-3">${office.title}</h3>
      <p class="text-gray-600 mb-4">${office.description}</p>
      <div class="mb-2">
        <p class="font-semibold">📍 Адрес:</p>
        <p class="text-gray-600">${office.address}</p>
      </div>
      <div class="mb-4">
        <p class="font-semibold">⏰ Время работы:</p>
        <p class="text-gray-600">${office.workTime}</p>
      </div>
      <button onclick="openWhatsApp()" class="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-600 transition">
        Написать в WhatsApp
      </button>
    </div>
  `;
}

function getCategoryColor(slug) {
  const colors = {
    'standard': 'bg-green-100 text-green-800',
    'comfort': 'bg-blue-100 text-blue-800',
    'maxi': 'bg-yellow-100 text-yellow-800',
    'moto': 'bg-red-100 text-red-800',
    'car': 'bg-gray-100 text-gray-800'
  };
  return colors[slug] || 'bg-gray-100 text-gray-800';
}

function openWhatsApp() {
  window.open('https://wa.me/84372733431', '_blank');
}
