import {Dish} from "./equipment/dish";
import {Waiter} from "./stuff/waiter";
import {Table} from "./equipment/table";

export class Order{
  get table(): Table {
    return this._table;
  }

  set table(value: Table) {
    this._table = value;
  }

   get waiter(): Waiter {
    return this._waiter;
  }

  set waiter(value: Waiter) {
    this._waiter = value;
  }
  get dishes(): Dish[] {
    return this._dishes;
  }

  set dishes(value: Dish[]) {
    this._dishes = value;
  }
  constructor(private _dishes:Dish[], private  _waiter: Waiter, private _table:Table){};


}
