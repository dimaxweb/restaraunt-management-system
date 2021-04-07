import {Menu} from "./equipment/menu";
import {Dish} from "./equipment/dish";
import {randomArrayItems} from "../util";
import {ICustomer} from "./interfaces/IRestraunt";

export class Customer implements ICustomer{
  get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  constructor(private _id: string , public _name: string){}

  orderDishes(menu: Menu): Dish[]{
      let dishes = randomArrayItems<Dish>(menu.dishes);
      return dishes;
  }


}
