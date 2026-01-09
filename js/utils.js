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
