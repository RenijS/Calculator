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

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", (e) => {
    if (allBtn[i].id == "clear") {
      display.value = "";
    } else {
      console.log(allBtn[i].innerHTML);
      display.value += allBtn[i].innerHTML;
    }
  });
}
