let tekstInput = document.getElementById("text");
let panda = document.getElementById("pandaPic");
let bodyFarge = document.getElementById("bodyId");
let scaled = 0;

function oneClrBtn() {
  let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  bodyFarge.style.background = rando1;

  tekstInput.textContent = "Hexcode:" + rando1;
}

function oneGradBtn() {
  let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let rando2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  let gradHexClr = "linear-gradient(" + rando1 + ", " + rando2 + ")";

  bodyFarge.style.background = gradHexClr;
  tekstInput.textContent = "Hexcode:" + gradHexClr;
}

function anglGradBtn() {
  let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let rando2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let anglRando = Math.floor(Math.random() * 360) + 1;

  let angHexClr =
    "linear-gradient(" + anglRando + "deg, " + rando1 + ", " + rando2 + ")";
  bodyFarge.style.background = angHexClr;
  tekstInput.textContent = "Hexcode:" + angHexClr;
}

function pandaClick() {
  if (!scaled) {
    panda.style.width = "700px";
    scaled = 1;
  } else {
    panda.style.width = "150px";
    scaled = 0;
  }
}
