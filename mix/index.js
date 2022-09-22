console.log("wtf");
let tekstInput = document.getElementById("text");
let panda = document.getElementById("pandaPic");
let bodyFarge = document.getElementById("bodyId");
let scaled = 0;

function klikk() {
  let rando1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  if (tekstInput.textContent) {
    textContent = "";
  }
  tekstInput.textContent = rando1;
  bodyFarge.style.background = tekstInput.textContent;
  console.log(rando1);
}

function pandaClick() {
  if (!scaled) {
    panda.style.width = "900px";
    scaled = 1;
  } else {
    panda.style.width = "300px";
    scaled = 0;
  }
}
