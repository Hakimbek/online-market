import Item from "../items/Item";

const render = (filter: () => Array<Item>) => {
    const products = filter();

    const main = document.querySelector('.main-wrapper') as HTMLElement
    main.innerHTML = '';

    if (products.length !== 0) {
        products.forEach(value => {
            if (value.inCart) {
                main.innerHTML += `<div class="product-wrapper cart-product">
                                <div class="image-wrapper">
                                    <img src="${value.photo}" alt="Item photo" class="product-image">
                                </div>
                                <div class="text-wrapper">
                                    <div class="text">
                                        <div class="text-title">Name</div>
                                        <div>${value.name}</div>
                                    </div>
                                    <hr class="text-line cart-line">
                                    <div class="text">
                                        <div class="text-title">Price</div>
                                        <div>${value.price}</div>
                                    </div>
                                    <hr class="text-line cart-line">
                                    <div class="text">
                                        <div class="text-title">Category</div>
                                        <div>${value.category}</div>
                                    </div>
                                    <hr class="text-line cart-line">
                                    <div class="text">
                                        <div class="text-title">Company</div>
                                        <div>${value.company}</div>
                                    </div>
                                    <hr class="text-line cart-line">
                                    <div class="text">
                                        <div class="text-title">Year</div>
                                        <div>${value.yearInMarket}</div>
                                    </div>
                                    <hr class="text-line cart-line">
                                    <div class="text">
                                        <div class="text-title">Color</div>
                                        <div>${value.color}</div>
                                    </div>
                                    <hr class="text-line cart-line">
                                    <div class="text">
                                        <div class="text-title">Amount</div>
                                        <div>${value.amount}</div>
                                    </div>
                                    <hr class="text-line cart-line">
                                    <div class="text">
                                        <div class="text-title">In cart</div>
                                        <div>${value.inCart}</div>
                                    </div>
                                </div>
                                <div>
                                    <button class="cart-button add">Add to cart</button>
                                    <button class="cart-button remove">Remove from cart</button>
                                </div>
                           </div>`;

            } else {
                main.innerHTML += `<div class="product-wrapper">
                                <div class="image-wrapper">
                                    <img src="${value.photo}" alt="Item photo" class="product-image">
                                </div>
                                <div class="text-wrapper">
                                    <div class="text">
                                        <div class="text-title">Name</div>
                                        <div>${value.name}</div>
                                    </div>
                                    <hr class="text-line">
                                    <div class="text">
                                        <div class="text-title">Price</div>
                                        <div>${value.price}</div>
                                    </div>
                                    <hr class="text-line">
                                    <div class="text">
                                        <div class="text-title">Category</div>
                                        <div>${value.category}</div>
                                    </div>
                                    <hr class="text-line">
                                    <div class="text">
                                        <div class="text-title">Company</div>
                                        <div>${value.company}</div>
                                    </div>
                                    <hr class="text-line">
                                    <div class="text">
                                        <div class="text-title">Year</div>
                                        <div>${value.yearInMarket}</div>
                                    </div>
                                    <hr class="text-line">
                                    <div class="text">
                                        <div class="text-title">Color</div>
                                        <div>${value.color}</div>
                                    </div>
                                    <hr class="text-line">
                                    <div class="text">
                                        <div class="text-title">Amount</div>
                                        <div>${value.amount}</div>
                                    </div>
                                    <hr class="text-line">
                                    <div class="text">
                                        <div class="text-title">In cart</div>
                                        <div>${value.inCart}</div>
                                    </div>
                                </div>
                                <div>
                                    <button class="cart-button add">Add to cart</button>
                                    <button class="cart-button remove">Remove from cart</button>
                                </div>
                           </div>`;

            }
        })
    } else {
        main.innerHTML += `<div class="wrapper-product-notfound">
                                <p class="text-product-notfound">There is no such product in the store!!!</p>
                           </div>`;
    }
}

export default render;