<<<<<<< HEAD
const API = "http://localhost:8000/products";
//! CRUD
// ? элементы для добавления продукта: инпуты и селект

=======
const API = " http://localhost:8000/products";

//! CRUD
//? элементы для добавления продукта инпуты и селект
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
let inpTitle = document.querySelector(".input-title");
let inpDescr = document.querySelector(".input-descr");
let inpPrice = document.querySelector(".input-price");
let inpImage = document.querySelector(".input-image");
<<<<<<< HEAD
let selectCategory = document.querySelector(".category")
// кнопка добавления нового продукта
=======
let selectCategory = document.querySelector(".category");
// кнопка для добавления нового продукта
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
let btnAdd = document.querySelector(".btn-add");

// слушатель событий на кнопке добавления
btnAdd.addEventListener("click", () => {
  // проверка на заполненность инпутов
  if (
    !inpTitle.value.trim() ||
    !inpDescr.value.trim() ||
    !inpPrice.value.trim() ||
    !inpImage.value.trim() ||
    !selectCategory.value.trim()
  ) {
    alert("заполните инпуты");
    return;
  }

  // если все инпуты заполнены, собираем новый продукт
  let newProduct = {
    title: inpTitle.value,
    description: inpDescr.value,
    price: inpPrice.value,
    image: inpImage.value,
<<<<<<< HEAD
    category: selectCategory.value
    };
    // вызов функции для отправки на сервер нового продукта
  createProduct(newProduct);
});

// функция для отправки нового продукта
async function createProduct(newProduct) {

  try {
    // отправка POST запроса на сервер
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
=======
    category: selectCategory.value,
  };
  // вызов функции для отправки на сервер нового продукта
  createProduct(newProduct);
});

// функция для создания нового продукта
async function createProduct(newProduct) {
  try {
    //отправка POST запроса на сервер
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
      },
      body: JSON.stringify(newProduct),
    });
  } catch (error) {
    console.log(error);
  }
}
<<<<<<< HEAD

// !READ
=======
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
