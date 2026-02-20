const loadAllCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data))
};

const loadAllProduct = () => {
    
}

const displayAllProduct = document.getElementById("trending-product");
displayAllProduct.innerHTML = "";

const loadProductByCategory = (name) => {
    const url = "https://fakestoreapi.com/products/category/electronics";
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
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