"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
const employee_1 = require("./employee");
const order_1 = require("../order");
class Waiter extends employee_1.Employee {
    constructor(id, name) {
        super(id, name);
    }
    createTableOrder(table, menu) {
        let customers = table.customers;
        let dishes = new Array();
        customers.forEach((customer) => {
            dishes = dishes.concat(customer.orderDishes(menu));
        });
        return new order_1.Order(dishes, this, table);
    }
    notifyKitchen(order, kitchen) {
        kitchen.notifyNewWaitingOrder(order);
    }
    bringBillToTable(order, bill) {
        return { order, bill };
    }
}
exports.Waiter = Waiter;
//# sourceMappingURL=waiter.js.map