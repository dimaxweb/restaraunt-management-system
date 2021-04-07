import {Dish} from "./dish";

export class Bill{
  dishes: Dish[];
  totalAmount: number;
  tip: number;
  tax: number;
}
