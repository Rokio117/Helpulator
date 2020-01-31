function handleEquationClick(e) {
  console.log("handleEquationClick ran");
  let clicked = false;
  let displayEquation = ["0"];

  $("#display").text(displayEquation);

  $(".numberButton").click(e => {
    e.preventDefault();
    if (clicked === false) {
      displayEquation = [];
      clicked = true;
    }
    displayEquation.push(e.target.value);
    let newDisplay = displayEquation.join("");

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

$(handleErase);
$(handleEquationClick);
