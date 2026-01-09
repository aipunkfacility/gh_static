// Функция для защиты от XSS-атак
function escapeHTML(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Функция для фильтрации только активных элементов
function filterActive(items) {
  return items.filter(item => item.isActive !== false);
}

// Валидация обязательных полей для разных типов объектов
function validateItem(item, requiredFields) {
  if (!item) return false;
  
  for (const field of requiredFields) {
    if (item[field] === undefined || item[field] === null || item[field] === '') {
      console.warn(`⚠️ Поле '${field}' отсутствует или пустое в объекте:`, item);
      return false;
    }
  }
  return true;
}

// Валидаторы для разных типов данных
function validateExcursion(excursion) {
  return validateItem(excursion, ['title', 'shortDescription', 'isActive']);
}

function validateService(service) {
  return validateItem(service, ['title', 'shortDescription', 'isActive']);
}

function validateTransport(transport) {
  return validateItem(transport, ['title', 'useCases', 'isActive']);
}

function validateAccommodation(acc) {
  return validateItem(acc, ['title', 'slogan', 'isActive']);
}

function validateOffice(office) {
  return validateItem(office, ['title', 'description', 'isActive']);
}

// Функция фильтрации с валидацией
function filterValidActive(items, validator) {
  return items.filter(item => validator(item));
}
