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

// Кросс-браузерный плавный скролл
function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Глобальная функция для открытия WhatsApp чата
function openWhatsApp(message) {
  // Используем переданное сообщение или дефолтное
  const defaultMessage = 'Здравствуйте! У меня вопрос';
  const finalMessage = message || defaultMessage;
  
  // Пытаемся получить номер из siteMeta, если доступен
  let phoneNumber = '84372733431'; // fallback номер
  
  if (typeof siteMeta !== 'undefined' && siteMeta && siteMeta.whatsappNumber) {
    phoneNumber = siteMeta.whatsappNumber;
  }
  
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

// Функция для переключения мобильного меню
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('mobile-menu-toggle');
  
  if (mobileMenu && hamburger) {
    // Переключаем класс active на меню
    mobileMenu.classList.toggle('active');
    
    // Переключаем класс active на гамбургере (для анимации)
    hamburger.classList.toggle('active');
    
    // Предотвращаем скролл body когда меню открыто
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
