import Product from "../src/product.js";
import ShoppingCart from "../src/cart.js";

function scenario1() {
    console.log("\n===== Scenario 1: Normal Purchase =====");

    const cart = new ShoppingCart();

    cart.addProduct(new Product("Apple", 5, 3));
    cart.addProduct(new Product("Milk", 8, 2));

    const bill = cart.getBill(10, 8);

    console.log(`Subtotal: $${bill.subtotal.toFixed(2)}`);
    console.log(`Discount: $${bill.discount.toFixed(2)}`);
    console.log(`Tax: $${bill.tax.toFixed(2)}`);
    console.log(`Total: $${bill.total.toFixed(2)}`);
}

function scenario2() {
    console.log("\n===== Scenario 2: No Discount =====");

    const cart = new ShoppingCart();

    cart.addProduct(new Product("Laptop", 1000, 1));

    const bill = cart.getBill(0, 8);

    console.log(`Subtotal: $${bill.subtotal.toFixed(2)}`);
    console.log(`Discount: $${bill.discount.toFixed(2)}`);
    console.log(`Tax: $${bill.tax.toFixed(2)}`);
    console.log(`Total: $${bill.total.toFixed(2)}`);
}

function scenario3() {
    console.log("\n===== Scenario 3: Invalid Product =====");

    const cart = new ShoppingCart();

    try {
        cart.addProduct(new Product("", -5, 0));
    } catch (error) {
        console.log("Error:", error.message);
    }
}

scenario1();
scenario2();
scenario3();