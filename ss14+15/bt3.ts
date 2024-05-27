class MenuItem {
    constructor(public id: number, public name: string, public price: number) {}
}

class Table {
    constructor(public id: number, public capacity: number, public available: boolean = true) {}
}

class Reservation {
    constructor(public id: number, public customerName: string, public tableId: number) {}
}

class Order {
    constructor(public id: number, public tableId: number, public items: MenuItem[]) {}

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    menu: MenuItem[] = [];
    tables: Table[] = [];
    reservations: Reservation[] = [];
    orders: Order[] = [];

    addMenuItem(menuItem: MenuItem): void {
        this.menu.push(menuItem);
    }

    addTable(table: Table): void {
        this.tables.push(table);
    }

    makeReservation(reservation: Reservation): void {
        const table = this.tables.find(table => table.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
                console.log(`Table ${table.id} reserved for ${reservation.customerName}.`);
            } else {
                console.log(`Table ${table.id} is already reserved.`);
            }
        } else {
            console.log(`Table with ID ${reservation.tableId} not found.`);
        }
    }

    placeOrder(order: Order): void {
        this.orders.push(order);
    }

    generateBill(tableId: number): void {
        const order = this.orders.find(order => order.tableId === tableId);
        if (order) {
            const total = order.getTotal();
            console.log(`Total bill for Table ${tableId}: $${total}`);
            const table = this.tables.find(table => table.id === tableId);
            if (table) {
                table.available = true;
            }
        } else {
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
