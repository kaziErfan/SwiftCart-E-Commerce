const loadAllCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data));
};

const allProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};

const displayProducts = (products) => {
  const displayAllProduct = document.getElementById("our-product");
  displayAllProduct.innerHTML = "";

  for (product of products) {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <div class="card bg-base-100 lg:w-72 w-11/12 mx-auto shadow-sm border-1 border-gray-200">
                    <figure class="bg-gray-300">
                        <img class="h-72 w-auto p-5" src="${product.image}"
                            alt="" />
                    </figure>
                    <div class="card-body space-y-1">
                        <div class="cardCategory flex justify-between">
                            <a href="" class="bg-blue-200 px-3 py-1 text-xs font-bold rounded-3xl">${product.category}</a>
                            <a href="" class=""><i class="fa-solid fa-star text-yellow-400"></i><span class="productRating">${product.rating.rate}</span> <span class="ratingCount">(${product.rating.count})</span></a>
                        </div>

                        <h2 class="card-title font-semibold text-base block truncate">
                           ${product.title}
                        </h2>
                        <p class="text-lg lg:text-xl font-bold">$${product.price}</p>
                    
                        <div class="card-actions flex justify-between">
                            <button class="badge badge-outline lg:px-4 px-4 py-4"><i class="fa-regular fa-eye"></i>Details</button>
                            <button href="" class="badge badge-primary lg:px-6 px-8 py-4"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                        </div>
                    </div>
                </div>
    `;
    displayAllProduct.append(productDiv);
  }
};

const loadProductByCategory = (name) => {
  const url = "https://fakestoreapi.com/products/category/electronics";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// Display Product Categories
const displayCategories = (categories) => {
  const productCategories = document.getElementById("product-categories");

  for (category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
         <button onclick= "loadProductByCategory(${category})" class="btn hover:bg-[#4f39f6] text-lg font-normal active:bg-[#4f39f6] hover:text-white delay-300 rounded-2xl border-1 border-gray-400 bg-white">${category}</button>
        `;
    productCategories.append(categoryDiv);
  }
};

loadAllCategories();

