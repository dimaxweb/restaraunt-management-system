import {Customer} from "../customer";
import {ITable} from "../interfaces/IRestraunt";

export class Table implements ITable{
  customers: Customer[];
  constructor(){

  }
}
