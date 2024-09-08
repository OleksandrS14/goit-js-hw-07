function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const input = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення квадратів
function createBoxes(amount) {
  const boxes = []; // Масив для зберігання нових квадратів

  for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10; // Розмір квадрата
      const box = document.createElement('div'); // Створюємо новий div
      box.style.width = `${size}px`; // Встановлюємо ширину
      box.style.height = `${size}px`; 
      box.style.backgroundColor = getRandomHexColor(); // Встановлюємо випадковий колір фону
      boxes.push(box); // Додаємо квадрат до масиву
  }

  boxesContainer.append(...boxes); // Додаємо всі квадрати в DOM за одну операцію
}


createButton.addEventListener('click', () => {
  const amount = Number(input.value); 
  
  if (amount < 1 || amount > 100) {
      return; 
  }

  boxesContainer.innerHTML = ''; 
  createBoxes(amount); 
  input.value = ''; 
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = ''; 
});