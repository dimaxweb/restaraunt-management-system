"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
class Dish {
    constructor(_id, _name, _price, _preparationTime) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._preparationTime = _preparationTime;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get preparationTime() {
        return this._preparationTime;
    }
    set preparationTime(value) {
        this._preparationTime = value;
    }
}
exports.Dish = Dish;
//# sourceMappingURL=dish.js.map