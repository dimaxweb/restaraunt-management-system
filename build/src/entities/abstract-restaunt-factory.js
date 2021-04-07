"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRestauntFactory = void 0;
class AbstractRestauntFactory {
    createRestaraunt() {
        let restaurant = this.createRestarantShell();
        let waiters = this.createWaiters();
        let chefs = this.createChefs();
        restaurant.waiters = waiters;
        restaurant.chefs = chefs;
        restaurant.tables = this.createTables();
        restaurant.kitchen = this.createKitchen();
        restaurant.kitchen.waiters = waiters;
        restaurant.kitchen.chefs = chefs;
        restaurant.kitchen.onOrderCompleted = (order, bill) => { restaurant.emit('orderCompleted', order, bill); };
        return restaurant;
    }
}
exports.AbstractRestauntFactory = AbstractRestauntFactory;
//# sourceMappingURL=abstract-restaunt-factory.js.map