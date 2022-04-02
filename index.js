const buttons = document.querySelectorAll(".calculator_btn");
const resultDisplay = document.querySelector("#result").innerHTML;
const calcArray = [];
document.querySelector("#result").innerHTML = "hello";
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let joinedSum = "";
    let buttonPress = event.target.value;
    console.log(event.target.value);

    if (buttonPress !== "=") {
      calcArray.push(buttonPress);
    } else {
      joinedSum = calcArray.join("");
      document.querySelector("#result").innerHTML = eval(joinedSum);

      console.log(eval(joinedSum));
    }
    console.log(calcArray);
  });
});
