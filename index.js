//document.getElementById("count-el").innerText = 5;

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl =  document.getElementById("save-el");
function increment (){
    count += 1
    countEl.innerText = count;
    console.log(count)
}

increment;

function save(){
    let res = count + " " + "- ";
    saveEl.textContent += res;    
    countEl.innerText = 0;
    count = 0;
}
save();