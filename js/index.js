// const openModalBtn = document.querySelectorAll('.open-modal-btn');
// const modal = document.getElementById('modal-window');
// const closeButton = document.querySelector('.modal-window__close');

// // Открытие модального окна
// // Открытие модального окна
// openModalBtn.addEventListener('click', () => {
//     // Проверяем computed style, а не inline стиль
//     const modalStyle = getComputedStyle(modal);
  
//         modal.style.display = 'flex'; // Устанавливаем display для показа окна
    
// });

// // Закрытие модального окна
// closeButton.addEventListener('click', () => {
//     modal.style.display = 'none'; // Скрываем окно
// });

// Находим все кнопки с классом open-modal-btn
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const modal = document.getElementById('modal-window');
const closeButton = document.querySelector('.modal-window__close');

// Открытие модального окна
openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex'; // Показываем модальное окно
    });
});

// Закрытие модального окна
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Скрываем окно
});
