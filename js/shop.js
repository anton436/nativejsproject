const API = "http://localhost:8000/products";

let inpTitle = document.querySelector(".input-edit-title");
let inpDescr = document.querySelector(".input-edit-descr");
let inpPrice = document.querySelector(".input-edit-price");
let inpImage = document.querySelector(".input-edit-image");

<<<<<<< HEAD
let categorySelect = document.querySelector('.category')
=======
let categorySelect = document.querySelector(".category");

>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
let btnSave = document.querySelector(".btn-save");

// FILTER
let categoryValue = "";
<<<<<<< HEAD
// FILTER

// SEARCH
let searchInp = document.querySelector(".search-inp")
let searchVal = "";

// SEARCH

// PAGINATION
let currentPage = 1;
let pageTotalCount = 1;
let paginationList = document.querySelector(".pagination-list")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

// PAGINATION


// !READ
// блок, в котором будут отрисованы продукты
let productList = document.querySelector(".product-list");

=======
//FILTER

// search
let searchInp = document.querySelector(".search-inp");
let searchVal = "";
//search

//pagination
let currentPage = 1;
let pageTotalCount = 1;
let paginationList = document.querySelector(".pagination-list");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

//pagination

//!READ
// блок, в котором будут отрисованы продукты
let productList = document.querySelector(".product-list");
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
render();
async function render() {
  // отправка запроса для получения продуктов с сервера
  let products = await fetch(
<<<<<<< HEAD
    `${API}?q=${searchVal}&_page=${currentPage}&_limit=3&${categoryValue ? `category=${categoryValue}` : ""}`
  ).then((res) => res.json());

  // отрисовывка кнопок пагинации
  drawPaginationButtons()
  // очищаем productList, чтобы не было дубликатов продуктов
  productList.innerHTML = "";
  
  // отрисовка карточек, где на каждый объект в products, рендерится одна карточка
  products.forEach((item) => {
    productList.innerHTML += `<div>
    <img src = ${item.image}/>
    <h3> ${item.title}</h3>
    <p> ${item.price}</p>
    <button data-bs-toggle="modal" data-bs-target="#editModal" 
    onclick = "editProduct(${item.id})" class= "btn-edit" >edit</button>
    <button onclick="deleteProduct(${item.id})" class= "btn-delete">delete</button>
=======
    `${API}?q=${searchVal}&_page=${currentPage}&_limit=3&${
      categoryValue ? `category=${categoryValue}` : ""
    }`
  ).then((res) => res.json());
  // отрисовка кнопок пагинации
  drawPaginationButtons();
  // очищаем productlist, чтобы не было дубликатов продуктов
  productList.innerHTML = "";
  // отрисовка карточек, где на каждый объект в products, рендерится одна карточка
  products.forEach((item) => {
    productList.innerHTML += `
    <div>
      <img src = ${item.image}/>
      <h3>${item.title}</h3>
      <p>${item.price} $</p>
      <button data-bs-toggle="modal" data-bs-target="#editModal" class="btn-edit" onclick="editProduct(${item.id})">edit</button>
      <button onclick="deleteProduct(${item.id})" class="btn-delete">delete</button>
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
    </div>`;
  });
}

// функция для удаления продукта
async function deleteProduct(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  render();
}

<<<<<<< HEAD
// функция, которая срабатывает при нажатии на кнопку edit, принимает id того продукта, на кнопку edit которого кликнули
=======
//функция, которая срабатывает при нажатии на кнопку edit,принимает id того продукта, на кнопку edit которого кликнули
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
async function editProduct(id) {
  // стягиваем редактируемый продукт
  let objToEdit = await fetch(`${API}/${id}`).then((res) => res.json());

<<<<<<< HEAD
  // заполняем инпуты в модальном окне для редактирования
  inpTitle.value = objToEdit.title;
  inpDescr.value = objToEdit.description;
  inpPrice.value = objToEdit.price;
  inpImage.value = objToEdit.Image;
  categorySelect.value = objToEdit.categoty

  // навесили айди на кнопку сохранения изменений
=======
  //заполняем инпуты в модальном окне для редактирования
  inpTitle.value = objToEdit.title;
  inpDescr.value = objToEdit.description;
  inpPrice.value = objToEdit.price;
  inpImage.value = objToEdit.image;
  categorySelect.value = objToEdit.category;

  // навесили id на кнопку сохранения изменений
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
  btnSave.setAttribute("id", id);
}

// слушатель событий на кнопке сохранения изменений
btnSave.addEventListener("click", async (e) => {
<<<<<<< HEAD
  // получаем айди, который навесили выше 
  let id = e.target.id;
  // проверка на заполенность инпутов при редактировании 
=======
  // получаем id, который навесили выше
  let id = e.target.id;
  // проверка на заполненность инпутов при редактировании
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
  if (
    !inpTitle.value.trim() ||
    !inpDescr.value.trim() ||
    !inpPrice.value.trim() ||
    !inpImage.value.trim()
  ) {
<<<<<<< HEAD
    alert("feel all the gaps");
    return;
  }
=======
    alert("заполните инпуты");
    return;
  }

>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
  // собираем отредактированный продукт
  let editedProduct = {
    title: inpTitle.value,
    description: inpDescr.value,
    price: inpPrice.value,
    image: inpImage.value,
    category: categorySelect.value,
  };

  // отправляем PATCH запрос для сохранения изменений на сервере
  await fetch(`${API}/${id}`, {
    method: "PATCH",
<<<<<<< HEAD
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(editedProduct),
  });
  // вызов render для того, чтобы увидеть отредактированный продукт без перезагрузки
=======
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(editedProduct),
  });
  // вызов render для того, чтобы увидеть уже отредактированный продукт без перезагрузки
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
  render();
  // закрываем модальное окно
  let editModal = document.querySelector("#editModal");
  let modal = bootstrap.Modal.getInstance(editModal);
  modal.hide();
});

// FILTER
// функция для фильтрации по категориям
function fetchByParams(value) {
  // помещаем в categoryValue выбранную категорию
  categoryValue = value;
  // вызов функции для отрисовки с учетом categoryValue
  render();
}
// FILTER

<<<<<<< HEAD

// SEARCH
searchInp.addEventListener("input", ()=>{
  searchVal = searchInp.value;
  render()
})
// SEARCH


// PAGINATION
// функция для отрисовки кнопок пагинации
function drawPaginationButtons() {
  // стягиваем все продукты для того, чтобы расчитать общее количество страниц, которое будет в пагинации
  fetch(`${API}?q=${searchVal}`)
  .then((res)=> res.json())
  .then((data)=> {
    // pageTotalCount - общее кол-во страниц
    pageTotalCount = Math.ceil(data.length/3);
    paginationList.innerHTML = "" // очистка, чтобы не дублировалось
    // отрисовка кнопок пагинации. Если текущая страница, то есть currentPage совпадает с какой либо из отрисованных(i), то ей присваивается класс active для того, чтобы понимать на какой странице находится пользователь
    for(let i =1; i<=pageTotalCount; i++){
      if(currentPage==i){
        let page =document.createElement('li')
      
        page.innerHTML = `<li class="page-item active"><a onclick = "changePage(${i})" class="page-link page-number" href="#">${i}</a></li> `
        paginationList.append(page);
      }
      else{
        let page =document.createElement('li')
      
        page.innerHTML = `<li class="page-item "><a onclick = "changePage(${i})" class="page-link page-number" href="#">${i}</a></li> `
        paginationList.append(page);
      }
    }

    // проверки на то, находится ли пользователь на первой или последней странице. Если на первой, то кнопка для перехода на предыдующую страницу недоступна. Если на последней, то недоступна кнопка для перехода на следующую страницу
    if(currentPage===1){
      prev.classList.add('disabled');
    }
    else{
      prev.classList.remove("disabled")
    }
    if(currentPage === pageTotalCount){
      next.classList.add('disabled')
    }
    else{
      next.classList.remove("disabled")
    }
  })
}

// слушатель событий для кнопки перехода на предыдущую страницу
prev.addEventListener('click',()=>{
  // проверка на то, что пользователь не находится на первой странице
  if(currentPage<=1){
    return
  }
  // если пользователь не находится не на первой странице, то уменьшаем на currentPage на 1
  currentPage--
  // вызов функции render с учетом currentPage
  render();
})

// слушатель событий для кнопки перехода на следущую страницу

next.addEventListener('click',()=>{
  // проверка на то, что пользователь не находится на последней странице

  if(currentPage>=pageTotalCount){
    return
  }
  currentPage++
  render();
})

// слушатель событий для нумерованных кнопок пагинации
// document.addEventListener('click',(e)=>{
//   if(e.target.classList.contains('page-number')){
//       currentPage = e.target.innerText;
//       render()
=======
//search
searchInp.addEventListener("input", () => {
  searchVal = searchInp.value;
  render();
});
//search

// pagination
// функция для отрисовки кнопок пагинации
function drawPaginationButtons() {
  // стягиваем все продукты, для того, чтобы рассчитать общее кол-во страниц, которое будет в пагинации
  fetch(`${API}?q=${searchVal}`)
    .then((res) => res.json())
    .then((data) => {
      //pageTotalCount - общее кол-во страниц
      pageTotalCount = Math.ceil(data.length / 3);
      paginationList.innerHTML = ""; // очистка

      // отрисовка кнопок пагинации. Если текущая страница (currentPage) совпадает с какой либо из отрисованных(i), то ей присваивается класс active, для того, чтобы понимать на какой странице сейчас находится пользователь
      for (let i = 1; i <= pageTotalCount; i++) {
        if (currentPage == i) {
          let page = document.createElement("li");
          page.innerHTML = `<li class="page-item active"><a onclick="changePage(${i})" class="page-link page-number" href="#">${i}</a></li>`;
          paginationList.append(page);
        } else {
          let page = document.createElement("li");
          page.innerHTML = `<li class="page-item"><a 
          onclick="changePage(${i})" class="page-link page-number" href="#">${i}</a></li>`;
          paginationList.append(page);
        }
      }

      // проверки на то, что находится ли пользователь на первой или последней странице, если на первой, то кнопка для перехода на предыдущую страницу недоступна, если на последней, то недоступна кнопка для перехода на следующую страницу

      if (currentPage == 1) {
        prev.classList.add("disabled");
      } else {
        prev.classList.remove("disabled");
      }

      if (currentPage == pageTotalCount) {
        next.classList.add("disabled");
      } else {
        next.classList.remove("disabled");
      }
    });
}

// слушатель событий для кнопки перехода на предыдущую страницу
prev.addEventListener("click", () => {
  // проверка на то, что пользователь не находится на первой странице
  if (currentPage <= 1) {
    return;
  }
  // если пользователь не на первой странице, то уменьшаем currentPage на 1
  currentPage--;
  // вызов функции render с учетом currentPage
  render();
});

next.addEventListener("click", () => {
  if (currentPage >= pageTotalCount) {
    return;
  }
  currentPage++;
  render();
});

// слушатель событий для нумерованных кнопок пагинации
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("page-number")) {
//     currentPage = e.target.innerText;
//     render();
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
//   }
// });

// функция для перехода на конкретную страницу
function changePage(pageNumber) {
  currentPage = pageNumber;
<<<<<<< HEAD
  render()
}

// PAGINATION



=======
  render();
}

// pagination
>>>>>>> d091c8b8b7d5241585d4b8a2b9b512966f122f9d
