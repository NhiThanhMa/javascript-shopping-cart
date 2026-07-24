import Product from "./product.js";
import ShoppingCart from "./cart.js";

const cart = new ShoppingCart();

cart.addProduct(new Product("Apple", 5, 3));
cart.addProduct(new Product("Milk", 8, 2));
cart.addProduct(new Product("Keyboard", 30, 1));

const discountPercentage = 10; // 10% discount
const taxPercentage = 5; // 5% tax

const bill = cart.getBill(discountPercentage, taxPercentage);

console.log("===== Shopping Cart =====");
console.log(`Subtotal: $${bill.subtotal.toFixed(2)}`);
console.log(`Discount: $${bill.discount.toFixed(2)}`);
console.log(`Tax: $${bill.tax.toFixed(2)}`);
console.log(`Total: $${bill.total.toFixed(2)}`);