for (let i = 0; i < 7; i++) {}

function cBtn() {
  new Audio("notes/C5.mp3").play();
  ckey.style.boxShadow = "-4px -4px 4px black";
  setTimeout(() => {
    ckey.style.boxShadow = "0px 0px 0px black";
  }, 100);
}
function dBtn() {
  new Audio("notes/D5.mp3").play();
  dkey.style.boxShadow = "-4px -4px 4px black";
  setTimeout(() => {
    dkey.style.boxShadow = "0px 0px 0px black";
  }, 100);
}
function eBtn() {
  new Audio("notes/E5.mp3").play();
  ekey.style.boxShadow = "-4px -4px 4px black";
  setTimeout(() => {
    ekey.style.boxShadow = "0px 0px 0px black";
  }, 100);
}
function fBtn() {
  new Audio("notes/F5.mp3").play();
  fkey.style.boxShadow = "-4px -4px 4px black";
  setTimeout(() => {
    fkey.style.boxShadow = "0px 0px 0px black";
  }, 100);
}
function gBtn() {
  new Audio("notes/G5.mp3").play();
  gkey.style.boxShadow = "-4px -4px 4px black";
  setTimeout(() => {
    gkey.style.boxShadow = "0px 0px 0px black";
  }, 100);
}
function aBtn() {
  new Audio("notes/A5.mp3").play();
  akey.style.boxShadow = "-4px -4px 4px black";
  setTimeout(() => {
    akey.style.boxShadow = "0px 0px 0px black";
  }, 100);
}
function bBtn() {
  new Audio("notes/B5.mp3").play();
  bkey.style.boxShadow = "-4px -4px 4px black";
  setTimeout(() => {
    bkey.style.boxShadow = "0px 0px 0px black";
  }, 100);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "a") cBtn();
  if (event.key === "s") dBtn();
  if (event.key === "d") eBtn();
  if (event.key === "f") fBtn();
  if (event.key === "g") gBtn();
  if (event.key === "h") aBtn();
  if (event.key === "j") bBtn();
});
