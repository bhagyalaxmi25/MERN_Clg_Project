// Make calculator using callback function

const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const div = (a,b) => a / b;

let calculate = (num1,num2,callback) => callback (num1,num2);
console.log(calculate(5,8,mul));

