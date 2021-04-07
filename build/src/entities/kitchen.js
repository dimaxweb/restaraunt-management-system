"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kitchen = void 0;
const chef_1 = require("./stuff/chef");
const waiter_1 = require("./stuff/waiter");
const employee_status_1 = require("./stuff/employee-status");
const bill_1 = require("./equipment/bill");
class Kitchen {
    constructor() {
        this.waitingOrdersQueque = new Array();
        this.completedOrdersQueque = new Array();
        this._waiters = this.generateWaiters();
        this._chefs = this.generateChefs();
        this.poolWaitingOrders();
        this.poolCompletedOrders();
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
    generateWaiters() {
        let waiters = new Array();
        [0, 1, 2, 3, 4].forEach((i) => {
            waiters.push(new waiter_1.Waiter(i.toString(), `waiter${i}`));
        });
        return waiters;
    }
    generateChefs() {
        let waiters = [];
        [1].forEach((i) => {
            waiters.push(new chef_1.Chef(i.toString(), `chef${i}`));
        });
        return waiters;
    }
    notifyNewWaitingOrder(order) {
        this.waitingOrdersQueque.push(order);
    }
    notifyOrderCompleted(order) {
        this.completedOrdersQueque.push(order);
    }
    poolWaitingOrders() {
        do {
            this._chefs.forEach((chef) => {
                if (chef.status == employee_status_1.EmployeeStatus.Free) {
                    let waitingOrder = this.waitingOrdersQueque.pop();
                    console.log('waiting order', waitingOrder);
                    if (waitingOrder) {
                        chef.processOrder(waitingOrder).then((order) => {
                            console.log('completed', order);
                            this.notifyOrderCompleted(order);
                        });
                    }
                }
            });
        } while (this.waitingOrdersQueque.length != 0);
        setTimeout(this.poolWaitingOrders.bind(this), 1000);
    }
    poolCompletedOrders() {
        do {
            this.waiters.forEach((waiter) => {
                if (waiter.status == employee_status_1.EmployeeStatus.Free) {
                    let completedOrder = this.completedOrdersQueque.pop();
                    if (completedOrder) {
                        let bill = this.generateBill(completedOrder);
                        waiter.bringBillToTable(completedOrder, bill);
                    }
                }
            });
        } while (this.completedOrdersQueque.length != 0);
        setTimeout(this.poolCompletedOrders.bind(this), 1000);
    }
    generateBill(order) {
        let bill = new bill_1.Bill();
        bill.dishes = order.dishes;
        return bill;
    }
}
exports.Kitchen = Kitchen;
//# sourceMappingURL=kitchen.js.map