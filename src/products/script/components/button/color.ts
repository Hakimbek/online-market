import render from "../../view/products";
import filter from "../../filter/filter";

const color = () => {
    (document.getElementById('black') as HTMLElement).addEventListener('click', (e) => {
        const buttons = document.querySelectorAll('.color-wrapper__button') as NodeList;

        buttons.forEach(value => {
            const button = value as HTMLButtonElement;
            button.removeAttribute('class');
            button.setAttribute('class', 'color-wrapper__button');
        });

        localStorage.setItem('color', (e.target as HTMLButtonElement).value);

        const button = document.getElementById(localStorage.getItem('color') as string) as HTMLElement;

        if (button.getAttribute('isClicked') === 'true') {
            button.setAttribute('class', 'color-wrapper__button');
            button.setAttribute('isClicked', 'false');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        } else {
            button.setAttribute('class', 'color-wrapper__button color-clicked');
            button.setAttribute('isClicked', 'true');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        }

        render(filter);
    });

    (document.getElementById('yellow') as HTMLElement).addEventListener('click', (e) => {
        const buttons = document.querySelectorAll('.color-wrapper__button') as NodeList;

        buttons.forEach(value => {
            const button = value as HTMLButtonElement;
            button.removeAttribute('class');
            button.setAttribute('class', 'color-wrapper__button');
        });

        localStorage.setItem('color', (e.target as HTMLButtonElement).value);

        const button = document.getElementById(localStorage.getItem('color') as string) as HTMLElement;

        if (button.getAttribute('isClicked') === 'true') {
            button.setAttribute('class', 'color-wrapper__button');
            button.setAttribute('isClicked', 'false');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        } else {
            button.setAttribute('class', 'color-wrapper__button color-clicked');
            button.setAttribute('isClicked', 'true');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        }

        render(filter);
    });

    (document.getElementById('blue') as HTMLElement).addEventListener('click', (e) => {
        const buttons = document.querySelectorAll('.color-wrapper__button') as NodeList;

        buttons.forEach(value => {
            const button = value as HTMLButtonElement;
            button.removeAttribute('class');
            button.setAttribute('class', 'color-wrapper__button');
        });

        localStorage.setItem('color', (e.target as HTMLButtonElement).value);

        const button = document.getElementById(localStorage.getItem('color') as string) as HTMLElement;

        if (button.getAttribute('isClicked') === 'true') {
            button.setAttribute('class', 'color-wrapper__button');
            button.setAttribute('isClicked', 'false');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        } else {
            button.setAttribute('class', 'color-wrapper__button color-clicked');
            button.setAttribute('isClicked', 'true');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        }

        render(filter);
    });

    (document.getElementById('white') as HTMLElement).addEventListener('click', (e) => {
        const buttons = document.querySelectorAll('.color-wrapper__button') as NodeList;

        buttons.forEach(value => {
            const button = value as HTMLButtonElement;
            button.removeAttribute('class');
            button.setAttribute('class', 'color-wrapper__button');
        });

        localStorage.setItem('color', (e.target as HTMLButtonElement).value);

        const button = document.getElementById(localStorage.getItem('color') as string) as HTMLElement;

        if (button.getAttribute('isClicked') === 'true') {
            button.setAttribute('class', 'color-wrapper__button');
            button.setAttribute('isClicked', 'false');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        } else {
            button.setAttribute('class', 'color-wrapper__button color-clicked');
            button.setAttribute('isClicked', 'true');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        }

        render(filter);
    });

    (document.getElementById('red') as HTMLElement).addEventListener('click', (e) => {
        const buttons = document.querySelectorAll('.color-wrapper__button') as NodeList;

        buttons.forEach(value => {
            const button = value as HTMLButtonElement;
            button.removeAttribute('class');
            button.setAttribute('class', 'color-wrapper__button');
        });

        localStorage.setItem('color', (e.target as HTMLButtonElement).value);

        const button = document.getElementById(localStorage.getItem('color') as string) as HTMLElement;

        if (button.getAttribute('isClicked') === 'true') {
            button.setAttribute('class', 'color-wrapper__button');
            button.setAttribute('isClicked', 'false');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        } else {
            button.setAttribute('class', 'color-wrapper__button color-clicked');
            button.setAttribute('isClicked', 'true');
            localStorage.setItem('isClicked', button.getAttribute('isClicked') as string);
        }

        render(filter);
    });
}

export default color;