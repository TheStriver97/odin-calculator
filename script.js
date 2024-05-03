function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLast() {
    let display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementsByName('display')[0].value += value;
}

function calculate() {
    let expression = document.getElementsByName('display')[0].value;
    let result = evaluateExpression(expression);
    document.getElementsByName('display')[0].value = result;
}

function evaluateExpression(expression) {
    try {
        return Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}
