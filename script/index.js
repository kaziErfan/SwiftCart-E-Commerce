const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayTrending(data));
};

const displayTrending = (products) => {
  console.log(products);
  const trendingProduct = document.getElementById("trending-product");
  trendingProduct.innerHTML = "";
// //   "id": 10,
// // "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
// // "price": 109,
// // "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
// // "category": "electronics",
// // "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
// // "rating": {
// // "rate": 2.9,
// "count": 470

  for (product of products) {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <div class="card bg-base-100 lg:w-96 w-11/12 mx-auto shadow-sm border-1 border-gray-200">
                    <figure class="bg-gray-300">
                        <img class="h-80 w-auto py-3" src="${product.image}"
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
                            <a href="#" class="badge badge-outline lg:px-10 px-4 py-4"><i class="fa-regular fa-eye"></i>Details</a>
                            <a href="" class="badge badge-primary lg:px-12 px-8 py-4"><i class="fa-solid fa-cart-shopping"></i>Add</a>
                        </div>
                    </div>
                </div>
        `;

    trendingProduct.append(productDiv);
  }
};

loadAllProduct();
