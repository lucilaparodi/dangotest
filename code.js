const products = [
  { id: 1, image: "img/img1.png", price: 176.98 },
  { id: 2, image: "img/img2.png", price: 126.98 },
  { id: 3, image: "img/img3.png", price: 136.98 },
  { id: 4, image: "img/img4.png", price: 146.98 },
  { id: 5, image: "img/img1.png", price: 176.98 },
  { id: 6, image: "img/img2.png", price: 126.98 },
  { id: 7, image: "img/img3.png", price: 136.98 },
  { id: 8, image: "img/img4.png", price: 146.98 },
  { id: 9, image: "img/img3.png", price: 186.98 },
  { id: 10, image: "img/img1.png", price: 116.98 },
  { id: 11, image: "img/img2.png", price: 126.98 },
  { id: 12, image: "img/img3.png", price: 196.98 },
  { id: 13, image: "img/img2.png", price: 136.98 },
  { id: 14, image: "img/img4.png", price: 106.98 },
  { id: 15, image: "img/img1.png", price: 126.98 },
];

const productsPerPage = 8;
let currentPage = 1;

function generateProductHTML(products) {
  return products
    .map(
      (product) => `
        <article class="bg-white rounded-3xl shadow-xl m-2 lg:m-0 w-60 h-full justify-self-center">
            <img src="${product.image}" alt="${product.id}" class="mx-auto object-cover h-80 p-4" />
            <div class="flex justify-between mx-1 px-3 pb-4 items-center flex-col xl:flex-row lg:flex-row">
                <p class="text-2xl lg:text-base xl:text-base font-inter text-black">$${product.price}</p>
                <button class="text-3xl xl:text-base lg:text-base xs:w-5/6 xs:py-1 xs:px-3 p-1 lg:p-0 xl:p-0 px-4 lg:px-2 xl:px-2 bg-green text-white  rounded-full text-white font-inter font-light" onclick="handleModal(${product.id})">
                    <span style="text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);">BUY NOW</span>
                </button>
            </div>
        </article>
    `
    )
    .join("");
}

function renderProducts(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const pageProducts = products.slice(startIndex, endIndex);
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = generateProductHTML(pageProducts);
}

function nextPage() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  currentPage = Math.min(currentPage + 1, totalPages);
  renderProducts(currentPage);
}

function prevPage() {
  currentPage = Math.max(currentPage - 1, 1);
  renderProducts(currentPage);
}

document.getElementById("prevPageBtn").addEventListener("click", prevPage);
document.getElementById("nextPageBtn").addEventListener("click", nextPage);

renderProducts(currentPage);

//cart

let cart = [];

function addToCart(id) {
  const product = products.find((product) => product.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalContainer = document.getElementById("totalContainer");

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Cart is empty</p>";
    totalContainer.textContent = "";
  } else {
    const cartItemsHTML = cart
      .map(
        (product) => `
            <li class="flex justify-between items-center m-4">
                <img class="w-20" src="${product.image}" alt="${product.id}">
                <p class="m-5">$${product.price}</p>
                <button class="m-3 text-red text-lg" onclick="removeFromCart(${product.id})">x</button>
            </li>
        `
      )
      .join("");

    cartItemsContainer.innerHTML = `<ul>${cartItemsHTML}</ul>`;
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    totalContainer.innerHTML = `<h2 class="text-xl font-bold font-inter font-bold text-green">Total:</h2><h2 class="text-xl font-bold font-inter font-bold text-green">$${total.toFixed(
      2
    )}</h2>`;
  }
}

function removeFromCart(id) {
  cart = cart.filter((product) => product.id !== id);

  renderCart();
}

function openCartModal() {
  document.getElementById("cartModal").classList.remove("hidden");
}

function closeCartModal() {
  document.getElementById("cartModal").classList.add("hidden");
}

function handleModal(id) {
  addToCart(id);
  openCartModal();
}
