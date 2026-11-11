document.addEventListener("DOMContentLoaded", function() {
  const enterBtn = document.getElementById('enter-btn');
  
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      const music = document.getElementById('bg-music');
      if (music) {
        music.volume = 0.3; 
        music.play();
      }

      const overlay = document.getElementById('welcome-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 500);
      }
    });
  }
});