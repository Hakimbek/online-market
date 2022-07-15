import Item from "../items/Item";

const sort = (productsArray: Array<Item>) => {
    const sortBy = localStorage.getItem('sort') as string;

    if (sortBy === 'nameAsc') {
        productsArray = productsArray.sort(function (a: Item, b: Item) {
            if (a.name === b.name) {
                return 0
            } else if (a.name > b.name) {
                return 1;
            } else {
                return -1;
            }
        });
    } else if (sortBy === 'nameDesc') {
        productsArray = productsArray.sort(function (a: Item, b: Item) {
            if (a.name === b.name) {
                return 0
            } else if (a.name > b.name) {
                return -1;
            } else {
                return 1;
            }
        });
    } else if (sortBy === 'yearAsc') {
        productsArray = productsArray.sort(function (a: Item, b: Item) {
            if (a.yearInMarket === b.yearInMarket) {
                return 0
            } else if (a.yearInMarket > b.yearInMarket) {
                return 1;
            } else {
                return -1;
            }
        });
    } else if (sortBy === 'yearDesc') {
        productsArray = productsArray.sort(function (a: Item, b: Item) {
            if (a.yearInMarket === b.yearInMarket) {
                return 0
            } else if (a.yearInMarket > b.yearInMarket) {
                return -1;
            } else {
                return 1;
            }
        });
    } else if (sortBy === 'priceAsc') {
        productsArray = productsArray.sort(function (a: Item, b: Item) {
            if (a.price === b.price) {
                return 0
            } else if (a.price > b.price) {
                return 1;
            } else {
                return -1;
            }
        });
    } else if (sortBy === 'priceDesc') {
        productsArray = productsArray.sort(function (a: Item, b: Item) {
            if (a.price === b.price) {
                return 0
            } else if (a.price > b.price) {
                return -1;
            } else {
                return 1;
            }
        });
    }

    return productsArray;
}

export default sort;