import Book from './modules/classes.js';

const bookTitle = document.querySelector('#title');
const theForm = document.querySelector('form');
const bookAuthor = document.querySelector('#author');
const listBtn = document.querySelectorAll('.listBtn');
const addActive = document.querySelectorAll('.section');

theForm.addEventListener('submit', () => {
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  newBook.addBook();
});

Book.displayUI();
const removeButton = document.querySelectorAll('.remove-btn');
removeButton.forEach((item) => item.addEventListener('click', function () {
  const deleteBook = new Book(bookTitle.value, bookAuthor.value, this.id);
  deleteBook.removeBook();
}));

listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});