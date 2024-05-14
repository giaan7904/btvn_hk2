//cách 1
const carts = [
  {
    product_name: "Cam",
    price: 20000,
    quantity: 5,
  },
  {
    product_name: "Táo",
    price: 30000,
    quantity: 3,
  },
  {
    product_name: "Xoài",
    price: 40000,
    quantity: 2,
  },
];

function totalPrice(carts) {
  return carts.reduce((total, cart) => total + cart.price * cart.quantity, 0);
}

console.log(totalPrice(carts)); 
//cách 2
const cart = [
  {
    product_name: "Cam",
    price: 20000,
    quantity: 5,
  },
  {
    product_name: "Táo",
    price: 30000,
    quantity: 3,
  },
  {
    product_name: "Xoài",
    price: 40000,
    quantity: 2,
  },
];

function totalPrice(carts) {
  let total = 0;
  carts.forEach(cart => {
    total += cart.price * cart.quantity;
  });
  return total;
}

console.log(totalPrice(cart)); 

