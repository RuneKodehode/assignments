const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");

function buyRam() {
  console.log("wtf");
  let x = document.getElementById("slider").value;
  document.getElementById("mbRam").innerHTML = x + " GB";

  if (x < 2048) {
    document.getElementById("mbRam").innerHTML = x + " MB";
    document.getElementById("pic1").style.opacity = 0;
    document.getElementById("pic2").style.opacity = 0;
  } else if (x > 20000) {
    document.getElementById("pic1").style.opacity = 1;
    document.getElementById("pic2").style.opacity = 2;
  } else if (x < 20000) {
    document.getElementById("pic1").style.opacity = 0;
    document.getElementById("pic2").style.opacity = 0;
  }
}
let email = document.getElementById("eMail");
let submit = document.getElementById("submit");
scale = 0;
function dwnRam() {
  if (!scale) {
    email.style.height = "30px";
    email.style.width = "300px";
    email.style.opacity = 1;
    submit.style.opacity = 1;
    scale = 1;
  } else {
    email.style.height = "0px";
    email.style.width = "0px";
    email.style.opacity = 0;
    submit.style.opacity = 0;
    scale = 0;
  }
}
function buyBtn() {
  console.log("123123");
}
