import {Order} from "../src/entities/order";
import {RestarauntFactory} from "../src/entities/restaraunt-factory";
import {Bill} from "../src/entities/equipment/bill";



test('Test that bill contains the same dishes', done => {
  let restarauntFactory = new RestarauntFactory();
  let restaraunt = restarauntFactory.createRestaraunt();
  restaraunt.on('orderCompleted' , (order: Order, bill: Bill ) => {
    /**
     * Just to showcase
     */
    expect(order.dishes.length).toEqual(bill.dishes.length);
    done();
  });


});
