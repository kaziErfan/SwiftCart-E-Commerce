const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayTrending(data));
};

// load Categories
const loadAllCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data));
};

// All Categories
const allProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`active-btn-all`);
      clickBtn.classList.add("active");
      displayProducts(data);
    });
};

// load product by category
const loadProductByCategory = (categoryName) => {
  const url = `https://fakestoreapi.com/products/category/${categoryName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`active-btn-${categoryName}`);
      clickBtn.classList.add("active");
      displayProducts(data);
    });
};

// Load Product details(Modal)
const loadProductDetails = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayProductModal(details);
};

// Displaying Trending Card
const displayTrending = (products) => {
  // Trending Product
  const trendingProduct = document.getElementById("trending-product");
  trendingProduct.innerHTML = "";

  // Trending Product Loop
  products.forEach((product) => {
    if (product.price >= 550) {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
        <div class="card bg-base-100 lg:w-96 w-11/12 mx-auto shadow-sm border-1 border-gray-200">
                    <figure class="bg-gray-300">
                        <img class="h-80 w-auto p-5" src="${product.image}"
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
                    
                        <div class="card-actions flex justify-center">
                            <button onclick="loadProductDetails(${product.id})" class="btn btn-outline hover:bg-[#4f39f6] hover:text-white lg:px-10 px-4 py-4"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn btn-primary hover:bg-[#3521b4] lg:px-12 px-8 py-4"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                        </div>
                    </div>
                </div>
        `;
      trendingProduct.append(productDiv);
    }
  });
};

// Product Details Modal
const displayProductModal = (product) => {
  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `
    <div>
        <form method="dialog" class="py-3">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
            </form>
            <h3 class="font-bold">${product.title}</h3>
            <p class="py-4">${product.description}</p>
            <div class="cardCategory flex justify-between py-3">
                <p class="text-lg lg:text-xl font-bold">$109</p>
                <div>
                    <span><i class="fa-solid fa-star text-yellow-400"></i></span><span class="productRating">${product.rating.rate}</span>
                    <span class="ratingCount">(${product.rating.count})</span></a>
                </div>
            </div>
            <div class="card-actions flex justify-between">
                <button class="btn btn-outline lg:px-4 px-4 py-4 hover:bg-[#3b25c1] hover:text-white"><i class="fa-regular fa-eye"></i>Buy Now</button>
                <button href="" class="btn btn-primary lg:px-6 px-8 py-4 bg-[#3b25c1] hover:bg-[#3521b4]"><i
                        class="fa-solid fa-cart-shopping"></i>Add</button>
            </div>
           </div>`;
  document.getElementById("details_modal").showModal();
};

// Removing active button
const removeActive = () => {
  const activeButton = document.querySelectorAll(".remove-active");

  activeButton.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
};

// Display All products
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
                            <button onclick="loadProductDetails(${product.id})" class="btn btn-outline hover:bg-[#4f39f6] hover:text-white lg:px-4 px-4 py-4"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn btn-primary lg:px-6 px-8 py-4 hover:bg-[#3521b4]"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                        </div>
                    </div>
                </div>
    `;
    displayAllProduct.append(productDiv);
  }
};

// Display Product Categories
const displayCategories = (categories) => {
  const productCategories = document.getElementById("product-categories");
  productCategories.innerHTML = "";

  // All
  const allCategoryDiv = document.createElement("div");
  allCategoryDiv.innerHTML = `<button onclick = 'allProduct()' id = "active-btn-all" class="btn hover:bg-[#4f39f6] text-lg font-normal hover:text-white delay-300 rounded-2xl border-1 border-gray-400 bg-white remove-active">All</button>`;

  productCategories.append(allCategoryDiv);

  // Category button
  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
     <button id="active-btn-${category}" onclick="loadProductByCategory(\`${category}\`)" class="btn hover:bg-[#4f39f6] lg:text-lg text-sm font-normal hover:text-white delay-300 rounded-2xl border-1 border-gray-400 bg-white remove-active">
        ${category}
     </button>
  `;
    productCategories.append(categoryDiv);
  });
};

// Display Category Products
const categoryProduct = (products) => {
  const displayCategoryProduct = document.getElementById("our-product");

  for (product of products) {
    console.log(product);
    const productCard = document.createElement("div");
    productCard.innerHTML = `
        <div class="card bg-base-100 lg:w-72 w-11/12 mx-auto shadow-sm border-1 border-gray-200">
                    <figure class="bg-gray-300">
                        <img class="h-72 w-auto p-5" src="${product.image}"
                            alt="" />
                    </figure>
                    <div class="card-body space-y-1">
                        <div class="cardCategory flex justify-between">
                            <a href="" class="bg-blue-200 px-3 py-1 text-xs font-bold rounded-3xl">${product.category}</a>
                            <i class="fa-solid fa-star text-yellow-400"></i> <span class="productRating">${product.rating.rate}</span>
                            <span class="ratingCount">(${product.rating.count})</span>
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
    displayCategoryProduct.append(productCard);
  }
};

loadAllProduct();
loadAllCategories();
allProduct();
