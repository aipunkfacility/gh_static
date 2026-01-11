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

/**
 * Преобразует текстовое поле details в структурированный HTML.
 * Фильтрует контакты и ссылки, распознает заголовки и списки.
 */
function formatServiceDetails(text) {
  if (!text) return '';

  const lines = text.split('\n')
    .map(line => line.trim())
    .filter(line => {
      // Игнорируем пустые строки и строки с контактами/ссылками
      return line && 
             !line.includes('@GreenHill_Support') && 
             !line.includes('wa.me') && 
             !line.startsWith('👉');
    });

  let html = '';
  let inList = false;

  lines.forEach(line => {
    // Проверка на заголовок: начинается с определенных иконок или заканчивается двоеточием
    const isHeader = /^[\u2705\uD83D\uDD53\uD83D\uDCA0\uD83D\uDCA3\uD83D\uDE90\uD83D\uDE98\uD83C\uDFD4\uD83C\uDFD6\uD83C\uDF03\uD83C\uDFA2\uD83C\uDFA1]/.test(line) || line.endsWith(':');
    // Проверка на пункт списка
    const isListItem = line.startsWith('•');

    if (isListItem) {
      if (!inList) {
        html += '<ul class="service-details-list">';
        inList = true;
      }
      html += `<li>${escapeHTML(line.substring(1).trim())}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }

      if (isHeader) {
        html += `<h4 class="service-details-header">${escapeHTML(line)}</h4>`;
      } else {
        html += `<p class="service-details-text">${escapeHTML(line)}</p>`;
      }
    }
  });

  if (inList) html += '</ul>';
  return html;
}

/**
 * Управляет состоянием аккордеона карточки.
 * Закрывает другие открытые карточки перед открытием выбранной.
 */
function toggleServiceAccordion(element) {
  // Если у элемента нет деталей, он не кликабелен
  if (!element.classList.contains('is-clickable')) return;

  const isOpen = element.classList.contains('is-open');

  // Закрываем все остальные открытые карточки с поддержкой аккордеона
  document.querySelectorAll('.service-card.is-open').forEach(card => {
    if (card !== element) card.classList.remove('is-open');
  });

  // Переключаем состояние текущей
  if (isOpen) {
    element.classList.remove('is-open');
  } else {
    element.classList.add('is-open');
  }
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
  const defaultMessage = (typeof CONFIG !== 'undefined' && CONFIG.WHATSAPP_DEFAULT_MESSAGE) 
    ? CONFIG.WHATSAPP_DEFAULT_MESSAGE 
    : 'Здравствуйте! У меня вопрос';
    
  const finalMessage = message || defaultMessage;
  
  // Получаем номер из siteMeta или используем fallback
  let rawNumber = '84372733431';
  if (typeof window.siteMeta !== 'undefined' && window.siteMeta && window.siteMeta.whatsappNumber) {
    rawNumber = window.siteMeta.whatsappNumber;
  }
  
  // ОЧИСТКА НОМЕРА: удаляем +, пробелы, скобки, тире
  const cleanNumber = String(rawNumber).replace(/\D/g, '');
  
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

// Функция для переключения мобильного меню
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('mobile-menu-toggle');
  
  if (mobileMenu && hamburger) {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Предотвращаем скролл body когда меню открыто
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
