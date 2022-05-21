const groceries = document.getElementsByClassName('groceries')[0];
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('allItems');
const userInput = document.getElementById('userInput');
const recycle = document.getElementById('recycle');

const LIST_MAIN_CLASS = 'list_class';

pencil.addEventListener('click', function () {
  allItems.innerHTML = '';
});

userInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') addItem();
});

function addItem() {
  const h2 = document.createElement('h2');
  h2.innerHTML = '- ' + userInput.value;
  h2.className = LIST_MAIN_CLASS;

  h2.addEventListener('click', function () {
    h2.style.textDecoration = 'line-through';
  });
  allItems.insertAdjacentElement('beforeend', h2);
  userInput.value = '';
}
recycle.addEventListener('click', function () {
  const h2 = document.getElementsByClassName(LIST_MAIN_CLASS);

  for (let i = h2.length - 1; i >= 0; i--) {
    h2[i].remove();
  }
});
