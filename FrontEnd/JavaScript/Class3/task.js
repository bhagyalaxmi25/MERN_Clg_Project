
// Task 1:
// Given total_bill, discount_start_price if you satisfy the condition Print discount

let total_bill = 8999;

if(total_bill >= 4999){
    let discount_start_price = total_bill * (20/100);
    console.log(total_bill - discount_start_price);
}



// Task 2:
// Check if (male) and then check (22+) then he can able to marry

let gender = "male";
let age = 22;
if (gender === "male"){
    if(age >= 22){
        console.log("He can able to Marry");
    }else{
        console.log("He can not able to Marry");
    }
}




// Task 3:

let a = 80;
if(a >= 60){
    console.log("Senior Citizen");
    
}else if(a >= 18){
    console.log("Adult");
    
}else {
    console.log("Minor");
}


