(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const S={},a={API_BASE:S?"/gh_static/data/":"./data/",RETRY_ATTEMPTS:3,WHATSAPP_DEFAULT_MESSAGE:"Здравствуйте! У меня вопрос"},E={SITE_META:`${a.API_BASE}site-meta.json`,EXCURSIONS:`${a.API_BASE}excursions.json`,TRANSPORT_CATEGORIES:`${a.API_BASE}transport-categories.json`,TRANSPORT_ITEMS:`${a.API_BASE}transport-items.json`,ACCOMMODATIONS:`${a.API_BASE}accommodations.json`,SERVICES:`${a.API_BASE}services.json`,OFFICES:`${a.API_BASE}offices.json`};function r(e){if(!e)return"";const s=document.createElement("div");return s.textContent=e,s.innerHTML}function m(e,s){if(!e)return!1;for(const t of s)if(e[t]===void 0||e[t]===null||e[t]==="")return console.warn(`⚠️ Поле '${t}' отсутствует или пустое в объекте:`,e),!1;return!0}function T(e){return m(e,["title","shortDescription","isActive"])}function v(e){return m(e,["title","shortDescription","isActive"])}function D(e){return m(e,["title","useCases","isActive"])}function w(e){return m(e,["title","slogan","isActive"])}function I(e){return m(e,["title","description","isActive"])}function d(e,s){return e.filter(t=>s(t))}function u(e){if(!e)return"";const s=e.split(`
`).map(i=>i.trim()).filter(i=>i&&!i.includes("@GreenHill_Support")&&!i.includes("wa.me")&&!i.startsWith("👉"));let t="",l=!1;return s.forEach(i=>{const o=/^[\u2705\uD83D\uDD53\uD83D\uDCA0\uD83D\uDCA3\uD83D\uDE90\uD83D\uDE98\uD83C\uDFD4\uD83C\uDFD6\uD83C\uDF03\uD83C\uDFA2\uD83C\uDFA1]/.test(i)||i.endsWith(":");i.startsWith("•")?(l||(t+='<ul class="service-details-list">',l=!0),t+=`<li>${r(i.substring(1).trim())}</li>`):(l&&(t+="</ul>",l=!1),o?t+=`<h4 class="service-details-header">${r(i)}</h4>`:t+=`<p class="service-details-text">${r(i)}</p>`)}),l&&(t+="</ul>"),t}function _(e){if(!e.classList.contains("is-clickable"))return;const s=e.classList.contains("is-open");document.querySelectorAll(".service-card.is-open").forEach(t=>{t!==e&&t.classList.remove("is-open")}),s?e.classList.remove("is-open"):e.classList.add("is-open")}function k(e){const s=document.getElementById(e);s&&s.scrollIntoView({behavior:"smooth",block:"start"})}function P(e){const s=typeof a<"u"&&a.WHATSAPP_DEFAULT_MESSAGE?a.WHATSAPP_DEFAULT_MESSAGE:"Здравствуйте! У меня вопрос",t=e||s;let l="84372733431";typeof window.siteMeta<"u"&&window.siteMeta&&window.siteMeta.whatsappNumber&&(l=window.siteMeta.whatsappNumber);const i=String(l).replace(/\D/g,""),o=encodeURIComponent(t),n=`https://wa.me/${i}?text=${o}`;window.open(n,"_blank","noopener,noreferrer")}function p(){const e=document.getElementById("mobile-menu"),s=document.getElementById("mobile-menu-toggle");e&&s&&(e.classList.toggle("active"),s.classList.toggle("active"),e.classList.contains("active")?document.body.style.overflow="hidden":document.body.style.overflow="")}const h="gh_static_cache_",C={async get(e,s=!1){const t=E[e];if(!t)return console.error(`❌ Неизвестный эндпоинт: ${e}`),null;const l=h+e;if(!s){const o=sessionStorage.getItem(l);if(o)try{return JSON.parse(o)}catch(n){console.warn(`⚠️ Ошибка парсинга кеша для ${e}:`,n),sessionStorage.removeItem(l)}}const i=await this.fetchWithRetry(t);if(i)try{sessionStorage.setItem(l,JSON.stringify(i))}catch(o){console.warn(`⚠️ Не удалось сохранить в кеш для ${e}:`,o)}return i},async fetchWithRetry(e,s=a.RETRY_ATTEMPTS){for(let t=0;t<=s;t++)try{const l=await fetch(e);if(!l.ok)throw new Error(`HTTP ${l.status}: ${e}`);return await l.json()}catch(l){if(console.warn(`Попытка ${t+1} загрузки ${e} не удалась:`,l.message),t===s)return console.error(`❌ Ошибка загрузки ${e} после ${s+1} попыток`),null;await new Promise(i=>setTimeout(i,1e3*Math.pow(2,t)))}},async getAll(e=!1){const[s,t,l,i,o,n,c]=await Promise.all([this.get("SITE_META",e),this.get("EXCURSIONS",e),this.get("TRANSPORT_CATEGORIES",e),this.get("TRANSPORT_ITEMS",e),this.get("ACCOMMODATIONS",e),this.get("SERVICES",e),this.get("OFFICES",e)]);return{meta:s,excursions:t,categories:l,transport:i,accommodations:o,services:n,offices:c}},clearCache(){Object.keys(sessionStorage).filter(e=>e.startsWith(h)).forEach(e=>sessionStorage.removeItem(e))}};function M(e){return`
    <section id="hero" class="hero-section">
      
      <div class="hero-bg">
        <picture>
          <source media="(min-width: 1024px)" srcset="./images/hero-desktop.webp">
          <img 
            src="./images/hero-mobile.webp" 
            alt="${r(e.mainTitle)}"
          >
        </picture>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-text">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            ${r(e.mainTitle)}
          </h1>
          <p class="text-xl md:text-2xl drop-shadow-md text-gray-100">
            ${r(e.mainSubtitle)}
          </p>
        </div>

        <div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <!-- Кнопка 1 -->
          <button
            onclick="smoothScroll('excursions')"
            class="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition flex items-center justify-center gap-3"
          >
            <i class="ri-map-2-line text-2xl"></i>
            Выбрать экскурсию
          </button>

          <!-- Кнопка 2 -->
          <button
            onclick="smoothScroll('transport')"
            class="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition flex items-center justify-center gap-3"
          >
            <i class="ri-motorbike-line text-orange-500 text-2xl"></i>
            Арендовать байк
          </button>
        </div>
      </div>

    </section>
  `}function y(e){const s=e.title||"",t=!!(e.details&&e.details.trim()),l=`Хочу заказать: ${s}`,i=r(l).replace(/'/g,"\\'"),o=e.image?`<div class="overflow-hidden border-b border-gray-100 flex-shrink-0">
         <img src="${e.image}" alt="${r(s)}" width="600" height="400" class="w-full h-auto block hover:scale-105 transition-transform duration-500" loading="lazy">
       </div>`:"",n=t?u(e.details):"";return`
    <div class="service-card bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col ${t?"is-clickable":""}" 
         ${t?'onclick="toggleServiceAccordion(this)"':""}>
      ${o}
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-xl font-bold text-gray-800">${r(s)}</h3>
          ${t?'<i class="ri-arrow-down-s-line accordion-chevron text-2xl text-gray-400"></i>':""}
        </div>

        <p class="service-short-desc text-gray-600 mb-4 flex-grow">${r(e.shortDescription||"")}</p>

        ${t?`
          <div class="service-details-container">
            <div class="service-details-content">
              ${n}
            </div>
          </div>
        `:""}

        <button onclick="event.stopPropagation(); openWhatsApp('${i}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-6 flex items-center justify-center">
          <i class="ri-whatsapp-line mr-2 text-xl"></i>Заказать
        </button>
      </div>
    </div>
  `}function $(e,s){const t=s?s.find(g=>g.id===e.categoryId):null,l=e.title||"",i=!!(e.details&&e.details.trim()),o=e.benefits&&e.benefits.length>0||e.specs&&e.specs.length>0,n=i||o,c=`Хочу забронировать: ${l}`,f=r(c).replace(/'/g,"\\'");let x="";e.image&&(x=`
      <div class="overflow-hidden relative group flex-shrink-0">
        <img src="${e.image}" alt="${r(l)}" width="600" height="400" class="w-full h-auto block group-hover:scale-105 transition-transform duration-500" loading="lazy">
        ${t?`<span class="absolute top-4 right-4 px-3 py-1 text-sm font-bold rounded-full shadow-md ${O(t.slug)}">${r(t.title)}</span>`:""}
      </div>`);const A=i?u(e.details):"";return`
    <div class="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col ${n?"is-clickable":""}"
         ${n?'onclick="toggleServiceAccordion(this)"':""}>
      ${x}
      <div class="bg-gray-100 p-4 border-b flex-shrink-0 flex justify-between items-center">
        <h3 class="text-lg font-bold">${r(l)}</h3>
        ${n?'<i class="ri-arrow-down-s-line accordion-chevron text-xl text-gray-500"></i>':""}
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <p class="service-short-desc text-gray-600 mb-4 flex-grow">${r(e.useCases||"")}</p>
        
        ${n?`
          <div class="service-details-container">
            <div class="service-details-content">
              ${A}
              
              <div class="mt-4 pt-4 border-t border-gray-100">
                ${e.benefits&&e.benefits.length>0?`
                  <h4 class="font-bold text-gray-800 mb-2">Преимущества:</h4>
                  <ul class="list-disc list-inside text-gray-600 text-sm mb-4">
                    ${e.benefits.map(g=>`<li>${r(g)}</li>`).join("")}
                  </ul>
                `:""}
                
                ${e.specs&&e.specs.length>0?`
                  <h4 class="font-bold text-gray-800 mb-2">Характеристики:</h4>
                  <ul class="list-disc list-inside text-gray-600 text-sm">
                    ${e.specs.map(g=>`<li>${r(g)}</li>`).join("")}
                  </ul>
                `:""}
              </div>
            </div>
          </div>
        `:""}

        <button onclick="event.stopPropagation(); openWhatsApp('${f}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-6 flex items-center justify-center">
          <i class="ri-motorbike-fill mr-2 text-xl"></i>Забронировать
        </button>
      </div>
    </div>
  `}function j(e){const s=e.title||"",t=!!(e.details&&e.details.trim()),l=`Хочу узнать цены на: ${s}`,i=r(l).replace(/'/g,"\\'"),o=e.image?`<div class="overflow-hidden relative flex-shrink-0">
         <img src="${e.image}" alt="${r(s)}" width="800" height="500" class="w-full h-auto block hover:scale-105 transition-transform duration-700" loading="lazy">
         <!-- Полупрозрачная плашка: на всю ширину до низа с увеличенным заголовком -->
         <div class="absolute" style="bottom: 0; left: 0; right: 0; padding: 25px; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); z-index: 10;">
            <h3 class="text-white text-xl md:text-2xl font-bold drop-shadow-sm">${r(s)}</h3>
         </div>
       </div>`:"",n=t?u(e.details):"";return`
    <div class="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col ${t?"is-clickable":""}"
         ${t?'onclick="toggleServiceAccordion(this)"':""}>
      ${o}

      <div class="p-8 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-4">
          <!-- Название отображается здесь только если нет картинки -->
          ${e.image?"<span></span>":`<h3 class="text-2xl font-bold text-gray-800">${r(s)}</h3>`}
          ${t?'<i class="ri-arrow-down-s-line accordion-chevron text-2xl text-gray-400"></i>':""}
        </div>

        <p class="service-short-desc text-gray-600 mb-6 italic border-l-4 border-purple-500 pl-4">${r(e.slogan||"")}</p>
        
        <div class="service-short-desc flex-grow">
          <div class="mb-4">
            <h4 class="font-semibold mb-2 flex items-center"><i class="ri-home-smile-line text-green-600 mr-2"></i>Территория:</h4>
            <p class="text-gray-600">${r(e.territoryDescription||"")}</p>
          </div>
          <div class="mb-6">
            <h4 class="font-semibold mb-2 flex items-center"><i class="ri-map-pin-line text-red-500 mr-2"></i>Локация:</h4>
            <p class="text-gray-800 font-medium">${r(e.address||"")}</p>
          </div>
        </div>

        ${t?`
          <div class="service-details-container">
            <div class="service-details-content">
              ${n}
            </div>
          </div>
        `:""}
        
        <button onclick="event.stopPropagation(); openWhatsApp('${i}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-auto flex items-center justify-center">
          <i class="ri-price-tag-3-line mr-2"></i>Узнать цены
        </button>
      </div>
    </div>
  `}function O(e){return{standard:"bg-green-100 text-green-800",comfort:"bg-blue-100 text-blue-800",maxi:"bg-yellow-100 text-yellow-800",moto:"bg-red-100 text-red-800",car:"bg-gray-100 text-gray-800"}[e]||"bg-gray-100 text-gray-800"}function L(e,s,t,l){return`
    <section id="popular" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-fire-line text-orange-500"></i> Популярное
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          ${[...e.filter(o=>o.isPopular).map(o=>({...o,type:"excursion"})),...s.filter(o=>o.isPopular).map(o=>({...o,type:"service"})),...t.filter(o=>o.isPopular).map(o=>({...o,type:"transport"}))].map(o=>o.type==="transport"?$(o,l):y(o)).join("")}
        </div>
      </div>
    </section>
  `}function H(e){const s=e.filter(t=>t.isActive);return s.length===0?"":`
    <section id="excursions" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-compass-3-line text-blue-500"></i> Все экскурсии
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          ${s.map(t=>{const l=t.title||"",i=!!(t.details&&t.details.trim()),o=`Хочу забронировать экскурсию: ${l}`,n=r(o).replace(/'/g,"\\'"),c=t.image?`<div class="overflow-hidden group flex-shrink-0 relative">
                   <img src="${t.image}" alt="${r(l)}" width="600" height="400" class="w-full h-auto block group-hover:scale-105 transition-transform duration-500" loading="lazy">
                   <div class="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-lg font-bold shadow-md">
                     ${r(t.priceFrom)}
                   </div>
                 </div>`:"",f=i?u(t.details):"";return`
              <div class="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col ${i?"is-clickable":""}"
                   ${i?'onclick="toggleServiceAccordion(this)"':""}>
                
                ${c}
                
                <div class="p-6 flex flex-col flex-grow">
                  <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold text-gray-800">${r(l)}</h3>
                    ${i?'<i class="ri-arrow-down-s-line accordion-chevron text-2xl text-gray-400"></i>':""}
                  </div>
                  
                  <!-- Короткое инфо (скрывается при открытии) -->
                  <div class="service-short-desc flex flex-col flex-grow">
                    <p class="text-gray-600 mb-2 flex-grow">${r(t.shortDescription||"")}</p>
                    <p class="text-sm text-gray-500 mb-4 mt-2">
                      <i class="ri-time-line align-bottom mr-1 text-blue-500"></i>${r(t.duration||"")}
                    </p>
                  </div>

                  <!-- Подробности (аккордеон) -->
                  ${i?`
                    <div class="service-details-container">
                      <div class="service-details-content">
                        ${f}
                      </div>
                    </div>
                  `:""}

                  <button onclick="event.stopPropagation(); openWhatsApp('${n}')" class="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-auto">
                    Забронировать
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    </section>
  `}function N(e,s){const t=e.filter(l=>l.isActive!==!1);return t.length===0?"":`
    <section id="transport" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-motorbike-line text-orange-500"></i> Аренда транспорта
        </h2>

        ${t.map(l=>{const i=s.filter(o=>o.categoryId===l.id&&o.isActive);return i.length===0?"":`
            <div class="mb-16">
              <!-- Заголовок категории (Standard, Maxi и т.д.) -->
              <div class="bg-white rounded-lg p-6 mb-8 shadow-md flex items-center gap-4 border-l-4 border-orange-500">
                <i class="${l.icon||"ri-motorbike-line"} text-3xl text-orange-500"></i>
                <div>
                    <h3 class="text-2xl font-bold mb-1">${r(l.title)}</h3>
                    <p class="text-gray-600">${r(l.description||"")}</p>
                </div>
              </div>

              <!-- Сетка карточек транспорта. Добавлен класс items-start -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                ${i.map(o=>$(o,e)).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
    </section>
  `}function W(e){const s=d(e,w);return s.length===0?"":`
    <section id="accommodation" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-hotel-bed-line text-purple-500"></i> Проживание
        </h2>
        <div class="grid grid-cols-1 gap-8">
          ${s.map(t=>j(t)).join("")}
        </div>
      </div>
    </section>
  `}function R(e){const s=d(e,v);return s.length===0?"":`
    <section id="services" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i class="ri-tools-line text-gray-600"></i> Наши сервисы
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          ${s.map(t=>y(t)).join("")}
        </div>
      </div>
    </section>
  `}function B(e,s){return`
    <section id="contacts" class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        
        <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">Наши контакты</h2>

        <!-- СЕКЦИЯ TELEGRAM -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <a href="https://t.me/GreenHill_Support" target="_blank" 
             class="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md">
            <i class="ri-telegram-fill text-2xl"></i>
            Менеджер
          </a>
          
          <a href="https://t.me/GreenHill_tours" target="_blank" 
             class="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md">
            <i class="ri-notification-3-line text-2xl"></i>
            Наш канал
          </a>

          <a href="https://t.me/GHtours_bot" target="_blank" 
             class="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md">
            <i class="ri-robot-2-line text-2xl"></i>
            Наш бот
          </a>
        </div>

        <!-- СЕКЦИЯ ОФИСЫ -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a href="https://maps.app.goo.gl/CoBgDGcdES5Ktx1G6" target="_blank" 
             class="bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md text-center">
            <i class="ri-map-pin-2-fill text-2xl"></i>
            121 Nguyễn Đình Chiểu
          </a>

          <a href="https://maps.app.goo.gl/yUP4APRYq7dLKTDn9" target="_blank" 
             class="bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-md text-center">
            <i class="ri-map-pin-2-fill text-2xl"></i>
            107 Nguyễn Đình Chiểu
          </a>
        </div>

        <!-- ГЛАВНАЯ КНОПКА WHATSAPP -->
        <div class="text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <p class="text-gray-600 mb-6 font-medium">${r(s.responseTimeText||"Отвечаем быстро с 8:00 до 22:00")}</p>
          <button onclick="openWhatsApp()" 
                  class="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:scale-105 flex items-center justify-center mx-auto gap-3">
            <i class="ri-whatsapp-line text-3xl"></i>
            Написать в WhatsApp
          </button>
        </div>

      </div>
    </section>
  `}window.toggleMobileMenu=p;window.toggleServiceAccordion=_;window.openWhatsApp=P;window.smoothScroll=k;window.siteMeta={whatsappNumber:"84372733431"};async function b(){try{const e=document.getElementById("app");if(!e){console.error("❌ Контейнер #app не найден на странице");return}const s=await C.getAll();if(!s.meta&&!s.excursions&&!s.transport)throw new Error("Не удалось загрузить основные данные сайта");s.meta&&(window.siteMeta=s.meta);const t=d(s.excursions||[],T),l=s.categories||[],i=d(s.transport||[],D),o=d(s.accommodations||[],w),n=d(s.services||[],v),c=d(s.offices||[],I);e.innerHTML=`
      ${M(window.siteMeta)}
      ${L(t,n,i,l)}
      ${H(t)}
      ${N(l,i)}
      ${W(o)}
      ${R(n)}
      ${B(c,window.siteMeta)}
    `,console.log("✅ Сайт загружен успешно (Data Layer Optimized)")}catch(e){console.error("❌ Критическая ошибка загрузки:",e);const s=document.getElementById("global-error-msg");s&&(s.style.display="block");const t=document.getElementById("app");t&&(t.innerHTML=`
        <div class="max-w-2xl mx-auto text-center py-20 px-4">
          <div class="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <i class="ri-error-warning-line text-red-500 text-6xl mb-4"></i>
            <h2 class="text-2xl font-bold text-red-600 mb-4">Упс! Что-то пошло не так</h2>
            <p class="text-gray-600 mb-6">Мы не смогли загрузить данные для отображения сайта. Пожалуйста, проверьте подключение к сети.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button onclick="location.reload()" class="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition">
                <i class="ri-refresh-line mr-2"></i>Попробовать снова
              </button>
              <button onclick="openWhatsApp()" class="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition">
                <i class="ri-whatsapp-line mr-2"></i>Связаться в WhatsApp
              </button>
            </div>
          </div>
        </div>
      `)}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{b();const e=document.getElementById("mobile-menu-toggle");e&&e.addEventListener("click",p)});else{b();const e=document.getElementById("mobile-menu-toggle");e&&e.addEventListener("click",p)}
