import search from "./script/components/input/search/search";
import category from "./script/components/button/category";
import company from "./script/components/select/company";
import yearRange from "./script/components/input/range/year";
import amountRange from "./script/components/input/range/amount";
import sort from "./script/components/select/sort";
import './style.css'
import clearFilters from "./script/components/button/clearFilters";
import clearLocalStorage from "./script/components/button/clearLocalStorage";
import color from "./script/components/button/color";
import {rotateBurger, clickDarkBurger} from "./script/components/burger/burger";
import {addToCart, removeFromCart} from "./script/components/cart/cart";
import isPopular from "./script/components/input/checkbox/popular";

// function runs when page is loaded
window.addEventListener('load', () => {
    // set firstLoad = true, if firstLoad is undefined
    if (!localStorage.getItem('firstLoad')) {
        localStorage.setItem('firstLoad', 'true');
    }

    // check firstLoad, if firstLoad is true run this code
    if (localStorage.getItem('firstLoad') === 'true') {
        localStorage.setItem('searchInput', '');
        localStorage.setItem('category', 'all');
        localStorage.setItem('company', 'all');
        localStorage.setItem('sort', 'nameAsc');
        localStorage.setItem('color', 'black');
        localStorage.setItem('amountLeftValue', '0');
        localStorage.setItem('amountRightValue', '100');
        localStorage.setItem('yearLeftValue', '0');
        localStorage.setItem('yearRightValue', '100');
        localStorage.setItem('isClicked', 'false');
        localStorage.setItem('isPopular', 'false');
        localStorage.setItem('firstLoad', 'false');
    }

    // when page is reloaded, get isPopular value from localStorage and set it to checked attrubite
    if (localStorage.getItem('isPopular') === 'true') {
        (document.querySelector('.popular-input') as HTMLElement).setAttribute('checked', 'true');
    }

    // when page is reloaded, get searchInput value from localStorage and set it to search input value
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    searchInput.setAttribute('value', localStorage.getItem('searchInput') + '');
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);

    // when page is reloaded, get category value from localStorage and add class to clicked category
    (document.getElementById(localStorage.getItem('category') as string) as HTMLElement).setAttribute('class', 'category-button button-clicked');

    // when page is reloaded, get color value from localStorage and set attribute to clicked color
    (document.getElementById(localStorage.getItem('color') as string) as HTMLElement).setAttribute('isClicked', localStorage.getItem('isClicked') as string);

    if (localStorage.getItem('isClicked') === 'true') {
        (document.getElementById(localStorage.getItem('color') as string) as HTMLElement).setAttribute('class', 'color-wrapper__button color-clicked');
    } else {
        (document.getElementById(localStorage.getItem('color') as string) as HTMLElement).setAttribute('class', 'color-wrapper__button');
    }

    // when page is reloaded, get company value from localStorage and add selected attribute to selected company oprion
    (document.getElementById(localStorage.getItem('company') as string) as HTMLElement).setAttribute('selected', 'selected');

    // when page is reloaded, get sort value from localStorage and add selected attribute to selected sort option
    (document.getElementById(localStorage.getItem('sort') as string) as HTMLElement).setAttribute('selected', 'selected');

    // when page is reloaded, get amountLeft and amountRight values from localStorage and set them to amount range input
    (document.getElementById('amountLeft') as HTMLElement).setAttribute('value', (localStorage.getItem('amountLeftValue') as string));
    (document.getElementById('amountRight') as HTMLElement).setAttribute('value', (localStorage.getItem('amountRightValue') as string));

    const amountLeftValue = localStorage.getItem('amountLeftValue') as string;
    const amountRightValue = localStorage.getItem('amountRightValue') as string;

    const amountThumbLeft = document.querySelector('.amount-slider__thumb.amount-left') as HTMLElement;
    const amountThumbRight = document.querySelector('.amount-slider__thumb.amount-right') as HTMLElement;
    const amountRange = document.querySelector('.amount-slider__range') as HTMLElement;

    amountThumbLeft.style.left = amountLeftValue + '%';
    amountThumbRight.style.right = (100 - parseInt(amountRightValue)) + '%';
    amountRange.style.left = amountLeftValue + '%';
    amountRange.style.right = (100 - parseInt(amountRightValue)) + '%';

    const amountFrom = document.getElementById('amountFrom') as HTMLElement;
    const amountTo = document.getElementById('amountTo') as HTMLElement;
    amountFrom.innerText = (localStorage.getItem('amountLeftValue') as string);
    amountTo.innerText = (localStorage.getItem('amountRightValue') as string);

    // when page is reloaded, get yearLeft and yearRight values from localStorage and set them to amount range input
    (document.getElementById('yearLeft') as HTMLElement).setAttribute('value', (localStorage.getItem('yearLeftValue') as string));
    (document.getElementById('yearRight') as HTMLElement).setAttribute('value', (localStorage.getItem('yearRightValue') as string));

    const yearLeftValue = localStorage.getItem('yearLeftValue') as string;
    const yearRightValue = localStorage.getItem('yearRightValue') as string;

    const yearThumbLeft = document.querySelector('.year-slider__thumb.year-left') as HTMLElement;
    const yearThumbRight = document.querySelector('.year-slider__thumb.year-right') as HTMLElement;
    const yearRange = document.querySelector('.year-slider__range') as HTMLElement;

    yearThumbLeft.style.left = yearLeftValue + '%';
    yearThumbRight.style.right = (100 - parseInt(yearRightValue)) + '%';
    yearRange.style.left = yearLeftValue + '%';
    yearRange.style.right = (100 - parseInt(yearRightValue)) + '%';

    const yearFrom = document.getElementById('yearFrom') as HTMLElement;
    const yearTo = document.getElementById('yearTo') as HTMLElement;

    if (parseInt(yearLeftValue) === 0) {
        yearFrom.innerText = '2018';
    } else if (parseInt(yearLeftValue) <= 25) {
        yearFrom.innerText = '2019';
    } else if (parseInt(yearLeftValue) <= 50) {
        yearFrom.innerText = '2020';
    } else if (parseInt(yearLeftValue) <= 75) {
        yearFrom.innerText = '2021';
    }

    if (parseInt(yearRightValue) === 100) {
        yearTo.innerText = '2022';
    } else if (parseInt(yearRightValue) >= 75) {
        yearTo.innerText = '2021';
    } else if (parseInt(yearRightValue) >= 50) {
        yearTo.innerText = '2020';
    } else if (parseInt(yearRightValue) >= 25) {
        yearTo.innerText = '2019';
    }
});

search();
category();
company()
amountRange()
yearRange();
color();
sort();
clearFilters()
clearLocalStorage()
isPopular();

rotateBurger();
clickDarkBurger();

addToCart();
removeFromCart();