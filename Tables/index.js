const cells = document.querySelectorAll("td");

let skalering = 0;
function btnClick() {
  setInterval(() => {
    if (skalering < cells.length) {
      let ruto = cells[skalering];
      let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      ruto.style.background = rando1;
      skalering++;
      console.log(skalering);
    } else {
      skalering -= 100;
      console.log(skalering);
    }
  }, 20);
}

// TRANSFORM SHIT-------------------------------------------------------------
let h1 = document.getElementById("headline");
let rad1 = document.getElementById("row1");
let tableheader = document.getElementsByClassName("th");
let tabellen = document.getElementById("tableId");

const audio = document.getElementById("tetrisAudio");
let scaled = 0;
let scale2 = 0;

let r2 = document.getElementById("row2");
let r1 = document.getElementById("row1");
function btnClick2() {
  if (!scaled) {
    scaled = 1;
    r1.style.fontSize = "0px";
    r1.style.height = "40px";
    r2.style.height = "40px";
    tabellen.style.width = "800px";
    tabellen.style.height = "700px";
    tabellen.style.marginLeft = "auto";
    tabellen.style.marginRight = "auto";
    tabellen.style.fontSize = "0";
    tabellen.style.backgroundColor = "transparent";
    h1.textContent = "TETRIS";
  } else {
    r1.style.fontSize = "40px";
    r2.style.height = "70px";
    tabellen.style.width = "100%";
    tabellen.style.height = "10px";
    tabellen.style.fontSize = "16px";
    h1.textContent = "Tables";
    scaled = 0;
  }
}
function btnClick3() {
  if (!scale2) {
    scale2 = 1;

    audio.play();
  } else {
    audio.pause();
    scale2 = 0;
  }
}
