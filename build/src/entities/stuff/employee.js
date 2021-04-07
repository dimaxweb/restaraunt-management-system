"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const employee_status_1 = require("./employee-status");
class Employee {
    constructor(_id, _name) {
        this._id = _id;
        this._name = _name;
        this.status = employee_status_1.EmployeeStatus.Free;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map