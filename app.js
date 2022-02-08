const allBtn = document.querySelectorAll(".button");
const display = document.getElementById("display");

function add(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return Math.round((x / y) * 100) / 100;
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
  } else if (operator == undefined && value != "=") {
    operator = value;
    display.value += operator;
    console.log("operator: " + operator);
  } else if (operator != undefined) {
    if (operator == "+") {
      firstValue = add(Number(firstValue), Number(secondValue));
      secondValue = undefined;
      console.log(`firstValue: ${firstValue}`);
    } else if (operator == "-") {
      firstValue = substract(Number(firstValue), Number(secondValue));
      secondValue = undefined;
      console.log(`firstValue: ${firstValue}`);
    } else if (operator == "/") {
      if (secondValue == 0) {
        alert("Cannot divide with 0");
      } else {
        firstValue = divide(Number(firstValue), Number(secondValue));
        secondValue = undefined;
        console.log(`firstValue: ${firstValue}`);
      }
    } else if (operator == "*") {
      firstValue = multiply(Number(firstValue), Number(secondValue));
      secondValue = undefined;
      console.log(`firstValue: ${firstValue}`);
    }

    if (value != "=") {
      display.value = firstValue;
      display.value += value;
      operator = value;
    } else {
      display.value = firstValue;
      operator = undefined;
    }
  }
}

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", (e) => {
    if (allBtn[i].id == "clear") {
      reset();
    } else if (allBtn[i].id == "delete") {
      display.value = display.value.toString().slice(0, -1);
      if (operator == undefined) {
      }
    } else if (allBtn[i].id == "operator") {
      setOperatorVal(allBtn[i].innerHTML);
    } else if (allBtn[i].id == "equals") {
      setOperatorVal(allBtn[i].innerHTML);
    } else if (allBtn[i].id == "point") {
      if (operator == undefined) {
        if (firstValue == undefined) {
          setFirstVal("0.");
        } else if (!firstValue.includes(".")) {
          setFirstVal(".");
        }
      } else {
        if (secondValue == undefined) {
          setSecondVal("0.");
        } else if (!secondValue.includes(".")) {
          setSecondVal(".");
        }
      }
    } else {
      if (operator == undefined) {
        setFirstVal(allBtn[i].innerHTML);
      } else {
        setSecondVal(allBtn[i].innerHTML);
      }
    }
  });
}
