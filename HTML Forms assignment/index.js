function buyRam() {
  console.log("wtf");
  let x = document.getElementById("slider").value;
  document.getElementById("mbRam").innerHTML = x;
}
let email = document.getElementById("eMail");
scale = 0;
function dwnRam() {
  if (!scale) {
    email.style.height = "30px";
    email.style.width = "300px";
    email.style.opacity = 1;
    scale = 1;
  } else {
    email.style.height = "0px";
    email.style.width = "0px";
    email.style.opacity = 0;
    scale = 0;
  }
}
