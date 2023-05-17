const API = "http://localhost:8000/products";

let inpTitle = document.querySelector(".input-edit-title");
let inpDescr = document.querySelector(".input-edit-descr");
let inpPrice = document.querySelector(".input-edit-price");
let inpImage = document.querySelector(".input-edit-image");

let categorySelect = document.querySelector(".category");

let btnSave = document.querySelector(".btn-save");

// FILTER
let categoryValue = "";
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
let productList = document.querySelector(".product-list");
render();
async function render() {
  let products = await fetch(
    `${API}?q=${searchVal}&_page=${currentPage}&_limit=3&${
      categoryValue ? `category=${categoryValue}` : ""
    }`
  ).then((res) => res.json());
  drawPaginationButtons();

  productList.innerHTML = "";
  products.forEach((item) => {
    productList.innerHTML += `
    <div>
      <img src = ${item.image}/>
      <h3>${item.title}</h3>
      <p>${item.price} $</p>
      <button data-bs-toggle="modal" data-bs-target="#editModal" class="btn-edit" onclick="editProduct(${item.id})">edit</button>
      <button onclick="deleteProduct(${item.id})" class="btn-delete">delete</button>
    </div>`;
  });
}

async function deleteProduct(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  render();
}

async function editProduct(id) {
  let objToEdit = await fetch(`${API}/${id}`).then((res) => res.json());
  inpTitle.value = objToEdit.title;
  inpDescr.value = objToEdit.description;
  inpPrice.value = objToEdit.price;
  inpImage.value = objToEdit.image;
  categorySelect.value = objToEdit.category;

  btnSave.setAttribute("id", id);
}

btnSave.addEventListener("click", async (e) => {
  let id = e.target.id;
  if (
    !inpTitle.value.trim() ||
    !inpDescr.value.trim() ||
    !inpPrice.value.trim() ||
    !inpImage.value.trim()
  ) {
    alert("заполните инпуты");
    return;
  }

  let editedProduct = {
    title: inpTitle.value,
    description: inpDescr.value,
    price: inpPrice.value,
    image: inpImage.value,
    category: categorySelect.value,
  };

  await fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(editedProduct),
  });
  render();
  let editModal = document.querySelector("#editModal");
  let modal = bootstrap.Modal.getInstance(editModal);
  modal.hide();
});

// FILTER

function fetchByParams(value) {
  categoryValue = value;
  render();
}
// FILTER

//search
searchInp.addEventListener("input", () => {
  searchVal = searchInp.value;
  render();
});
//search

// pagination
function drawPaginationButtons() {
  fetch(`${API}?q=${searchVal}`)
    .then((res) => res.json())
    .then((data) => {
      pageTotalCount = Math.ceil(data.length / 3);
      paginationList.innerHTML = "";
      for (let i = 1; i <= pageTotalCount; i++) {
        if (currentPage === i) {
          let page = document.createElement("li");
          page.innerHTML = `<li class="page-item active"><a class="page-link page-number" href="#">${i}</a></li>`;
          paginationList.append(page);
        } else {
          let page = document.createElement("li");
          page.innerHTML = `<li class="page-item"><a class="page-link page-number" href="#">${i}</a></li>`;
          paginationList.append(page);
        }
      }

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

prev.addEventListener("click", () => {
  if (currentPage <= 1) {
    return;
  }
  currentPage--;
  render();
});

next.addEventListener("click", () => {
  if (currentPage >= pageTotalCount) {
    return;
  }
  currentPage++;
  render();
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-number")) {
    currentPage = e.target.innerText;
    render();
  }
});

// pagination
