function renderCardService(service) {
  const message = `Хочу заказать: ${service.title}`;
  return `
    <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <!-- ДОБАВЛЕНО: Картинка с alt и lazy loading -->
      <div class="h-48 overflow-hidden">
        <img src="${service.image}" alt="${escapeHTML(service.title)}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy">
      </div>
      
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-800 mb-3">${escapeHTML(service.title)}</h3>
        <p class="text-gray-600 mb-4">${escapeHTML(service.shortDescription)}</p>
        <button onclick='openWhatsApp("${escapeHTML(message).replace(/"/g, '&quot;')}")' class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition">
          Заказать
        </button>
      </div>
    </div>
  `;
}

function renderCardTransport(transport, categories) {
  const category = categories ? categories.find(c => c.id === transport.categoryId) : null;
  const message = `Хочу забронировать: ${transport.title}`;
  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <!-- ДОБАВЛЕНО: Картинка с alt и lazy loading -->
      <div class="h-56 overflow-hidden relative group">
        <img src="${transport.image}" alt="${escapeHTML(transport.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        ${category ? `<span class="absolute top-4 right-4 px-3 py-1 text-sm font-bold rounded-full shadow-md ${getCategoryColor(category.slug)}">${escapeHTML(category.title)}</span>` : ''}
      </div>

      <div class="bg-gray-100 p-4 border-b">
        <h3 class="text-lg font-bold">${escapeHTML(transport.title)}</h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">${escapeHTML(transport.useCases)}</p>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Преимущества:</h4>
          <ul class="list-disc list-inside text-gray-600 text-sm">
            ${transport.benefits.map(b => `<li>${escapeHTML(b)}</li>`).join('')}
          </ul>
        </div>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Характеристики:</h4>
          <ul class="list-disc list-inside text-gray-600 text-sm">
            ${transport.specs.map(s => `<li>${escapeHTML(s)}</li>`).join('')}
          </ul>
        </div>
        <button onclick='openWhatsApp("${escapeHTML(message).replace(/"/g, '&quot;')}")' class="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-green-600 transition">
          Забронировать
        </button>
      </div>
    </div>
  `;
}

function renderCardAccommodation(acc) {
  const message = `Хочу узнать цены на: ${acc.title}`;
  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <!-- ДОБАВЛЕНО: Большая картинка с alt -->
      <div class="h-64 overflow-hidden relative">
        <img src="${acc.image}" alt="${escapeHTML(acc.title)}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
            <h3 class="text-white text-2xl font-bold drop-shadow-md">${escapeHTML(acc.title)}</h3>
        </div>
      </div>

      <div class="p-8">
        <p class="text-gray-600 mb-6 italic border-l-4 border-purple-500 pl-4">${escapeHTML(acc.slogan)}</p>
        
        <div class="mb-4">
          <h4 class="font-semibold mb-2">🏡 Территория:</h4>
          <p class="text-gray-600">${escapeHTML(acc.territoryDescription)}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="font-semibold mb-2">🛏 В номерах:</h4>
          <ul class="list-disc list-inside text-gray-600">
            ${acc.roomFeatures.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
          </ul>
        </div>
        
        <div class="mb-4">
          <h4 class="font-semibold mb-2">🍹 Атмосфера:</h4>
          <p class="text-gray-600">${escapeHTML(acc.atmosphere)}</p>
        </div>
        
        <div class="mb-6">
          <h4 class="font-semibold mb-2">📍 Локация:</h4>
          <p class="text-gray-600">${escapeHTML(acc.locationDescription)}</p>
          <p class="text-gray-800 font-medium mt-1"><i class="fas fa-map-marker-alt text-red-500 mr-2"></i>${escapeHTML(acc.address)}</p>
        </div>
        
        <button onclick='openWhatsApp("${escapeHTML(message).replace(/"/g, '&quot;')}")' class="w-full bg-purple-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-purple-600 transition">
          Узнать цены
        </button>
      </div>
    </div>
  `;
}

function renderCardOffice(office) {
  // Для офиса часто нет картинки в JSON, но если есть - раскомментируйте код ниже
  /* 
  const imageHtml = office.image ? `<img src="${office.image}" alt="${escapeHTML(office.title)}" class="w-full h-48 object-cover mb-4 rounded-lg" loading="lazy">` : ''; 
  */
  
  return `
    <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
      <h3 class="text-xl font-bold mb-3">${escapeHTML(office.title)}</h3>
      <p class="text-gray-600 mb-4">${escapeHTML(office.description)}</p>
      <div class="mb-2">
        <p class="font-semibold">📍 Адрес:</p>
        <p class="text-gray-600">${escapeHTML(office.address)}</p>
      </div>
      <div class="mb-4">
        <p class="font-semibold">⏰ Время работы:</p>
        <p class="text-gray-600">${escapeHTML(office.workTime)}</p>
      </div>
      <button onclick='openWhatsApp("Здравствуйте! У меня вопрос по офису ${escapeHTML(office.title)}")' class="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-600 transition">
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
