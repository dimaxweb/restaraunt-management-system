import {Waiter} from "./entities/stuff/waiter";
import {Chef} from "./entities/stuff/chef";
import {Dish} from "./entities/equipment/dish";
import {Customer} from "./entities/customer";
import {Table} from "./entities/equipment/table";
const config = require('config');
const numberOfChefs = config.get('numberOfChefsInBudget');
const numberOfWaiters = config.get('numberOfWaiters');

export function randomArrayItems <Type>(arr: Type []): Type[] {
  let numberOfItems =  Math.floor(Math.random() * arr.length);
  let randomItems  = [];
  for(let i=0; i < numberOfItems; i++){
    randomItems[i] = arr[Math.floor(Math.random() * arr.length)];
  }
  return randomItems;
}

export function generateChefs(): Array<Chef>{
  let chefs = new Array<Chef>();
  for(let i=0; i < numberOfChefs; i++){
    chefs[i] = new Chef(`${i}` , `Chef _ ${i}` )
  }
  return chefs;

}
export function generateWaiters(): Array<Waiter>{
  let waiters = new Array<Waiter>()
  for(let i=0; i < numberOfWaiters; i++){
    waiters[i] = new Waiter(`${i}` , `Waiter _ ${i}` )
  }
  return waiters;

}

export function  generateDishes(){
  let dishes  = new Array<Dish>();
  for(let i=0; i < 10 ; i++){
    dishes.push(new Dish(i.toString(), `dish_${i}`, i, i * 1000));
  }
  return dishes;

}

export function  generateCustomers(): Customer []{
  let customers  = new Array<Customer>();
  for(let i=0; i < 10 ; i++){
    customers.push(new Customer(i.toString(), `customer${i}`));
  }
  return customers;

}

export function  generateTables(){
  let tables  = new Array<Table>();
  for(let i=0; i < 10 ; i++){
    tables.push(new Table());
  }
  return tables;

}
