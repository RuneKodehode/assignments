let dice20 = null;
let dice202 = null;
let d12 = null;
let d6 = null;
let result1 = document.getElementById("wtf1");
let result2 = document.getElementById("wtf2");
let result3 = document.getElementById("wtf3");
let result4 = document.getElementById("wtf4");
let result5 = document.getElementById("wtf5");

function d20roll() {
    dice20 = Math.floor(Math.random() * 20) + 1;  
    console.log(dice20)
    result1.textContent = dice20
}
 
function advantage() {
    dice20 = Math.floor(Math.random() * 20) + 1;
    dice202 = Math.floor(Math.random() * 20) + 1;  
    console.log([dice20] + " " + [dice202])
    if (dice20 > dice202){
        result2.textContent = dice20
    } else {
    result2.textContent = dice202
    }
   }
   
function disadvantage() {
    dice20 = Math.floor(Math.random() * 20) + 1;
    dice202 = Math.floor(Math.random() * 20) + 1;  
    console.log([dice20] + " " + [dice202])
    if (dice20 < dice202){
        result3.textContent = dice20
    } else {
    result3.textContent = dice202
    }
   }
   function d12roll() {
    d12 = Math.floor(Math.random() * 12) +1;
    console.log(d12)
    result4.textContent = d12
   }
   function d6roll() {
    d6 = Math.floor(Math.random() * 6) + 1;
    console.log(d6)
    result5.textContent = d6
   }