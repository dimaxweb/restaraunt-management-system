import {Waiter} from "./entities/stuff/waiter";
import {Chef} from "./entities/stuff/chef";
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
  let chefs = new Array[numberOfChefs];
  for(let i=0; i < numberOfChefs; i++){
    chefs[i] = new Chef(`${i}` , `Chef _ ${i}` )
  }
  return chefs;

}
export function generateWaiters(): Array<Waiter>{
  let waiters = new Array[numberOfWaiters];
  for(let i=0; i < numberOfWaiters; i++){
    waiters[i] = new Waiter(`${i}` , `Waiter _ ${i}` )
  }
  return waiters;

}
