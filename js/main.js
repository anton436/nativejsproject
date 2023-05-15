const API = " http://localhost:8000/products";

//! CRUD
let inpTitle = document.querySelector(".input-title");
let inpDescr = document.querySelector(".input-descr");
let inpPrice = document.querySelector(".input-price");
let inpImage = document.querySelector(".input-image");

let btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", () => {
  if (
    !inpTitle.value.trim() ||
    !inpDescr.value.trim() ||
    !inpPrice.value.trim() ||
    !inpImage.value.trim()
  ) {
    alert("заполните инпуты");
    return;
  }

  let newProduct = {
    title: inpTitle.value,
    description: inpDescr.value,
    price: inpPrice.value,
    image: inpImage.value,
  };
  createProduct(newProduct);
});

async function createProduct(newProduct) {
  try {
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

// ! READ
