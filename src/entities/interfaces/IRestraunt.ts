import {EmployeeStatus} from "../stuff/employee-status";

export interface IEmployee{
  id:string;
  name:string;
  status:EmployeeStatus;
}
export interface IWaiter extends IEmployee{}
export interface IChef{}
export interface IDish{}
export interface IMenu {
  dishes: Array<IDish>;

}
export interface IOrder{}
export interface IKitchen{
    menu:IMenu;
}
export interface IRestraunt{
  kitchen:IKitchen;
  waiters:Array<IWaiter>;
  chefs:Array<IChef>

}
