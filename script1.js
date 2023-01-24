const display1Elm = document.querySelector(".display1");
const display2Elm = document.querySelector(".display2");
const temElm = document.querySelector(".temp-result");
const allClear = document.querySelector(".btn-ac");
const clear = document.querySelector("btn-c");
const equal = document.querySelector(".equal");
const num = document.querySelectorAll(".number");
const oper= document.querySelectorAll(".operation");

let display2con = "";
let haveDot = false;
let result = "";
let lastOperation;

num.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }

    display2con += e.target.innerText;
    display2Elm.innerText = display2con;
  });
});

allClear.addEventListener("click", (e) => {
  display1Elm.innerText = "all cleared";
  display2Elm.innerText = "all cleared";
  temElm.innerText = "all cleared";
  display1 = "";
  display2 = "";
  result = "";
});
clear.addEventListener("click", (e) => {
  display2Elm.innerText = "";
  display2 = "";
});

oper.addEventListener("click",(e) => {
  if (!display2) {
    return;
  } else {
    operationName = e.target.innerText();

    if (display1 && display2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(display2);
    }
    clearVal(operationName);
    lastOperation = operationName;
  }
});
const clearVal = (name = " ") => {
  display1 += display2 + " " + name + "";
  display1Elm.innerText = display1;
  display2Elm.innerText = "";
  display2 = "";
  temElm.innerText = result;
};
const mathOperation = () => {
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(display2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(display2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(display2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(display2);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(display2);
  }
};
equal.addEventListener("click",(e)=>{
  if(!display1||!display2)
  returnhaveDot=false
  mathOperation()
  clearVal()
  display2Elm.innerText=result
  tempResult.innerText=""
  
})
