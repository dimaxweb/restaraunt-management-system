"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const util_1 = require("../util");
class Customer {
    constructor(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    orderDishes(menu) {
        let dishes = util_1.randomArrayItems(menu.dishes);
        return dishes;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map