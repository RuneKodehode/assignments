let V1 = document.getElementById("x1y1");
let V2 = document.getElementById("x1y2");
let V3 = document.getElementById("x1y3");
let V4 = document.getElementById("x1y4");
let V5 = document.getElementById("x1y5");
let V6 = document.getElementById("x1y6");
let V7 = document.getElementById("x1y7");
let V8 = document.getElementById("x1y8");
let V9 = document.getElementById("x1y9");
let V10 = document.getElementById("x1y10");
let W1 = document.getElementById("x2y1");
let X1 = document.getElementById("x3y1");
let W2 = document.getElementById("x2y2");
let X2 = document.getElementById("x3y2");
let W3 = document.getElementById("x2y3");
let X3 = document.getElementById("x3y3");
let W4 = document.getElementById("x2y4");
let X4 = document.getElementById("x3y4");
let W5 = document.getElementById("x2y5");
let X5 = document.getElementById("x3y5");
let W6 = document.getElementById("x2y6");
let X6 = document.getElementById("x3y6");
let W7 = document.getElementById("x2y7");
let X7 = document.getElementById("x3y7");
let W8 = document.getElementById("x2y8");
let X8 = document.getElementById("x3y8");
let W9 = document.getElementById("x2y9");
let X9 = document.getElementById("x3y9");
let W10 = document.getElementById("x2y10");
let X10 = document.getElementById("x3y10");

let tabellen = document.getElementById("tableId");

let scaled = 0;
let delay1 = 200;
let delayms = 400;
let delay2 = 800;
let delay3 = 1200;
let delay4 = 1600;
let delay5 = 2000;
let delay6 = 2400;
let delay7 = 2800;
let delay8 = 3200;
let delay9 = 3600;
let delay10 = 4000;
let delay11 = 4400;
let delay12 = 4800;
let delay13 = 5200;
let delay14 = 5600;
let delay15 = 6000;
function btnClick() {
  if (!scaled) {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V1.style.background = rando1;
    V2.style.background = rando1;
    V3.style.background = rando1;
    V4.style.background = rando1;

    scaled = 1;
  }

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V1.style.background = rando1;
    V2.style.background = rando1;
    V3.style.background = rando1;
    V4.style.background = rando1;
    scaled = 0;
  }, delay1);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V2.style.background = rando1;
    V3.style.background = rando1;
    V4.style.background = rando1;
    V5.style.background = rando1;
    V1.style.background = "white";
    scaled = 0;
  }, delayms);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V3.style.background = rando1;
    V4.style.background = rando1;
    V5.style.background = rando1;
    V6.style.background = rando1;
    V2.style.background = "white";
    scaled = 0;
  }, delay2);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V4.style.background = rando1;
    V5.style.background = rando1;
    V6.style.background = rando1;
    V7.style.background = rando1;
    V3.style.background = "white";
    scaled = 0;
  }, delay3);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V5.style.background = rando1;
    V6.style.background = rando1;
    V7.style.background = rando1;
    V8.style.background = rando1;
    V4.style.background = "white";
    scaled = 0;
  }, delay4);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V6.style.background = rando1;
    V7.style.background = rando1;
    V8.style.background = rando1;
    V9.style.background = rando1;
    V5.style.background = "white";
    scaled = 0;
  }, delay5);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    V7.style.background = rando1;
    V8.style.background = rando1;
    V9.style.background = rando1;
    V10.style.background = rando1;
    V6.style.background = "white";
    scaled = 0;
  }, delay6);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W1.style.background = rando1;
    X1.style.background = rando1;
    W2.style.background = rando1;
    X2.style.background = rando1;

    scaled = 0;
  }, delay7);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W2.style.background = rando1;
    X2.style.background = rando1;
    W3.style.background = rando1;
    X3.style.background = rando1;
    W1.style.background = "WHITE";
    X1.style.background = "WHITE";

    scaled = 0;
  }, delay8);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W3.style.background = rando1;
    X3.style.background = rando1;
    W4.style.background = rando1;
    X4.style.background = rando1;
    W2.style.background = "WHITE";
    X2.style.background = "WHITE";

    scaled = 0;
  }, delay9);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W4.style.background = rando1;
    X4.style.background = rando1;
    W5.style.background = rando1;
    X5.style.background = rando1;
    W3.style.background = "WHITE";
    X3.style.background = "WHITE";

    scaled = 04;
  }, delay10);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W5.style.background = rando1;
    X5.style.background = rando1;
    W6.style.background = rando1;
    X6.style.background = rando1;
    W4.style.background = "WHITE";
    X4.style.background = "WHITE";

    scaled = 04;
  }, delay11);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W6.style.background = rando1;
    X6.style.background = rando1;
    X7.style.background = rando1;
    W7.style.background = rando1;
    W5.style.background = "WHITE";
    X5.style.background = "WHITE";

    scaled = 04;
  }, delay12);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W7.style.background = rando1;
    X7.style.background = rando1;
    X8.style.background = rando1;
    W8.style.background = rando1;
    W6.style.background = "WHITE";
    X6.style.background = "WHITE";

    scaled = 04;
  }, delay13);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W8.style.background = rando1;
    X8.style.background = rando1;
    X9.style.background = rando1;
    W9.style.background = rando1;
    W7.style.background = "WHITE";
    X7.style.background = "WHITE";

    scaled = 04;
  }, delay14);

  setTimeout(function btnClick() {
    let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    W9.style.background = rando1;
    X9.style.background = rando1;
    X10.style.background = rando1;
    W10.style.background = rando1;
    W8.style.background = "WHITE";
    X8.style.background = "WHITE";

    scaled = 04;
  }, delay15);
}

function btnClick2() {
  if (!scaled) {
    tabellen.style.width = "700px";
    tabellen.style.height = "800px";
    tabellen.style.fontSize = "0px";

    scaled = 1;
  } else {
    tabellen.style.width = "100%";
    tabellen.style.height = "10px";
    tabellen.style.fontSize = "15px";
    scaled = 0;
  }
}
