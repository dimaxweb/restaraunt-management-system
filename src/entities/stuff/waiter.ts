import {Employee} from "./employee";
import {Order} from "../order";
import {Dish} from "../equipment/dish";
import {Table} from "../equipment/table";
import {Customer} from "../customer";
import {Menu} from "../equipment/menu";
import {Bill} from "../equipment/bill";
import {Kitchen} from "../kitchen";


export class Waiter extends Employee{

  constructor( id:string, name:string){
    super(id,name);
  }

  createTableOrder(table:Table, menu:Menu): Order{
    let customers = table.customers;
    let dishes =  new Array<Dish>();
    customers.forEach((customer:Customer)=>{
      dishes = dishes.concat(customer.orderDishes(menu));
    });
    return new Order(dishes, this,table);
  }

  notifyKitchen(order: Order, kitchen: Kitchen){
    kitchen.notifyNewWaitingOrder(order);
  }

  bringBillToTable(order: Order, bill:Bill) : {order:Order,bill:Bill}{
    return {order, bill};
  }







}
