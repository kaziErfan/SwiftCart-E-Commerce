const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayTrending(data));
};


// Displaying Trending Card
const displayTrending = (products) => {
  const trendingProduct = document.getElementById("trending-product");
  trendingProduct.innerHTML = "";

// Trending Product Loop
products.forEach((product) => {
    if(product.price >= 550){
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
                            <button class="badge badge-outline lg:px-10 px-4 py-4"><i class="fa-regular fa-eye"></i>Details</button>
                            <button href="" class="badge badge-primary lg:px-12 px-8 py-4"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                        </div>
                    </div>
                </div>
        `;
         trendingProduct.append(productDiv);
    };
});
};

loadAllProduct();
