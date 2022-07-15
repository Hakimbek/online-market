import render from "../../view/products";
import filter from "../../filter/filter";
import products from "../../items/products";

export function addToCart () {
    document.addEventListener('click', (e) => {
        const cart = document.querySelector('.cart-products') as HTMLElement

        if (parseInt(cart.innerText) < 20) {
            const button = e.target as HTMLButtonElement;
            if (button.getAttribute('class') === 'cart-button add') {
                const productWrapper = (button.parentNode as HTMLElement).parentNode as HTMLElement
                const text = (productWrapper.children[1] as HTMLElement).children[0];
                const name = text.children[1].innerHTML
                products.forEach(value => {
                    if (value.name === name && !value.inCart) {
                        console.log('add')
                        value.inCart = true;
                        value.amount = value.amount - 1;
                        cart.innerText = (parseInt(cart.innerText) + 1).toString();
                    }
                })
            }
            render(filter)
        } else {
            alert('Sorry, you cannot add more than 20 items to the cart!!!')
        }
    });
}

export function removeFromCart () {
    document.addEventListener('click', (e) => {
        const cart = document.querySelector('.cart-products') as HTMLElement

        if (parseInt(cart.innerText) > 0) {
            const button = e.target as HTMLButtonElement;
            if (button.getAttribute('class') === 'cart-button remove') {
                const productWrapper = (button.parentNode as HTMLElement).parentNode as HTMLElement
                const text = (productWrapper.children[1] as HTMLElement).children[0];
                const name = text.children[1].innerHTML
                products.forEach(value => {
                    if (value.name === name && value.inCart) {
                        value.inCart = false;
                        value.amount = value.amount + 1;
                        cart.innerText = (parseInt(cart.innerText) - 1).toString();
                    }
                })
                render(filter)
            }
        }
    });
}