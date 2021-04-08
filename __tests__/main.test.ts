import {Order} from "../src/entities/order";
import {RestarauntFactory} from "../src/entities/restaraunt-factory";
import {Bill} from "../src/entities/equipment/bill";

test('Test that order contains the dishes as bill', done => {
  let restarauntFactory = new RestarauntFactory();
  let restaraunt = restarauntFactory.createRestaraunt();
  restaraunt.on('orderCompleted' , (order: Order, bill: Bill ) => {
    expect(order.dishes.length).toEqual(bill.dishes.length);
    done();
  });
  restaraunt.serverTable();
});
