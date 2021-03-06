"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const tslib_1 = require("tslib");
const employee_1 = require("./employee");
const employee_status_1 = require("./employee-status");
class Chef extends employee_1.Employee {
    constructor(id, name) {
        super(id, name);
        this.status = employee_status_1.EmployeeStatus.Free;
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    processOrder(order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let maxPreparationTime = Math.max.apply(null, order.dishes.map((dish) => { return dish.preparationTime; }));
            console.log(`please wait ${maxPreparationTime} milliseconds until  ${this.name} is working on the order`);
            yield this.timeout(maxPreparationTime);
            return order;
        });
    }
}
exports.Chef = Chef;
//# sourceMappingURL=chef.js.map