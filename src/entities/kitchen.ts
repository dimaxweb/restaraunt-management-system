import {Chef} from "./stuff/chef";
import {Waiter} from "./stuff/waiter";
import {Order} from "./order";
import {EmployeeStatus} from "./stuff/employee-status";
import {Bill} from "./equipment/bill";
import {IKitchen, OrderCallback} from "./interfaces/IRestraunt";
import {Menu} from "./equipment/menu";
import {generateDishes} from "../util";


export class Kitchen implements IKitchen{
  get menu(): Menu {
    return this._menu;
  }

  set menu(value: Menu) {
    this._menu = value;
  }

  get waiters(): Array<Waiter> {
    return this._waiters;
  }

  set waiters(value: Array<Waiter>) {
    this._waiters = value;
  }

  get chefs(): Array<Chef> {
    return this._chefs;
  }

  set chefs(value: Array<Chef>) {
    this._chefs = value;
  }


  private  _waiters:Array<Waiter>;
  private _chefs: Array<Chef>;
  private _menu:Menu;
  private waitingOrdersQueque:Array<Order>;
  onOrderCompleted : OrderCallback;

  constructor( ){
    this.waitingOrdersQueque = new Array<Order>();
    this._menu = new Menu(  generateDishes());
  }

   public notifyNewWaitingOrder(order: Order){
     this.waitingOrdersQueque.push(order);
     this.poolWaitingOrders();
   }

   public poolWaitingOrders(){
    while(this.waitingOrdersQueque.length){
      let freeChef = this._chefs.find((chef:Chef) => { return chef.status == EmployeeStatus.Free });
      console.log('free chef' , freeChef);
      if(freeChef){
        let waitingOrder = this.waitingOrdersQueque.pop();
        freeChef.status = EmployeeStatus.Busy;
        freeChef.processOrder(waitingOrder).then((order: Order) => {
          console.log(` ${freeChef.name} is finished working on the order`);
          freeChef.status = EmployeeStatus.Free;
          let bill = this.generateBill(order);
          order.waiter.bringBillToTable(order, bill);
          this.onOrderCompleted(order,bill);
        })
      }
      else{
        /**
         * lets wait for free chef
         */
        setTimeout(this.poolWaitingOrders.bind(this), 1000);
      }
    }

   }
   public generateBill(order: Order): Bill{
     let bill = new Bill();
     bill.dishes = order.dishes;
     return bill;
   }

}
