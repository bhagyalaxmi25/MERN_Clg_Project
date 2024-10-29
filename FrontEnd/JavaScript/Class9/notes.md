# Array Concatination

let fruits = ["Mango","Apple"];
fruits = fruits.concat(["strwaberry","dragon-fruit"]);
console.log(fruits);    //[ 'Mango', 'Apple', 'strwaberry', 'dragon-fruit' ]



# The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let students = ["Bikash","Bhagya","Banita","Priya","Ansu","Abhi"];
console.log(students.includes("Shushree"));  //false
console.log(students.includes("Bhagya"));   //true


# The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.




# The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(2,2,"Nov","Dec");    // 2 index ru start heiki tapare 2 ta ku katiba auu seijagare Nov & Dec add haba
console.log(months);

Output :- [ 'Jan', 'March', 'Nov', 'Dec' ]

months.splice(0,2,"May");     // 0 index ru start heiki 2 ta ku delete karib auu sejagare May add kariba
console.log(months);

Output :- [ 'May', 'April', 'June' ]



