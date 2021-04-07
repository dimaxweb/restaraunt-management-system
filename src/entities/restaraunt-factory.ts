import {AbstractRestauntFactory} from "./abstract-restaunt-factory";
import {generateChefs, generateTables, generateWaiters} from "../util";
import {Kitchen} from "./kitchen";
import {Restaraunt} from "./restaraunt";

export class RestarauntFactory extends AbstractRestauntFactory{

  constructor(){
    super();
  }
  public createChefs(){
    return generateChefs();
  }
  public createWaiters(){
    return generateWaiters();
  }
  public createKitchen(){
       return new Kitchen();
  }

  public createTables(){
    return generateTables();
  }

  public createRestarantShell(){
    return new Restaraunt();
  }

}
