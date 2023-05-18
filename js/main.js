const API = " http://localhost:8000/products";

//! CRUD
//? элементы для добавления продукта инпуты и селект
let inpTitle = document.querySelector(".input-title");
let inpDescr = document.querySelector(".input-descr");
let inpPrice = document.querySelector(".input-price");
let inpImage = document.querySelector(".input-image");
let selectCategory = document.querySelector(".category");
// кнопка для добавления нового продукта
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
      },
      body: JSON.stringify(newProduct),
    });
  } catch (error) {
    console.log(error);
  }
}
