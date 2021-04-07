import {Kitchen} from "./kitchen";
import {Waiter} from "./stuff/waiter";
import {Table} from "./equipment/table";
import {IRestraunt} from "./interfaces/IRestraunt";
import {Order} from "./order";
import {generateCustomers} from "../util";
import {Chef} from "./stuff/chef";
import EventEmitter = require("events");


export class Restaraunt extends EventEmitter implements IRestraunt  {
  kitchen: Kitchen;
  waiters: Waiter[];
  chefs: Chef [];
  tables:Table [];
  constructor(){
    super();
  }
  serverTable(){
    let freeWaiter = this.getFreeWaiter();
    let freeTable = this.getFreeTable();
    let order: Order = freeWaiter.createTableOrder(freeTable, this.kitchen.menu);
    freeWaiter.notifyKitchen(order, this.kitchen);
  }
  getFreeWaiter(): Waiter{
    return this.waiters[0];
  }
  getFreeTable(): Table{
    let freeTable = this.tables[0];
    freeTable.customers = generateCustomers();
    return freeTable;
  }


}
