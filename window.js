// Функция, которая будет выполняться при клике на ссылку
function openNewWindow(event) {
    var newWindow = window.open(); // Открываем новое окно
    newWindow.document.write("<h1>Страница временно не работает или скорее всего у автора плохая фантазия</h1>");
  }
  
  // Находим ссылку по её ID и добавляем к ней обработчик события
  document.getElementById("myLink").addEventListener("click", openNewWindow);
  