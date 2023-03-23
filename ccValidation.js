const luhnAlgorithm = (ccNumber) => {
  const length = ccNumber.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    let currentDigit = parseInt(ccNumber[i]);
    if ((i + 2) % 2 == 0) {
      if ((currentDigit *= 2) > 9) currentDigit -= 9;
    }
    count += currentDigit;
  }
  return count % 10 === 0;
};

const checkCC = () => {
  const elCCNumber = document.getElementById("cardNumber");
  const elCCValidation = document.getElementById("ccValidator");
  let ccBtn = document.getElementById("btn");
  let message = "";
  if (elCCNumber.value === "" || elCCNumber.value === null) {
    elCCNumber.style = "border-color: red;";
    alert("Please enter your Credit Card Number");
    message = "Credit Card Number required";
  } else if (elCCNumber.value.length !== 16) {
    elCCNumber.style = "border-color: red;";
    alert("Your Credit Card Number must be 16 digits");
    message = "Please check your card number and enter again";
  } else if (luhnAlgorithm(elCCNumber.value)) {
    message = "It is valid";
    alert("Congratulations!!! It is valid");
    elCCNumber.style = "border-color: green;";
    ccBtn.style = "background-color: green;";
  } else {
    message = "Invalid";
    alert("oops! Invalid!");
    elCCNumber.style = "border-color: red;";
    ccBtn.style = "background-color: red;";
  }
  elCCValidation.textContent = message;
};
