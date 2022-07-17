import {setLeftValue, setRightValue} from "./rangeValue";
import render from "../../../view/products";
import filter from "../../../filter/filter";

const left = document.getElementById('yearLeft') as HTMLInputElement;
const right = document.getElementById('yearRight') as HTMLInputElement;

const thumbLeft = document.querySelector('.year-slider__thumb.year-left') as HTMLElement;
const thumbRight = document.querySelector('.year-slider__thumb.year-right') as HTMLElement;
const range = document.querySelector('.year-slider__range') as HTMLElement;

const yearRange = () => {
    left.addEventListener('input', () => {
        const key = 'yearLeftValue';
        const rightValue = localStorage.getItem('yearRightValue') as string;

        setLeftValue(left, right, key);

        const leftValue = localStorage.getItem(key) as string;
        thumbLeft.style.left = leftValue + '%';
        range.style.left = leftValue + '%';

        const from = document.getElementById('yearFrom') as HTMLElement;
        const to = document.getElementById('yearTo') as HTMLElement;

        if (parseInt(leftValue) === 0) {
            from.innerText = '2018';
        } else if (parseInt(leftValue) <= 25) {
            from.innerText = '2019';
        } else if (parseInt(leftValue) <= 50) {
            from.innerText = '2020';
        } else if (parseInt(leftValue) <= 75) {
            from.innerText = '2021';
        }

        if (parseInt(rightValue) === 100) {
            to.innerText = '2022';
        } else if (parseInt(rightValue) >= 75) {
            to.innerText = '2021';
        } else if (parseInt(rightValue) >= 50) {
            to.innerText = '2020';
        } else if (parseInt(rightValue) >= 25) {
            to.innerText = '2019';
        }
    });

    right.addEventListener('input', () => {
        const key = 'yearRightValue';
        const leftValue = localStorage.getItem('yearLeftValue') as string;

        setRightValue(left, right, key);

        const rightValue = localStorage.getItem(key) as string;
        thumbRight.style.right = (100 - parseInt(rightValue)) + '%';
        range.style.right = (100 - parseInt(rightValue)) + '%';

        const from = document.getElementById('yearFrom') as HTMLElement;
        const to = document.getElementById('yearTo') as HTMLElement;

        if (parseInt(leftValue) === 0) {
            from.innerText = '2018';
        } else if (parseInt(leftValue) <= 25) {
            from.innerText = '2019';
        } else if (parseInt(leftValue) <= 50) {
            from.innerText = '2020';
        } else if (parseInt(leftValue) <= 75) {
            from.innerText = '2021';
        }

        if (parseInt(rightValue) === 100) {
            to.innerText = '2022';
        } else if (parseInt(rightValue) >= 75) {
            to.innerText = '2021';
        } else if (parseInt(rightValue) >= 50) {
            to.innerText = '2020';
        } else if (parseInt(rightValue) >= 25) {
            to.innerText = '2019';
        }
    });

    render(filter);
}

export default yearRange;
