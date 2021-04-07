import {Chef} from "./stuff/chef";
import {Waiter} from "./stuff/waiter";
import {Order} from "./order";
import {EmployeeStatus} from "./stuff/employee-status";
import {Bill} from "./equipment/bill";
import {generateChefs, generateWaiters} from "../util";


export class Kitchen{

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
  waitingOrdersQueque:Array<Order>;
  completedOrdersQueque:Array<Order>;

  constructor( ){
   this.waitingOrdersQueque = new Array<Order>();
    this.completedOrdersQueque = new Array<Order>();
    this._waiters = generateWaiters();
    this._chefs = generateChefs();

    this.poolWaitingOrders();
    this.poolCompletedOrders();

  }

   public notifyNewWaitingOrder(order: Order){
     this.waitingOrdersQueque.push(order);
   }

  public notifyOrderCompleted(order: Order){
    this.completedOrdersQueque.push(order);
  }

   public poolWaitingOrders(){
    do{
         this._chefs.forEach((chef:Chef) =>{
            if(chef.status  == EmployeeStatus.Free){
              let waitingOrder = this.waitingOrdersQueque.pop();
              console.log('waiting order', waitingOrder);
              if(waitingOrder) {
                chef.processOrder(waitingOrder).then((order: Order) => {
                  console.log( 'completed', order);
                  this.notifyOrderCompleted(order);
                })
              }
            }
         });
    }

    while(this.waitingOrdersQueque.length!=0);

    setTimeout(this.poolWaitingOrders.bind(this), 1000);

   }

   public poolCompletedOrders(){
     do{
       this.waiters.forEach((waiter:Waiter) =>{
         if(waiter.status  == EmployeeStatus.Free){
           let completedOrder = this.completedOrdersQueque.pop();
           if(completedOrder){
             let bill = this.generateBill(completedOrder);
             waiter.bringBillToTable(completedOrder, bill);
           }
         }
       });
     }
     while(this.completedOrdersQueque.length!=0)

     setTimeout(this.poolCompletedOrders.bind(this), 1000);
   }

   public generateBill(order: Order): Bill{
     let bill = new Bill();
     bill.dishes = order.dishes;
     return bill;
   }

}
