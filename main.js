let num1 = "";
let num2 = "";
let operation = "";

const output = document.querySelector(".result")
output.innerHTML = "0";

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
    if (operation == "") {
        num1 += number.toString()
        console.log(num1)
    }
    else if (operation != "") {
        num2 += number.toString()
        console.log(num2)
    }

}

function clear(result) {
    num1 = result
    num2 = ""
    operation = ""
    console.log(num1)
}

function applyOperation() {
    if (num1 != "" && num2 != "" && operation != "") {
        if (operation == "+") {
            output.innerHTML = add(+num1,+num2)
            clear(output.innerHTML)
        }
        else if (operation == "-") {
            output.innerHTML = subtract(+num1,+num2)
            clear(output.innerHTML)
        }
        else if (operation == "*") {
            output.innerHTML = multiply(+num1,+num2)
            clear(output.innerHTML)
        }
        else if (operation == "/") {
            output.innerHTML = divide(+num1,+num2)
            clear(output.innerHTML)
        }
    }
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

    const plus = document.querySelector("#plus")
    plus.addEventListener("click", () => {
        operation = "+"
    })

    const minus = document.querySelector("#minus")
    minus.addEventListener("click", () => {
        operation = "-"
    })

    const multiply = document.querySelector("#multiply")
    multiply.addEventListener("click", () => {
        operation = "*"
    })

    const divide = document.querySelector("#divide")
    divide.addEventListener("click", () => {
        operation = "/"
    })

    const equal = document.querySelector("#eql")
    equal.addEventListener("click", () => {
        applyOperation()
    })

    const clr = document.querySelector("#clr")
    clr.addEventListener("click", () => {
        num1 = ""
        num2 = ""
        operation = ""
        output.innerHTML = "0";
    })
}


inputs()