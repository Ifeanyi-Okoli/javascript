function credit_card(num){
    let res = "";
    let odd = 0;
    let sum = 0;
    let nums = num.toString();
    let a = nums.length-1;
    for(let i = a; i >= 0; i--){
        let b = parseInt((nums[i]));
        if(i%2===0){
            b = b*b;
            if (b >=10){
                b= b.toString();
                let c = parseInt(b[0]) + parseInt(b[1]);
                if(c>=10){
                    c=c.toString();
                    let d = parseInt(c[0]) + parseInt(c[1]);
                    res=res+d;
                }
                else res=res+c
            }
            else res = res + b;
        }
        else odd = odd + parseInt(b);
    }
    for(let i = 0; i < res.length; i++){
        sum += parseInt(res[i]);
    }
    let tot = sum + odd;
    if(tot%10 === 0) return true;
    else return false;
}



/*
Validation of CC
*/

const checkCC = ( )=>{
    const ccNumber = document.getElementById("cardNumber");
    const ccValidation = document.getElementById("ccValidator");
    const ccBtn = document.getElementById("btn")
    let message = "";

    if(credit_card(ccNumber.value)){
        message = "Your CC is valid!";
        ccNumber.style = "border-color: green;";
        ccBtn.style = "background-color: green";
    }
        
    else{
        message = "Your CC is invalid  :(";
        ccNumber.style = "border-color: red;";
        ccBtn.style = "background-color: red";
    }
        
    
        ccValidation.textContent = message;
};