const API = "http://localhost:8000/products";
//!READ
let productList = document.querySelector(".product-list");
render();
async function render() {
  let products = await fetch(API).then((res) => res.json());

  productList.innerHTML = "";

  products.forEach((item) => {
    productList.innerHTML += `
    <div>
      <img src = ${item.image}/>
      <h3>${item.title}</h3>
      <p>${item.price} $</p>
    </div>`;
  });
}
