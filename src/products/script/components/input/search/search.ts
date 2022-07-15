import filter from "../../../filter/filter";
import render from "../../../view/products";

const search = () => {
    (document.getElementById('searchInput') as HTMLElement).addEventListener('input', (e: Event) => {
        localStorage.setItem('searchInput', (e.target as HTMLInputElement).value);
        render(filter);
    });
}

export default search;