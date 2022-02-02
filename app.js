const allBtn = document.querySelectorAll(".button");
const display = document.getElementById("display");

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y != 0) {
    return x / y;
  } else {
    console.warn("Dont divide by 0");
  }
}

let firstValue = undefined;
let secondValue = undefined;
let operator = undefined;
let operatedValue = undefined;

function setFirstVal(value) {
  if (firstValue == undefined) {
    firstValue = value;
  } else {
    firstValue += value;
  }
  display.value += value;
  console.log("first value: " + firstValue);
}

function setSecondVal(value) {
  if (secondValue == undefined) {
    secondValue = value;
  } else {
    secondValue += value;
  }
  display.value += value;
  console.log("second value: " + secondValue);
}

function reset() {
  firstValue = undefined;
  secondValue = undefined;
  operator = undefined;
  display.value = "";
}

function setOperatorVal(value) {
  if (operator != undefined && secondValue == undefined) {
    if (value == "-") {
      setSecondVal(value);
    }
  } else if (firstValue == undefined && operator == undefined) {
    if (value == "-") {
      setFirstVal(value);
    }
  } else if (operator == undefined) {
    operator = value;
    display.value += operator;
    console.log("operator: " + operator);
  } else {
    if (operator == "+") {
      firstValue = parseInt(firstValue) + parseInt(secondValue);
      console.log(`firstValue: ${firstValue}`);
    } else if (operator == "-") {
      firstValue = parseInt(firstValue) - parseInt(secondValue);
      console.log(`firstValue: ${firstValue}`);
    } else if (operator == "/") {
      firstValue = parseInt(firstValue) / parseInt(secondValue);
      console.log(`firstValue: ${firstValue}`);
    } else if (operator == "*") {
      firstValue = parseInt(firstValue) * parseInt(secondValue);
      console.log(`firstValue: ${firstValue}`);
    }

    if (value != "=") {
      display.value += operator;
      operator = value;
    } else {
      display.value = firstValue;
    }
  }
}

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", (e) => {
    if (allBtn[i].id == "clear") {
      reset();
    } else if (allBtn[i].id == "operator") {
      setOperatorVal(allBtn[i].innerHTML);
    } else if (allBtn[i].id == "equals") {
      setOperatorVal(allBtn[i].innerHTML);
    } else {
      if (operator == undefined) {
        setFirstVal(allBtn[i].innerHTML);
      } else {
        setSecondVal(allBtn[i].innerHTML);
      }
    }
  });
}
