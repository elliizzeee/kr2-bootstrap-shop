// Защита от копирования контента
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(event) {
  // Запрет Ctrl+C, Ctrl+X, Ctrl+U
  if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.key === 'x' || event.key === 'u')) {
    event.preventDefault();
  }
});
// Скрипт для кнопки Наверх
document.addEventListener("DOMContentLoaded", function() {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  
  if (scrollBtn) {
    // Показываем кнопку только в самом низу
    window.onscroll = function() {
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 100);
      
      // Если мы у самого низа — показываем, если нет — прячем
      if (isAtBottom) {
        scrollBtn.style.display = "flex"; 
      } else {
        scrollBtn.style.display = "none"; 
      }
    };

    // Плавный скролл наверх при клике
    scrollBtn.addEventListener("click", function() {
      // 1. СРАЗУ прячем кнопку, чтобы она не летела вверх вместе с экраном
      scrollBtn.style.display = "none"; 
      
      // 2. Запускаем плавный скролл
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

// ===== УМНЫЙ ПОИСК ПО САЙТУ =====
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchInput) return;

  // База данных страниц сайта
  const pages = [
    { name: 'Главная', url: 'index.html', keywords: 'главная домой wood resin' },
    { name: 'Домики', url: 'houses.html', keywords: 'домики дома отдых бронирование' },
    { name: 'Сруб у реки', url: 'house-river.html', keywords: 'сруб река дом' },
    { name: 'A-frame с чаном', url: 'house-aframe.html', keywords: 'афрейм чан купель' },
    { name: 'Лесной уют', url: 'house-forest.html', keywords: 'лес уют дом' },
    { name: 'Кедр', url: 'house-kedr.html', keywords: 'кедр сауна' },
    { name: 'Хвоя', url: 'house-khvoya.html', keywords: 'хвоя окна закат' },
    { name: 'Мох', url: 'house-mokh.html', keywords: 'мох лес окно' },
    { name: 'Мастер-классы', url: 'catalog.html', keywords: 'мастер класс обучение каталог' },
    { name: 'Стол из слэба', url: 'product-stol.html', keywords: 'стол слэб смола' },
    { name: 'Часы из смолы', url: 'product-clock.html', keywords: 'часы смола' },
    { name: 'Роспись по дереву', url: 'product-risunok.html', keywords: 'роспись дерево' },
    { name: 'Ключница', url: 'product-key.html', keywords: 'ключница смола' },
    { name: 'Подсвечник', url: 'product-candle.html', keywords: 'подсвечник свеча' },
    { name: 'Блокнот', url: 'product-notebook.html', keywords: 'блокнот обложка' },
    { name: 'Галерея', url: 'gallery.html', keywords: 'галерея фото' },
    { name: 'Магазин', url: 'shop.html', keywords: 'магазин купить изделия' },
    { name: 'Бронирование', url: 'order.html', keywords: 'бронь заявка заказ' }
  ];

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    // Ищем совпадения
    const matches = pages.filter(page => 
      page.name.toLowerCase().includes(query) || 
      page.keywords.includes(query)
    );

    if (matches.length > 0) {
      matches.forEach(match => {
        const item = document.createElement('a');
        item.href = match.url;
        item.className = 'd-block p-2 text-decoration-none';
        item.style.color = '#e6b97d';
        item.style.borderBottom = '1px solid #4a3f38';
        item.innerHTML = `🔍 ${match.name}`;
        item.onmouseover = () => item.style.backgroundColor = '#3b5e40';
        item.onmouseout = () => item.style.backgroundColor = 'transparent';
        searchResults.appendChild(item);
      });
      searchResults.style.display = 'block';
    } else {
      searchResults.innerHTML = '<div class="p-2 text-muted small">Ничего не найдено</div>';
      searchResults.style.display = 'block';
    }
  });

  // Закрываем поиск при клике вне его
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
});

// ===== ЧАТ С АДМИНИСТРАТОРОМ =====
document.addEventListener("DOMContentLoaded", function() {
  const chatBtn = document.getElementById('chatToggleBtn');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatCloseBtn');
  const chatSend = document.getElementById('chatSendBtn');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  // Показываем кнопку чата через 3 секунды (чтобы не мешать)
  if (chatBtn) {
    setTimeout(() => {
      chatBtn.style.display = 'flex';
    }, 3000);
  }

  if (chatBtn && chatWindow) {
    // Открыть/Закрыть чат
    chatBtn.addEventListener('click', () => {
      if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'block';
        chatInput.focus();
      } else {
        chatWindow.style.display = 'none';
      }
    });

    chatClose.addEventListener('click', () => {
      chatWindow.style.display = 'none';
    });

    // Функция отправки сообщения
    function sendMessage() {
      const text = chatInput.value.trim();
      if (text) {
        // 1. Добавляем сообщение пользователя
        const userMsg = document.createElement('div');
        userMsg.className = 'mb-3 p-2 rounded align-self-end text-end';
        userMsg.style.background = '#3b5e40';
        userMsg.style.color = '#fff';
        userMsg.style.fontSize = '0.9rem';
        userMsg.style.maxWidth = '85%';
        userMsg.innerText = text;
        chatMessages.appendChild(userMsg);
        
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 2. Имитация ответа от администратора (с индикатором "печатает...")
        setTimeout(() => {
          // Создаем индикатор набора текста
          const typingMsg = document.createElement('div');
          typingMsg.className = 'mb-3 p-2 rounded align-self-start text-muted';
          typingMsg.style.background = 'rgba(230, 185, 125, 0.1)';
          typingMsg.style.fontSize = '0.9rem';
          typingMsg.innerText = 'Печатает...';
          chatMessages.appendChild(typingMsg);
          chatMessages.scrollTop = chatMessages.scrollHeight;

          // Через 1.5 секунды заменяем на настоящий ответ
          setTimeout(() => {
            typingMsg.remove(); // Убираем "Печатает..."
            
            const adminMsg = document.createElement('div');
            adminMsg.className = 'mb-3 p-2 rounded align-self-start';
            adminMsg.style.background = 'rgba(230, 185, 125, 0.15)';
            adminMsg.style.color = '#fff';
            adminMsg.style.fontSize = '0.9rem';
            adminMsg.style.maxWidth = '85%';
            
            // Рандомные ответы для реалистичности
            const replies = [
              'Спасибо за вопрос! Наш менеджер свяжется с вами в ближайшее время.',
              'Отличный выбор! Оставьте свой номер телефона, и мы перезвоним для уточнения деталей.',
              'Да, это возможно! Вы можете обсудить все детали при бронировании.',
              'Спасибо за сообщение! Мы работаем с 09:00 до 21:00, обязательно ответим.'
            ];
            adminMsg.innerText = replies[Math.floor(Math.random() * replies.length)];
            
            chatMessages.appendChild(adminMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
          }, 1500);

        }, 500); // Задержка перед тем, как появится "Печатает..."
      }
    }

    // Отправка по кнопке
    chatSend.addEventListener('click', sendMessage);
    
    // Отправка по Enter
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
  }
});