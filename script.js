// script.js
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        compute();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
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
    currentNumber = result;
    operation = null;
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentNumber || '0';
}