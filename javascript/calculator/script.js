const resultDisplay = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = null;
let displayString = '';

const updateDisplay = (value) => (resultDisplay.textContent = value || '0');

const calculate = () => {
    if (!previousInput || !operator || !currentInput) return;
    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '÷': (a, b) => a / b,
    };
    const result = operations[operator](a, b);
    currentInput = result.toString();
    operator = previousInput = '';
    displayString = currentInput;
    updateDisplay(displayString);
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (button.classList.contains('num')) {
            if (value === ',' && currentInput.includes('.')) return;
            currentInput += value === ',' ? '.' : value;
            displayString += value;
        } else if (button.classList.contains('operator')) {
            if (value === '=') {
                calculate();
            } else if (currentInput) {
                if (previousInput && operator) calculate();
                operator = value;
                previousInput = currentInput;
                currentInput = '';
                displayString += ` ${value} `;
            }
        } else if (value === 'AC') {
            currentInput = previousInput = operator = displayString = '';
        } else if (value === '+/-') {
            currentInput = currentInput ? (-parseFloat(currentInput)).toString() : '';
            displayString = currentInput;
        } else if (value === '%') {
            currentInput = currentInput ? (parseFloat(currentInput) / 100).toString() : '';
            displayString = currentInput;
        }
        updateDisplay(displayString || previousInput);
    });
});
