import products from "../items/products";
import sort from "./sort";

const filter = () => {
    // get all product
    let productsArray = products;

    // filter by searchInput
    const search = localStorage.getItem('searchInput') as string;

    if (search.toLowerCase() !== '') {
        productsArray = productsArray.filter(value => value.name.toLowerCase().includes(search.toLowerCase()));
    }

    // filter by category
    const category = localStorage.getItem('category') as string;
    if (category.toLowerCase() !== 'all') {
        productsArray = productsArray.filter(value => value.category.toLowerCase() === category.toLowerCase());
    }

    // filter by company
    const company = localStorage.getItem('company') as string;
    if (company.toLowerCase() !== 'all') {
        productsArray = productsArray.filter(value => value.company.toLowerCase() === company.toLowerCase());
    }

    // filter by amountRange
    const amountLeftValue = localStorage.getItem('amountLeftValue') as string;
    const amountRightValue = localStorage.getItem('amountRightValue') as string;
    productsArray = productsArray.filter(value => value.amount >= parseInt(amountLeftValue) && value.amount <= parseInt(amountRightValue));

    // filter by yearRange
    const yearLeftValue = localStorage.getItem('yearLeftValue') as string;
    const yearRightValue = localStorage.getItem('yearRightValue') as string;

    let from = '';
    let to = '';

    if (parseInt(yearLeftValue) === 0) {
        from = '2018';
    } else if (parseInt(yearLeftValue) <= 25) {
        from = '2019';
    } else if (parseInt(yearLeftValue) <= 50) {
        from = '2020';
    } else if (parseInt(yearLeftValue) <= 75) {
        from = '2021';
    }

    if (parseInt(yearRightValue) === 100) {
        to = '2022';
    } else if (parseInt(yearRightValue) >= 75) {
        to = '2021';
    } else if (parseInt(yearRightValue) >= 50) {
        to = '2020';
    } else if (parseInt(yearRightValue) >= 25) {
        to = '2019';
    }

    productsArray = productsArray.filter(value => value.yearInMarket >= parseInt(from) && value.yearInMarket <= parseInt(to));

    // filter by color
    const isClicked = localStorage.getItem('isClicked') as string;
    const color = localStorage.getItem('color') as string;
    if (isClicked !== 'false') {
        productsArray = productsArray.filter(value => value.color === color);
    }

    // filter by popularity
    const isPopular = localStorage.getItem('isPopular');
    if (isPopular === 'true') {
        productsArray = productsArray.filter(value => value.isPopular);
    }

    // sort filtered products and return
    return sort(productsArray);
}

export default filter;