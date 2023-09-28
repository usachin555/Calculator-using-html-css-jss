let number = document.getElementsByClassName("data-number");
let operator = document.getElementsByClassName("data-operation");
let clearScreen = document.getElementsByClassName("data-all-clear")[0];
let deleteButton = document.getElementsByClassName("data-delete")[0];
let result = document.getElementsByClassName("data-equals")[0];
// let previousOperandTextElement = document.getElementsByClassName("data-previous-operand")[0];
let currentOperandTextElement = document.getElementsByClassName("current-operand")[0];
var resultDisplayed = false;
// console.log(operation)

const appendString = (val) => {
    console.log(val)
    let inputString = currentOperandTextElement.innerHTML
    // inputString += val
    // console.log(inputString);

    var lastChar = inputString[inputString.length - 1];
    if(resultDisplayed === false)
    {
        inputString += val;
    currentOperandTextElement.innerHTML = inputString
    }
    else if (resultDisplayed === true && lastChar === "+" || lastChar === "*" || lastChar === "/" || lastChar === "-")
    {
        resultDisplayed = false;
        inputString += val; 
    currentOperandTextElement.innerHTML = inputString

    }
    else
    {
        resultDisplayed = false;
        inputString = "";
        inputString += val;
    currentOperandTextElement.innerHTML = inputString

    }
}   

const appendOperator = (x) => {
        console.log(x)
        let inputString = currentOperandTextElement.innerHTML
        // inputString += x
        // console.log(inputString);
    var lastChar = inputString[inputString.length - 1];

        if(lastChar === "+" || lastChar === "*" || lastChar === "/" || lastChar === "-")
    {
        var newString = inputString.subtring(0, inputString.length - 1) + x;
        currentOperandTextElement.innerHTML = newString;
    }else if(inputString.length == 0)
    {
        console.log("number enter you");
    }
    else{
        currentOperandTextElement.innerHTML += x;
    }
}

result.addEventListener("click", function() {

    var inputString = currentOperandTextElement.innerHTML;
    var numbers = inputString.split(/\+|\-|\*|\÷|/g);
    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);

    var divide = operators.indexOf("/");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("/");
        console.log(operators);
    console.log(numbers);
    }

    var multiply = operators.indexOf("*");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("*");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
        console.log(operators);
    console.log(numbers);
    }

    currentOperandTextElement.innerHTML = numbers[0];

    resultDisplayed = true; 
});

    deleteButton = () => {
        console.log("delete clicked")
        let inputString = currentOperandTextElement.innerHTML; 
        var lastChar = inputString[inputString.length - 1];
        if(lastChar === number ||  "+" || lastChar === "*" || lastChar === "/" || lastChar === "-")
        {
            currentOperandTextElement.innerHTML = "";
        }
    }


//    let inputString = allClear.innerHTML;
//    allClear.addEventListener("click", () =>
//    {
//     currentOperandTextElement.innerHTML = ""; 
//    })

        clearScreen = () =>{
        console.log("clear clicked")
       currentOperandTextElement.innerHTML = "";
    }

    