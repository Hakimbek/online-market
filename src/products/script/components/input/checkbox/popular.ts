import render from "../../../view/products";
import filter from "../../../filter/filter";

export default function isPopular() {
    (document.querySelector('.popular-input') as HTMLElement).addEventListener('input', (e) => {
        const isPopular = (e.target as HTMLInputElement).checked;
        localStorage.setItem('isPopular', isPopular + '');
        render(filter);
    })
}