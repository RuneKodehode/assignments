let xAxis = [];
let yAxis = [];

for (let i = 1, n = 1; i <= 10, n <= 10; i++, n++) {
  xAxis.push(i);
  yAxis.push(n);
}

let skalering = 0;
function btnClick() {
  setInterval(function sad() {
    if (skalering < 10) {
      let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      let ruto = document.getElementById("x" + xAxis[0]++ + "y" + yAxis[0]);
      ruto.style.background = rando1;
      skalering++;
      console.log(skalering);
    }
    if (skalering <= 20) {
      let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      let ruto = document.getElementById("x" + xAxis[9] + "y" + yAxis[0]++);

      ruto.style.background = rando1;
    }
  }, 300);
}

// ---------------------------------------------------------------------------
// TRANSFORM SHIT-------------------------------------------------------------
let h1 = document.getElementById("headline");
let rad1 = document.getElementById("row1");
let tableheader = document.getElementsByClassName("th");
let tabellen = document.getElementById("tableId");
const audio = document.getElementById("tetrisAudio");
let scaled = 0;
function btnClick2() {
  if (!scaled) {
    tabellen.style.width = "800px";
    tabellen.style.height = "700px";
    tabellen.style.fontSize = "0";
    rad1.style.height = "40px";
    tabellen.style.backgroundColor = "transparent";
    h1.textContent = "TETRIS";
    scaled = 1;

    audio.play();
  } else {
    tabellen.style.width = "100%";
    tabellen.style.height = "10px";
    tabellen.style.fontSize = "15px";
    h1.textContent = "Tables";
    scaled = 0;
    audio.pause();
  }
}
