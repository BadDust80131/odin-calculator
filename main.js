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

function buttonLogic(number) {
    console.log(number)
}


function inputs(){
    const one = document.querySelector("#one")
    one.addEventListener("click", () => {
        buttonLogic(1)
    })

    const two = document.querySelector("#two")
    two.addEventListener("click", () => {
        buttonLogic(2)
    })

    const three = document.querySelector("#three")
    three.addEventListener("click", () => {
        buttonLogic(3)
    })

    const four = document.querySelector("#four")
    four.addEventListener("click", () => {
        buttonLogic(4)
    })

    const five = document.querySelector("#five")
    five.addEventListener("click", () => {
        buttonLogic(5)
    })

    const six = document.querySelector("#six")
    six.addEventListener("click", () => {
        buttonLogic(6)
    })

    const seven = document.querySelector("#seven")
    seven.addEventListener("click", () => {
        buttonLogic(7)
    })

    const eight = document.querySelector("#eight")
    eight.addEventListener("click", () => {
        buttonLogic(8)
    })

    const nine = document.querySelector("#nine")
    nine.addEventListener("click", () => {
        buttonLogic(9)
    })

    const zero = document.querySelector("#zero")
    zero.addEventListener("click", () => {
        buttonLogic(0)
    })
}


inputs()