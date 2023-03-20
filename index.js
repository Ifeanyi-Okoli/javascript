const ccValidation = (ccNumber) => {
  // Your code here
  const length = ccNumber.length;
  let count = 0;

    for (let i = 0; i < length; i++) {
        let currentDigit = parseInt(ccNumber[i]);
        if ((i+2) % 2 === 0) 
            if((currentDigit *= 2) > 9) 
                currentDigit -= 9;
        
        count += currentDigit;
    }
    return count % 10 === 0;
}

const checkCC = () => {
  const elCCNumber = document.getElementById('ccNumber');
    const elCCValidation = document.getElementById('ccValidator');
    let message = "";

    if (ccValidation(elCCNumber.value)) {
        message = "Valid";
    } else {
        message = "Invalid";
    }
    elCCValidation.textContent = message;
}