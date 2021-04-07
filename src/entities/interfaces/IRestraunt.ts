import {EmployeeStatus} from "../stuff/employee-status";
import {Employee} from "../stuff/employee";
import {Dish} from "../equipment/dish";
import {Menu} from "../equipment/menu";
import {Order} from "../order";
import {Bill} from "../equipment/bill";
import EventEmitter = require("events");

export interface IEmployee{
  id:string;
  name:string;
  status:EmployeeStatus;
}
export interface IWaiter extends IEmployee{}
export interface IChef extends Employee{}
export interface IDish{}
export interface IMenu {
  dishes: Array<IDish>;

}
export interface ICustomer{
  id:string,
  name:string;
  orderDishes(menu: Menu): Dish[];
}
export interface ITable{
  customers: ICustomer[];
}
export interface IOrder{
  dishes: IDish[];
  table:ITable,
  waiter:IWaiter;
}
export interface IKitchen{
    menu:IMenu;
    notifyNewWaitingOrder(order:IOrder);
    waiters: IWaiter[];
    chefs: IChef [];
    onOrderCompleted : OrderCallback;
}

export type OrderCallback = (order: Order , bill:Bill) => any;

export interface IRestraunt extends EventEmitter{
  kitchen:IKitchen;
  waiters:Array<IWaiter>;
  chefs:Array<IChef>;
  tables: ITable [];
  serverTable();

}
