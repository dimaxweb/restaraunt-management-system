import {Employee} from "./employee";
import {Order} from "../order";
import {Dish} from "../equipment/dish";
import {EmployeeStatus} from "./employee-status";

export class Chef extends Employee{

  constructor(id:string, name:string){
    super(id,name);
    this.status = EmployeeStatus.Free;
  }
  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async  processOrder(order: Order) {
     let maxPreparationTime = Math.max.apply(null, order.dishes.map( (dish:Dish) =>  {return dish.preparationTime }));
     console.log(`please wait ${maxPreparationTime} milliseconds until  ${this.name} is working on the order`);
     await this.timeout(maxPreparationTime);
     return order;
  }
}
