/*
    Run execution
 */

import {Customer} from "./entities/customer";
import {Menu} from "./entities/equipment/menu";
import {Order} from "./entities/order";
import {Table} from "./entities/equipment/table";
import {Dish} from "./entities/equipment/dish";
import {Kitchen} from "./entities/kitchen";


function generateDishes(){
  let dishes  = new Array<Dish>();
  for(let i=0; i < 10 ; i++){
    dishes.push(new Dish(i.toString(), `dish_${i}`, i, i * 1000));
  }
  return dishes;

}



const table:Table = new Table();
const customer: Customer = new Customer('20', 'Dmitry');



const kitchen = new Kitchen();
const waiter = kitchen.waiters[0];



const dishes:Dish[] = generateDishes();
console.log('dishes', dishes);
const menu = new Menu(dishes);

const order: Order = waiter.createTableOrder(table,menu,[customer]);
console.log('Order', order);
waiter.notifyKitchen(order,kitchen);





//

