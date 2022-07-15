import {setLeftValue, setRightValue} from "./rangeValue";
import render from "../../../view/products";
import filter from "../../../filter/filter";

const left = document.getElementById('amountLeft') as HTMLInputElement;
const right = document.getElementById('amountRight') as HTMLInputElement;

const thumbLeft = document.querySelector('.amount-slider__thumb.amount-left') as HTMLElement;
const thumbRight = document.querySelector('.amount-slider__thumb.amount-right') as HTMLElement;
const range = document.querySelector('.amount-slider__range') as HTMLElement;


const amountRange = () => {
    left.addEventListener('input', () => {
        const key = 'amountLeftValue';
        const rightValue = 'amountRightValue';

        setLeftValue(left, right, key);

        const percent = localStorage.getItem(key) as string;
        thumbLeft.style.left = percent + '%';
        range.style.left = percent + '%';

        const from = document.getElementById('amountFrom') as HTMLElement;
        const to = document.getElementById('amountTo') as HTMLElement;
        from.innerText = (localStorage.getItem(key) as string)
        to.innerText = (localStorage.getItem(rightValue) as string)
    });

    right.addEventListener('input', () => {
        const key = 'amountRightValue';
        const leftValue = 'amountLeftValue';

        setRightValue(left, right, key);

        const percent = localStorage.getItem(key) as string;
        thumbRight.style.right = (100 - parseInt(percent)) + '%';
        range.style.right = (100 - parseInt(percent)) + '%';

        const from = document.getElementById('amountFrom') as HTMLElement;
        const to = document.getElementById('amountTo') as HTMLElement;
        from.innerText = (localStorage.getItem(leftValue) as string)
        to.innerText = (localStorage.getItem(key) as string)
    });

    render(filter);
}

export default amountRange;
