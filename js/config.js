// Конфигурация сайта
const CONFIG = {
  API_BASE: './data/',
  API_TIMEOUT: 10000, // 10 секунд
  RETRY_ATTEMPTS: 3,
  WHATSAPP_DEFAULT_MESSAGE: 'Здравствуйте! У меня вопрос'
};

// Константы путей к файлам
const API_ENDPOINTS = {
  SITE_META: `${CONFIG.API_BASE}site-meta.json`,
  EXCURSIONS: `${CONFIG.API_BASE}excursions.json`,
  TRANSPORT_CATEGORIES: `${CONFIG.API_BASE}transport-categories.json`,
  TRANSPORT_ITEMS: `${CONFIG.API_BASE}transport-items.json`,
  ACCOMMODATIONS: `${CONFIG.API_BASE}accommodations.json`,
  SERVICES: `${CONFIG.API_BASE}services.json`,
  OFFICES: `${CONFIG.API_BASE}offices.json`
};
