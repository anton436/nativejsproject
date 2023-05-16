const API = "http://localhost:8000/products";

let inpTitle = document.querySelector(".input-edit-title");
let inpDescr = document.querySelector(".input-edit-descr");
let inpPrice = document.querySelector(".input-edit-price");
let inpImage = document.querySelector(".input-edit-image");

let btnSave = document.querySelector(".btn-save");

// FILTER
let categoryValue = "";
//FILTER

//!READ
let productList = document.querySelector(".product-list");
render();
async function render() {
  let products = await fetch(
    `${API}?${categoryValue ? `category=${categoryValue}` : ""}`
  ).then((res) => res.json());

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
