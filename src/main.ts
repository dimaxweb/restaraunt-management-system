/*
    Run execution
 */

import {RestarauntFactory} from "./entities/restaraunt-factory";
import {Order} from "./entities/order";
import {Bill} from "./entities/equipment/bill";

let restarauntFactory = new RestarauntFactory();
let restaraunt = restarauntFactory.createRestaraunt();
restaraunt.on('orderCompleted' , (order: Order, bill: Bill ) => {
  console.log('order:' , order);
  console.log('bill', bill);
});
restaraunt.serverTable();
