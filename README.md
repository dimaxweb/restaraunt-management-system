<h1 align="center">Design a Restaurant Management System</h1>
<h3 align="center">Let's design a Restaurant Management System</h3>

**We'll cover the following:**

* [System Requirements](#system-requirements)
* [Use Cases ](#use-cases)
* [Activity Diagrams](#activity-diagrams)
* [Class Diagram](#class-diagram)
* [Design Patterns](#design-patterns)
* [Testing](#testing)

<p align="center">
    <img src="/media/restaraunt-management.png" alt="Restaurant Management System">
    <br />
    Restaurant Management System
</p>

### System Requirements

We will focus on the following  set of requirements while designing the Restaurant Management System:

  
Requirements 

1. The restaurant should have 1 chef at least and should serve clients as fast as possible.
2. System should be flexible to create different types of  Restaurant without changing the core functionally.
3. The menu will contain different dishes.
4. The waiter should be able to create an order for a table and add dishes for each customer.
5. The system should place assign table order to available chef as soon as possible.
6. Chef will work on order (the longest dish preparation time) and then will notify kitchen.
7. The moment kitchen is notified about completed order  -  should notify waiter.
8. The moment waiter is notified about completed order  - generate bill and return order and bill to the table.


### Use Cases

Here are the main Actors in our system:

**Kitchen:** Serves as Mediator between Waiters and Available Chefs
**Waiter:**  Take dishes from the table , create order , create bill . Notify kitchen about new order
**Chef:** Get notification from kitchen about new orders, prepare order per table and than 
**Customer:** Order dishes  
**Table:** Seat many customers - order will be done per table. Receive bill.

### Activity Diagrams

**Serve order and generate bill:** Any waiter can perform this activity. Here are the steps to place an order:

<p align="center">
    <img src="/media/flow-diagramm.png" alt="Restaurant Management System Serve Table Order Flow">
    <br />
    Activity Diagram for Restaurant Management System Serve Order Flow
</p>


### Class Diagram
<p align="center">
    <img src="/media/deps-diagramm.png" alt="Restaurant Management Dependencies Diagram">
    <br />
    Dependencies Diagram for Restaurant Management System
</p>


### Design Patterns
We used following design patterns to make our architecture decoupled and adaptable for change

1. Abstract Factory : AbstractRestaurantFactory class. 
2. Mediator  - Kitchen Class , simplify and decouple communication between actors
3. EventEmitter/ Observer : provided by node itself , notify listeners about order completed

### Testing 
We will use approach called Property Based testing in order to create automated test.

Property definition :
The bill generated for order should contain only dishes ordered for table.



 







