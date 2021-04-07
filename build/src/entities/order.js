"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(_dishes, _waiter, _table) {
        this._dishes = _dishes;
        this._waiter = _waiter;
        this._table = _table;
    }
    get table() {
        return this._table;
    }
    set table(value) {
        this._table = value;
    }
    get waiter() {
        return this._waiter;
    }
    set waiter(value) {
        this._waiter = value;
    }
    get dishes() {
        return this._dishes;
    }
    set dishes(value) {
        this._dishes = value;
    }
    ;
}
exports.Order = Order;
//# sourceMappingURL=order.js.map