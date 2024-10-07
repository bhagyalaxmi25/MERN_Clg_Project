// Declare the product price
let productPrice = 800;

// Declare the sales tax rate 
let salesTaxRate = 8;

// Calculate the tax amount
let taxAmount = (productPrice * salesTaxRate) / 100;

// The total price
let totalPrice = productPrice + taxAmount;


console.log(`The total price after adding sales tax is: ${totalPrice}`);
