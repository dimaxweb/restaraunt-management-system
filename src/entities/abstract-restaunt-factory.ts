import {IRestraunt} from "./interfaces/IRestraunt";
import {Order} from "./order";
import {Bill} from "./equipment/bill";

export abstract class AbstractRestauntFactory{
  abstract createKitchen();
  abstract createWaiters();
  abstract createChefs();
  abstract createTables();
  abstract createRestarantShell(): IRestraunt;
  public createRestaraunt(): IRestraunt{
     let restaurant = this.createRestarantShell();
     let waiters = this.createWaiters();
     let chefs = this.createChefs();
     restaurant.waiters = waiters;
     restaurant.chefs = chefs;
     restaurant.tables = this.createTables();
     restaurant.kitchen = this.createKitchen();
     restaurant.kitchen.waiters = waiters
     restaurant.kitchen.chefs  = chefs;
     restaurant.kitchen.onOrderCompleted = (order:Order,bill:Bill) => {restaurant.emit('orderCompleted', order, bill)};
     return restaurant;
   }
}
