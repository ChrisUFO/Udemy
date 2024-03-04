let currentResult = 0;
let logEntries =[];

function getUserNumberInput(){
    return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber, result){
    const calcDesc = `${resultBeforeCalc} ${operator} ${calcNumber} = ${result}`;
    writeToLog(operator, resultBeforeCalc, calcNumber, result, calcDesc);
}

function writeToLog(operator, resultBeforeCalc, calcNumber, result, calcDesc){
    const logEntry = {
        operator: operator,
        prevResult: resultBeforeCalc,
        number: calcNumber,
        result: result,
        calcDesc: calcDesc
    };
    logEntries.push(logEntry);
    outputResult(currentResult, calcDesc);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber, currentResult)  
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);