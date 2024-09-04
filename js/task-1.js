// Отримуємо список категорій за допомогою ID #categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи списку з класом .item
const items = categoriesList.querySelectorAll('.item');

// Виводимо в консоль кількість категорій
console.log(`Number of categories: ${items.length}`);

// Проходимося по кожному елементу .item
items.forEach(item => {
  // Знаходимо заголовок категорії (тег <h2>)
  const categoryTitle = item.querySelector('h2').textContent;

  // Знаходимо кількість елементів у категорії (теги <li>)
  const elementsCount = item.querySelectorAll('ul li').length;

  // Виводимо в консоль назву категорії і кількість елементів у ній
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
