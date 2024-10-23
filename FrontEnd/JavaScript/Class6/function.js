// Write a function to print your name 
// let myName = "Bhagyalaxmi";
// function printName(){
//     console.log(`My name is ${myName}`); 
// }

// printName();



// function myName(name,age,city){
//     console.log(`My name is ${name}`);
//     console.log(`My name is ${age}`);
//     console.log(`My name is ${city}`);
// }

// myName("Bikash",21,"Balasore");






// Return Statement
// function returnName(name,age,city){
//     return `My name is ${name}, now i am ${age} years old, and i live in ${city}`;
// }

// let output = returnName("Bikash",21,"Balasore");
// console.log(output);





// Arrow function
// console.log(printName("Bikash")); //Before    // ReferenceError

const printName = (name) => {
    return `My name is ${name}`;
}
console.log(printName("Bikash"));  //After
