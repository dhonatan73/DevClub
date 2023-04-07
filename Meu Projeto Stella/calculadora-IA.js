let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        expression = result.toString();
        display.value = expression;
    } catch (error) {
        clear

    }}