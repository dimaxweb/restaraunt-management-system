export class Dish{
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get preparationTime(): number {
    return this._preparationTime;
  }

  set preparationTime(value: number) {
    this._preparationTime = value;
  }

  constructor (private _id:string, private _name:string, private _price:number, private  _preparationTime: number){

  }

}
