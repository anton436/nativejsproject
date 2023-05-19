// SAMAT's Part Start
const API = "http://localhost:8000/products";

async function fetchData() {
  try {
    const n = localStorage.getItem("selectedImageId");
    const response = await fetch(`${API}/${n}`);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log("Ошибка при получении данных:", error);
  }
}

function displayData(product) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  productsContainer.innerHTML += `
    <div class="product">
      <div class="product-info">
        <h2 class="title">${product.title}</h2>
        <p class="desc">Главная - <span class="category">${product.category}</span> - <span class="sp">${product.title}</span></p>
      </div>
      <div class="product-details">
        <img class="image" src="${product.image}" alt="">
        <div class="price-size">
          <p class="price">$ ${product.price}</p>
          <p class="size-label">Выберите размер</p>
          <div class="size-buttons">
            <button class="size-button">S</button>
            <button class="size-button">M</button>
            <button class="size-button">L</button>
            <button class="size-button">XL</button>
            <button class="size-button">XXL</button>
          </div>
          <p class="color">Выберите цвет</p>
          <div class="color-buttons">
            <button class="color-button color-brown"></button>
            <button class="color-button color-grey"></button>
            <button class="color-button color-pink"></button>
            <button class="color-button color-yellow"></button>
          </div>  
          <div class="add-corzina">
          <input class="inp-colvo" type="number" id="quantity" min="1" value="1" ">
          <button class="btn-corzina" >Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

fetchData();

// SAMAT's Part Start
