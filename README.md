<h1 align="center">Design a Restaurant Management System</h1>
<h3 align="center">Let's design a Restaurant Management System</h3>

**We'll cover the following:**

* [System Requirements](#system-requirements)
* [Use Case ](#use-cases)
* [Class Diagram](#class-diagram)
* [Activity Diagrams](#activity-diagrams)
* [Design Patterns](#patterns)

<p align="center">
    <img src="/media/restaraunt-management.png" alt="Restaurant Management System">
    <br />
    Restaurant Management System
</p>

### System Requirements

We will focus on the following business goals and  set of requirements while designing the Restaurant Management System:

  
Requirements 

1. The should have 1 chef at least and should serve clients as fast as possible.
2. System should be flexible to create different types of  Restaurant without changing the core functionally.
3. The menu will have different menu sections, containing different menu items.
4. The waiter should be able to create an order for a table and add meals for each seat.
5. Each meal can have multiple meal items. Each meal item corresponds to a menu item.
6. The system should be able to retrieve information about tables currently available to seat walk-in customers.
7. The system should support the reservation of tables.
8. The receptionist should be able to search for available tables by date/time and reserve a table.
9. The system should allow customers to cancel their reservation.
10. The system should be able to send notifications whenever the reservation time is approaching.
11. The customers should be able to pay their bills through credit card, check or cash.
12. Each restaurant branch can have multiple seating arrangements of tables.

### Use Cases

Here are the main Actors in our system:

**Kitchen:** Mainly responsible for adding and modifying tables and their layout, and creating and canceling table reservations.
**Waiter:** To take/modify orders.
**Chef:** To view and work on an order.
**Customer:** To view and work on an order.



Here is the use case diagram of our Restaurant Management System:

<p align="center">
    <img src="/media/rms-use-case-diagram.svg" alt="Restaurant Management System Use Case Diagram">
    <br />
    Use Case Diagram for Restaurant Management System
</p>

### Class Diagram
<p align="center">
    <img src="/media-files/rms-class-diagram.png" alt="Restaurant Management System Class Diagram">
    <br />
    Class Diagram for Restaurant Management System
</p>

<p align="center">
    <img src="/media-files/rms-uml.svg" alt="Restaurant Management System UML">
    <br />
    UML for Restaurant Management System
</p>

### Activity Diagrams

**Place order:** Any waiter can perform this activity. Here are the steps to place an order:

<p align="center">
    <img src="/media-files/rms-place-order-activity-diagram.svg" alt="Restaurant Management System Place Order">
    <br />
    Activity Diagram for Restaurant Management System Place Order
</p>

**Make a reservation:** Any receptionist can perform this activity. Here are the steps to make a reservation:

<p align="center">
    <img src="/media-files/rms-make-reservation-activity-diagram.svg" alt="Restaurant Management System Make Reservation">
    <br />
    Activity Diagram for Restaurant Management System Make Reservation
</p>

**Cancel a reservation:** Any receptionist can perform this activity. Here are the steps to cancel a reservation:

<p align="center">
    <img src="/media-files/rms-cancel-reservation-activity-diagram.svg" alt="Restaurant Management System Cancel Reservation">
    <br />
    Activity Diagram for Restaurant Management System Cancel Reservation
</p>

### Patterns

User cases : 
1.Waiter notify kitchen about new order
2. Kitchen  







