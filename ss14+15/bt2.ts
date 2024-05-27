class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class CartProduct extends Product {
    constructor(id: number, name: string, price: number, public quantity: number) {
        super(id, name, price);
    }

    calculatePrice(): number {
        return this.price * this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }

    decreaseQuantity(): void {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
}

class ShopProduct extends Product {
    constructor(id: number, name: string, price: number, public stock: number) {
        super(id, name, price);
    }
}

class Cart {
    items: CartProduct[] = [];

    addItem(shopProduct: ShopProduct, quantity: number): void {
        if (quantity <= shopProduct.stock) {
            const cartProduct = new CartProduct(
                shopProduct.id,
                shopProduct.name,
                shopProduct.price,
                quantity
            );
            this.items.push(cartProduct);
            console.log(`Added ${quantity} ${shopProduct.name} to cart.`);
        } else {
            console.log(`Not enough stock for ${shopProduct.name}.`);
        }
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
        console.log(`Removed product with ID ${id} from cart.`);
    }

    getTotal(): number {
        let total = 0;
        this.items.forEach(item => {
            total += item.calculatePrice();
        });
        return total;
    }
}

// Tạo các sản phẩm cửa hàng
const shopProducts: ShopProduct[] = [
    new ShopProduct(1, "Product A", 10, 5),
    new ShopProduct(2, "Product B", 20, 10),
    new ShopProduct(3, "Product C", 30, 3)
];

// Tạo giỏ hàng và thêm sản phẩm vào giỏ hàng
const cart = new Cart();
cart.addItem(shopProducts[0], 2); // Thêm 2 sản phẩm A vào giỏ hàng
cart.addItem(shopProducts[1], 3); // Thêm 3 sản phẩm B vào giỏ hàng

// Hiển thị tổng giá trị giỏ hàng
console.log("Total:", cart.getTotal());
