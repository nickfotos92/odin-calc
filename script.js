function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {

    if (num2 === 0) {
        console.log("Divide by 0 error")
        return 0;
    } else {
        return (num1 / num2);
    }
}

function operate(num1, num2, type) {

    validOperators = ["add", "subtract", "multiply", "divide"];

    if (type.toLowerCase() === "add") {
        return Math.round(add(num1, num2) * 100) / 100;
    } if (type.toLowerCase() === "subtract") {
        return Math.round(subtract(num1, num2) * 100) / 100;
    } if (type.toLowerCase() === "multiply") {
        return Math.round(multiply(num1, num2) * 100) / 100;
    } if (type.toLowerCase() === "divide") {
        return Math.round(divide(num1, num2) * 100) / 100;
    }
}

let displayNumber = 0;

let currentValue = 0;
let savedValue = 0;
let operator = "";

const body = document.querySelector('body')
const numberButtons = body.getElementsByClassName('number')
const operatorFunctions = body.getElementsByClassName('operator')
const clearButton = body.querySelector("#clear")
const display = body.querySelector("#display")


Array.from(numberButtons).forEach(number => {
    number.addEventListener('click', function () {
        display.textContent += number.textContent;
        currentValue = display.textContent
    })
})

Array.from(operatorFunctions).forEach(item => {
    item.addEventListener('click', function () {

        if (operator != '') {
            savedValue = operate(parseFloat(savedValue), parseFloat(currentValue), operator);
        } else {
            savedValue = currentValue;
        }

        operator = item.id;


        if (operator === "equal") {
            operator = ""
            display.textContent = savedValue;
        }
        else {
            display.textContent = '';
        }
    })
})


clearButton.addEventListener('click', function () {
    display.textContent = '';
    operator = '';
    currentValue = '';
    savedValue = '';
})