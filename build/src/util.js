"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTables = exports.generateCustomers = exports.generateDishes = exports.generateWaiters = exports.generateChefs = exports.randomArrayItems = void 0;
const waiter_1 = require("./entities/stuff/waiter");
const chef_1 = require("./entities/stuff/chef");
const dish_1 = require("./entities/equipment/dish");
const customer_1 = require("./entities/customer");
const table_1 = require("./entities/equipment/table");
const config = require('config');
const numberOfChefs = config.get('numberOfChefsInBudget');
const numberOfWaiters = config.get('numberOfWaiters');
function randomArrayItems(arr) {
    let numberOfItems = Math.floor(Math.random() * arr.length);
    let randomItems = [];
    for (let i = 0; i < numberOfItems; i++) {
        randomItems[i] = arr[Math.floor(Math.random() * arr.length)];
    }
    return randomItems;
}
exports.randomArrayItems = randomArrayItems;
function generateChefs() {
    let chefs = new Array();
    for (let i = 0; i < numberOfChefs; i++) {
        chefs[i] = new chef_1.Chef(`${i}`, `Chef _ ${i}`);
    }
    return chefs;
}
exports.generateChefs = generateChefs;
function generateWaiters() {
    let waiters = new Array();
    for (let i = 0; i < numberOfWaiters; i++) {
        waiters[i] = new waiter_1.Waiter(`${i}`, `Waiter _ ${i}`);
    }
    return waiters;
}
exports.generateWaiters = generateWaiters;
function generateDishes() {
    let dishes = new Array();
    for (let i = 0; i < 10; i++) {
        dishes.push(new dish_1.Dish(i.toString(), `dish_${i}`, i, i * 1000));
    }
    return dishes;
}
exports.generateDishes = generateDishes;
function generateCustomers() {
    let customers = new Array();
    for (let i = 0; i < 10; i++) {
        customers.push(new customer_1.Customer(i.toString(), `customer${i}`));
    }
    return customers;
}
exports.generateCustomers = generateCustomers;
function generateTables() {
    let tables = new Array();
    for (let i = 0; i < 10; i++) {
        tables.push(new table_1.Table());
    }
    return tables;
}
exports.generateTables = generateTables;
//# sourceMappingURL=util.js.map