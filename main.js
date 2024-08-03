let num1 = 0;
let num2 = 0;
let operation;

function add(x,y) {
    return x + y;
} 
function subtract(x,y) {
    return x - y;
} 
function multiply(x,y) {
    return x * y;
} 
function divide(x,y) {
    return Math.round(x / y);
} 

function operate(val1,val2,oper) {
    if (oper == "+") {
        return val1 + val2;
    }
    else if (oper == "-") {
        return val1 - val2;
    }
    else if (oper == "*") {
        return val1 * val2;
    }
    else if (oper == "/") {
        return Math.round(val1 / val2);
    }
}
