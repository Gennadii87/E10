document.addEventListener("DOMContentLoaded", function() {
    const animatedHr = document.querySelector('.animated-hr');

    const colors = ['#33E0ff', '#4FC900', '#33FF57', '#3357FF']; // Массив цветов
    let currentColorIndex = 0; // Индекс текущего цвета

    function changeColorAndWidth() {
        animatedHr.style.backgroundColor = colors[currentColorIndex];
        animatedHr.style.width = 'auto'; 
        currentColorIndex = (currentColorIndex + 0.5) % colors.length; //следующий цвет
    }

    changeColorAndWidth(); // Установить начальный цвет сразу
    setInterval(changeColorAndWidth, 2000); // Запуск интервала
});

