let currentOperand = '0'; 
let previousOperand = '';
let currentOperator = null;

const display = document.getElementById('display');

function press(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0') {
        currentOperand = '';  
    }
    currentOperand += number.toString();
    updateDisplay();
}

function setOP(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    currentOperator = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    if (previousOperand === '' || currentOperand === '') return;
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    previousOperand = '';
    currentOperator = null;
    updateDisplay();
}

function clr() {
    currentOperand = '0'; 
    previousOperand = '';
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand;
}

updateDisplay();
