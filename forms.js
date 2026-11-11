document.addEventListener("DOMContentLoaded", function() {
  // 1. Валидация дат на странице order.html
  const checkinInput = document.getElementById('checkinDate'); 
  const checkoutInput = document.getElementById('checkoutDate'); 

  if (checkinInput && checkoutInput) {
    const today = new Date().toISOString().split('T')[0];
    checkinInput.min = today;
    checkoutInput.min = today;

    checkinInput.addEventListener('change', function() {
      checkoutInput.min = this.value;
      if (checkoutInput.value && checkoutInput.value < this.value) {
        checkoutInput.value = this.value;
      }
    });
  }
});

// 2. Функция для магазина 
function setProduct(number) {
  const input = document.getElementById('buyProductNumber');
  if (input) {
    input.value = number;
  }
}