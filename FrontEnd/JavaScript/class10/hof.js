//forEach
//let arr = ["bhagya", "laxmi", "jinu", "madam ji", "janu"];
let arr = ["A", "B", "C"];
// arr.forEach((element, index) => {
//     console.log(`value at ${index} is ${element}`);
// });
//map
// let newArr = arr.map((e) => {
//     return e.toLowerCase();
// });
// console.log(newArr);
// let newArr1 = arr.forEach((e) => {
//     return e.toLowerCase();
// });
// console.log(newArr1);// output undefine -> as forEach don't return a new arr
//filter
let numArr = [1, 2, 3, 4, 5];
let map = numArr.map((e) => (e % 2 !== 0 ? e : null));
console.log(map);
let odd = numArr.filter((e) => e % 2 !== 0);
console.log(odd);
let student1 = {
    "name" : "bikash",
    1 : 2305274024,
    "city" : "balasore",
    "prop" : "bhala pila"
}
console.log(student1[1], student1["name"], student1["city"],student1["prop"]);
let student2 = {
    "name" : "pagili janu",
    1: 2305274023,
    "city" : "sarathipara",
    "prop" : "dusta pila"
}
console.log(student2[1], student2["name"], student2["city"], student2["prop"]);
const student = ["bhagyalaxmi", 2305274024, 21, "mca"];
student.push("sarathipur");
console.log(student);
const num = 78;
let studyPlace = new Object();
studyPlace.school = new Object();
studyPlace.school.name = "sc high school";
studyPlace.school.place = "debhog";
studyPlace.college = {};
studyPlace.college.name = "jsrc";
studyPlace.college.place = "balasore";
console.log(studyPlace);
console.log(studyPlace.school);
console.log(studyPlace.college);
console.log(studyPlace["college"]);