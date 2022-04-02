const buttons = document.querySelectorAll(".calculator_btn");
const resultDisplay = document.getElementById("result");
const calcArray = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let joinedSum = "";
    let buttonPress = event.target.value;
    console.log(event.target.value);

    if (buttonPress !== "=") {
      calcArray.push(buttonPress);
      resultDisplay.value = calcArray.join("");
    } else {
      joinedSum = calcArray.join("");
      resultDisplay.value = eval(joinedSum).toFixed(4);

      console.log(eval(joinedSum));
    }
    console.log(calcArray);
  });
});
