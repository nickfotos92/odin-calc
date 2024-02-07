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
    return num1 / num2;
}

function operate(num1, num2, type) {

    validOperators = ["add", "subtract", "multiply", "divide"];

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "Please provide valid numbers";
    } if (!validOperators.includes(type.toLowerCase())) {
        return "Please provide a valid operator";
    }

    if (type.toLowerCase() === "add") {
        return add(num1, num2);
    } if (type.toLowerCase() === "subtract") {
        return subtract(num1, num2);
    } if (type.toLowerCase() === "multiply") {
        return multiply(num1, num2);
    } if (type.toLower() === "divide") {
        return divide(num1, num2);
    }
}

let displayNumber = 0;

let currentValue = 0;
let savedValue = 0;
let operator = "";

const body = document.querySelector('body')
const numberButtons = body.getElementsByClassName('number')
const operatorFunctions = body.getElementsByClassName('operator')
const display = body.querySelector("#display")


Array.from(numberButtons).forEach(number => {
    number.addEventListener('click', function () {
        display.textContent += number.textContent;
        currentValue = display.textContent
    })
})

Array.from(operatorFunctions).forEach(item => {
    item.addEventListener('click', function () {

        if (operator) { // Is there already a pending operator?
            savedValue = operate(parseInt(savedValue), parseInt(currentValue), operator);
        } else { // first time
            savedValue = currentValue;
        }
        console.log(savedValue)
        operator = item.id; // remember the new operator

        console.log(operator)

        if (operator === "equal") {
            operator = ""
            display.textContent = savedValue;
        }
        else {
            display.textContent = '';
        }


        // display.textContent = savedValue;

        // Array.from(numberButtons).forEach(number => {
        //     number.addEventListener('click', function () {
        //         // display.textContent = '';
        //         newDisplayNumber = number.textContent;
        //         display.textContent = display.textContent + newDisplayNumber;
        //     })
        // })
    })
})


// console.log(num2)

// console.log(operators)
