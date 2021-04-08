"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaraunt_factory_1 = require("./entities/restaraunt-factory");
const config = require('config');
let restarauntFactory = new restaraunt_factory_1.RestarauntFactory();
let restaraunt = restarauntFactory.createRestaraunt();
restaraunt.on('orderCompleted', (order, bill) => {
    console.log('order completed:');
});
let numberOfTables = config.get('numberOfTables');
for (let i = 0; i < numberOfTables; i++) {
    console.log('serving table #', i);
    restaraunt.serverTable();
}
//# sourceMappingURL=main.js.map