export default class Item {
    private _name: string;
    private _company: string;
    private _category: string;
    private _price: number;
    private _amount: number;
    private _yearInMarket: number;
    private _color: string;
    private _inCart: boolean;
    private _photo: string;
    private _isPopular: boolean;

    constructor(name: string, company: string, category: string, price: number, amount: number, yearInMarket: number, color: string, inCart: boolean, photo: string, isPopular: boolean) {
        this._name = name;
        this._company = company;
        this._category = category;
        this._price = price;
        this._amount = amount;
        this._yearInMarket = yearInMarket;
        this._color = color;
        this._inCart = inCart;
        this._photo = photo;
        this._isPopular = isPopular;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        this._amount = amount;
    }

    get company() {
        return this._company;
    }

    get category() {
        return this._category;
    }

    get color() {
        return this._color;
    }

    get inCart() {
        return this._inCart;
    }

    set inCart(inCart) {
        this._inCart = inCart;
    }

    get photo() {
        return this._photo;
    }

    get yearInMarket() {
        return this._yearInMarket;
    }

    get isPopular() {
        return this._isPopular;
    }
}