/*
    Run execution
 */

import {RestarauntFactory} from "./entities/restaraunt-factory";
import {Order} from "./entities/order";
import {Bill} from "./entities/equipment/bill";
const config = require('config');

let restarauntFactory = new RestarauntFactory();
let restaraunt = restarauntFactory.createRestaraunt();
restaraunt.on('orderCompleted' , (order: Order, bill: Bill ) => {
  console.log('order completed:');

});

let numberOfTables =config.get('numberOfTables');
for(let i=0;i< numberOfTables; i++){
  console.log('serving table #' , i);
  restaraunt.serverTable();
}



