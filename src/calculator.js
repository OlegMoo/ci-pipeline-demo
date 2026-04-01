function add(a, b) {
    return a + b;
}

function subtract(a, b) {
        return a - b;
    }
        
function multiply(a, b) {
    return a * b;
}
        
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Invalid input');
    }
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

function power(a, b) {
    return a ** b;
}

function mod(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a % b;
}

module.exports = { add, subtract, multiply, divide, power, mod };
