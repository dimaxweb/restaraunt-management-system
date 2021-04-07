import {Employee} from "./employee";
import {Order} from "../order";
import {Dish} from "../equipment/dish";
import {EmployeeStatus} from "./employee-status";

export class Chef extends Employee{


  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async  processOrder(order: Order) {
    this.status = EmployeeStatus.Busy;
    let maxPreparationTime = Math.max.apply(null, order.dishes.map( (dish:Dish) =>  {return dish.preparationTime }));
     await this.timeout(maxPreparationTime);
     return order;
  }
}
