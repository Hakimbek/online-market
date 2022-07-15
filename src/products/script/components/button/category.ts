import render from "../../view/products";
import filter from "../../filter/filter";

const category = () => {
    document.addEventListener('click', (e) => {
        const buttons = document.querySelectorAll('.category-button') as NodeList;
        buttons.forEach(value => {
            const button = value as HTMLButtonElement;
            button.removeAttribute('class');
            button.setAttribute('class', 'category-button');
        });

        if ((e.target as HTMLButtonElement).getAttribute('class') === 'category-button') {
            localStorage.setItem('category', (e.target as HTMLButtonElement).value);
        }

        const button = document.getElementById(localStorage.getItem('category') as string) as HTMLElement;
        button.setAttribute('class', 'category-button button-clicked');

        render(filter);
    });
}

export default category;