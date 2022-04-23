const calkulator = {
    displayNumber: '0'
    _operator: null,
    get operator() {
        return this._operator;
    },
    set operator(value) {
        this._operator = value;
    },
    firstNumber:null,
    waitingForSeconNumber: false
};
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
function clearCalculator() {
    calculator.displayNumber='0';
    calculator.operator=null;
    calculator.firstNumber=null;
    calculator.waitingForSeconNumber= false;
}
function inputDigit(digit) {
if (calculator.displayNumber == '0') {
    calculator.displayNumber = digit;
} else {
    calculator.displayNumber += digit;
    }
}
function inverseNumber() {
    if(calculator.displayNumber === '0'{
        return;
}
calculator.displayNumber = calculator.displayNumber * -1;
}
function handleOperator(operator) {
    if(!calculator.waitingForSeconNumber) {
        calculator.operator =operator;
        calculator.waitingForSeconNumber =true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('operator sudah ditetapkan')
    } 
}
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return
    }
    let result = 0;
    if(calculator.operator ==="+") {
        result = parseInt(calculator.firstNumber) +
        parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) -
        parseInt(calculator.displayNumber)
    }
    calculator.displayNumber = result;
}
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        inverseNumber();
        updateDisplay();
        return;
    }
    if (Target.classList.contains('negative')) {
        inverseNumber();
        updateDisplay();
        return
    }
    if (target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.innerText)
        return;
    }
    inputDigit(target.innerText);
    updateDisplay()
});
}