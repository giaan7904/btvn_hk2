"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available = true) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(menuItem) {
        this.menu.push(menuItem);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(reservation) {
        const table = this.tables.find(table => table.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
                console.log(`Table ${table.id} reserved for ${reservation.customerName}.`);
            }
            else {
                console.log(`Table ${table.id} is already reserved.`);
            }
        }
        else {
            console.log(`Table with ID ${reservation.tableId} not found.`);
        }
    }
    placeOrder(order) {
        this.orders.push(order);
    }
    generateBill(tableId) {
        const order = this.orders.find(order => order.tableId === tableId);
        if (order) {
            const total = order.getTotal();
            console.log(`Total bill for Table ${tableId}: $${total}`);
            const table = this.tables.find(table => table.id === tableId);
            if (table) {
                table.available = true;
            }
        }
        else {
            console.log(`No order found for Table ${tableId}.`);
        }
    }
}
// Tạo các mục menu
const menuItems = [
    new MenuItem(1, "Pizza", 10),
    new MenuItem(2, "Burger", 8),
    new MenuItem(3, "Salad", 6)
];
// Tạo các bàn trong nhà hàng
const tables = [
    new Table(1, 4),
    new Table(2, 6),
    new Table(3, 2)
];
// Tạo một nhà hàng
const restaurant = new Restaurant();
// Thêm các mục vào menu và bàn vào nhà hàng
menuItems.forEach(item => restaurant.addMenuItem(item));
tables.forEach(table => restaurant.addTable(table));
// Đặt bàn và đặt món
restaurant.makeReservation(new Reservation(1, "An", 1));
restaurant.placeOrder(new Order(1, 1, [menuItems[0], menuItems[1]]));
// In hóa đơn
restaurant.generateBill(1);
