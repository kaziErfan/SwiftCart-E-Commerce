const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayTrending(data));
};

const displayTrending = (products) => {
  console.log(products);
  const trendingProduct = document.getElementById("trending-product");
  trendingProduct.innerHTML = "";

  for (product of products) {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <div class="card bg-base-100 lg:w-96 w-11/12 mx-auto shadow-sm border-1 border-gray-200">
                    <figure class="bg-gray-300">
                        <img class="h-80 w-auto py-3" src="./Assets/81fPKd-2AYL._AC_SL1500_t.png"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body space-y-1">

                        <div class="cardCategory flex justify-between">
                            <a href="" class="bg-blue-200 px-3 py-1 text-xs font-bold rounded-3xl">Men's Clothing</a>
                            <a href="" class=""><i class="fa-solid fa-star text-yellow-400"></i><span class="productRating">3.9</span><span class="ratingCount">(120)</span></a>
                        </div>

                        <h2 class="card-title font-semibold text-base">
                            Fjallraven - Foldsack No. 1 Backpac
                        </h2>
                        <p class="text-lg lg:text-xl font-bold">$109</p>
                    
                        <div class="card-actions flex justify-center">
                            <a href="" class="badge badge-outline lg:px-10 px-4 py-4"><i class="fa-regular fa-eye"></i>Details</a>
                            <a href="" class="badge badge-primary lg:px-12 px-8 py-4"><i class="fa-solid fa-cart-shopping"></i>Add</a>
                        </div>
                    </div>
                </div>
        `;

    trendingProduct.append(productDiv);
  }
};

loadAllProduct();
