// Concat 
/*let fruits = ["Mango","Apple"];
fruits = fruits.concat(["strwaberry","dragon-fruit"]);
console.log(fruits);*/



// Includes()
/*let students = ["Bikash","Bhagya","Banita","Priya","Ansu","Abhi"];
console.log(students.includes("Shushree"));
console.log(students.includes("Bhagya"));*/


// Slice()
// const animals = ["Bikash","Banita","Ansu","Priya","Malla"];
// animals = animals.slice(2);
// console.log(animals);
// animals.slice(2,4)
// console.log(animals);


// Splice()
/*const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(2,2,"May");
console.log(months);
months.splice(2,0,"May");
console.log(months);
months.splice(3,2,"Dec");
console.log(months);
months.splice(2,2,"Nov","Dec");  
console.log(months);
months.splice(0,2,"May");
console.log(months);*/
const arr2 = [1,2,3,4,5];
console.log(arr2);

for(let i = 0; i < arr2.length; i++) {
    //const double = arr2[i] * 2;
    arr2[i] = arr2[i] * 2;
}
console.log(arr2);
arr2.forEach((value) => {
    console.log(value * 2);
})
console.log(arr2);







