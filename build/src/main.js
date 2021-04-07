"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaraunt_factory_1 = require("./entities/restaraunt-factory");
let restarauntFactory = new restaraunt_factory_1.RestarauntFactory();
let restaraunt = restarauntFactory.createRestaraunt();
restaraunt.on('orderCompleted', (order, bill) => {
    console.log('order:', order);
    console.log('bill', bill);
});
restaraunt.serverTable();
//# sourceMappingURL=main.js.map