let clicked = false;
let displayEquation = ["0"];
let equationNumbers = [];
let operations = [];
function handleEquationClick() {
  if (clicked === false) {
    $("#display").text("0");
  }

  $(".numberButton").click(e => {
    e.preventDefault();
    if (clicked === false) {
      displayEquation = [];
      clicked = true;
    }

    displayEquation.push(e.target.value);
    let newDisplay = displayEquation.join("");
    equationNumbers.push();

    $("#display").text(newDisplay);
  });
}

function handleErase() {
  $("#erase").click(e => {
    e.preventDefault();
    clicked = false;
    displayEquation = ["0"];
    $("#display").text(displayEquation);
  });
}

function handleOperationClick() {
  $(".operationButton").click(e => {
    e.preventDefault();
    operations.push(formatOperation(e.target.value));
    console.log(operations);
    let newDisplay = [displayEquation.join(""), e.target.value].join(" ");
    $("#display").text(newDisplay);
  });
}

function formatOperation(operation) {
  if (operation === "÷") {
    return "/";
  }
  if (operation === "×") {
    return "*";
  }
  if (operation === "-") {
    return "-";
  } else {
    return "+";
  }
}
$(handleOperationClick);
$(handleErase);
$(handleEquationClick);
