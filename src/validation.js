export function validateProduct(product) {
    if (!product.name || product.name.trim() === '') {
        throw new Error('Product name is required.');
    }

    if (typeof product.price !== 'number' || Number.isNaN(product.price)){
        throw new Error('Product price must be a valid number.');
    }

    if (typeof product.quantity !== 'number' || Number.isNaN(product.quantity)) {
        throw new Error('Product quantity must be a valid number.');
    }

    if (product.price <= 0) {
        throw new Error('Product price must be greater than zero.');
    }

    if (!Number.isInteger(product.quantity) || product.quantity <= 0) {
        throw new Error('Product quantity must be a positive integer.');
    }

}