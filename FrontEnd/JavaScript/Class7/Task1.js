// Simple Calculator using function and swith statement
const calculator = (operation,num1,num2) => {
  switch (operation){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
            
        default:
            return "Invalid operation";
            break;    
  }
};

const output = calculator ("+",5,9);
console.log(output);
