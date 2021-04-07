"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kitchen = void 0;
const employee_status_1 = require("./stuff/employee-status");
const bill_1 = require("./equipment/bill");
const menu_1 = require("./equipment/menu");
const util_1 = require("../util");
class Kitchen {
    constructor() {
        this.waitingOrdersQueque = new Array();
        this._menu = new menu_1.Menu(util_1.generateDishes());
    }
    get menu() {
        return this._menu;
    }
    set menu(value) {
        this._menu = value;
    }
    get waiters() {
        return this._waiters;
    }
    set waiters(value) {
        this._waiters = value;
    }
    get chefs() {
        return this._chefs;
    }
    set chefs(value) {
        this._chefs = value;
    }
    notifyNewWaitingOrder(order) {
        this.waitingOrdersQueque.push(order);
        this.poolWaitingOrders();
    }
    poolWaitingOrders() {
        while (this.waitingOrdersQueque.length) {
            let freeChef = this._chefs.find((chef) => { return chef.status == employee_status_1.EmployeeStatus.Free; });
            console.log('free chef', freeChef);
            if (freeChef) {
                let waitingOrder = this.waitingOrdersQueque.pop();
                freeChef.status = employee_status_1.EmployeeStatus.Busy;
                freeChef.processOrder(waitingOrder).then((order) => {
                    console.log(` ${freeChef.name} is finished working on the order`);
                    freeChef.status = employee_status_1.EmployeeStatus.Free;
                    let bill = this.generateBill(order);
                    order.waiter.bringBillToTable(order, bill);
                    this.onOrderCompleted(order, bill);
                });
            }
            else {
                setTimeout(this.poolWaitingOrders.bind(this), 1000);
            }
        }
    }
    generateBill(order) {
        let bill = new bill_1.Bill();
        bill.dishes = order.dishes;
        return bill;
    }
}
exports.Kitchen = Kitchen;
//# sourceMappingURL=kitchen.js.map