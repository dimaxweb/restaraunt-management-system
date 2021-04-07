import {Menu} from "./equipment/menu";
import {Dish} from "./equipment/dish";

export class Customer{
  get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  constructor(private _id: string , public _name: string){}

  orderDishes(menu: Menu): Dish[]{
      let dishes = menu.dishes;
      return dishes;
  }


}
