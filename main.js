let myinput = document.querySelector("input");
let myResult = document.getElementsByClassName("result")[0];

myinput.oninput = function(){
    myResult.innerHTML = `${myinput.value} United States Dollar = ${(myinput.value*47.2).toFixed(2)} Egyptian Pound`
}