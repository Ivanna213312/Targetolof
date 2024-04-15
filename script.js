// Запускаємо анімацію після завантаження сторінки
document.addEventListener('DOMContentLoaded', function(){
    // Вибираємо елемент h1 з класом typing-text
    var element = document.querySelector('h1.typing-text');
    // Встановлюємо затримку перед початком анімації
    setTimeout(function() {
        // Додаємо клас 'typing' для запуску анімації
        element.classList.add('typing');
    }, 1000); // Затримка перед початком анімації
});
