"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./entities/customer");
const menu_1 = require("./entities/equipment/menu");
const table_1 = require("./entities/equipment/table");
const dish_1 = require("./entities/equipment/dish");
const kitchen_1 = require("./entities/kitchen");
function generateDishes() {
    let dishes = new Array();
    for (let i = 0; i < 10; i++) {
        dishes.push(new dish_1.Dish(i.toString(), `dish_${i}`, i, i * 1000));
    }
    return dishes;
}
const table = new table_1.Table();
const customer = new customer_1.Customer('20', 'Dmitry');
const kitchen = new kitchen_1.Kitchen();
const waiter = kitchen.waiters[0];
const dishes = generateDishes();
console.log('dishes', dishes);
const menu = new menu_1.Menu(dishes);
const order = waiter.createTableOrder(table, menu, [customer]);
console.log('Order', order);
waiter.notifyKitchen(order, kitchen);
//# sourceMappingURL=main.js.map