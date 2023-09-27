let userInput;
do {
    userInput = parseInt(prompt('Введите число:'));
} while (isNaN(userInput));

// Создаем указанное количество блоков и добавляем их на страницу
const container = document.getElementById('container');
for (let i = 0; i < userInput; i++) {
    const block = document.createElement('div');
    block.textContent = `Блок ${i + 1}`;
    block.style.backgroundColor = 'green'; // Изменяем цвет фона блока
    block.style.color = 'white'; // Изменяем цвет текста блока
    block.style.padding = '10px'; // Изменяем внутренний отступ блока
    block.style.margin = '5px'; // Изменяем внешний отступ блока
    block.style.width = '60px';
    block.style.height = '60px';
    container.appendChild(block);
}