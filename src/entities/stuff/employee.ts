import {EmployeeStatus} from "./employee-status";

export abstract class Employee{
  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
  status = EmployeeStatus.Free
  constructor(public _id:string, public _name:string){

  }


}
