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