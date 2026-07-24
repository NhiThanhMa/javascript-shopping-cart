import {validateProduct} from './validation.js';

export default class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        try {
            validateProduct(product);
            this.products.push(product);
        } catch (error) {
            console.error(`Failed to add product: ${error.message}`);
        }
    }

    getSubtotal() {
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    calculateDiscount(discountPercentage) {
        return this.getSubtotal() * (discountPercentage / 100);
    }

    calculateTax(afterDiscount, taxPercentage) {
        return afterDiscount * (taxPercentage / 100);
    }

    getBill(discountPercentage, taxPercentage) {
        const subtotal = this.getSubtotal();
        const discount = this.calculateDiscount(discountPercentage);
        const afterDiscount = subtotal - discount;
        const tax = this.calculateTax(afterDiscount, taxPercentage);
        const total = afterDiscount + tax;

        return {
            subtotal,
            discount,
            tax,
            total
        };
    }
}