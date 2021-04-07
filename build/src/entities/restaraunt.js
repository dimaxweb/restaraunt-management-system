"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaraunt = void 0;
const util_1 = require("../util");
const EventEmitter = require("events");
class Restaraunt extends EventEmitter {
    constructor() {
        super();
    }
    serverTable() {
        let freeWaiter = this.getFreeWaiter();
        let freeTable = this.getFreeTable();
        let order = freeWaiter.createTableOrder(freeTable, this.kitchen.menu);
        freeWaiter.notifyKitchen(order, this.kitchen);
    }
    getFreeWaiter() {
        return this.waiters[0];
    }
    getFreeTable() {
        let freeTable = this.tables[0];
        freeTable.customers = util_1.generateCustomers();
        return freeTable;
    }
}
exports.Restaraunt = Restaraunt;
//# sourceMappingURL=restaraunt.js.map