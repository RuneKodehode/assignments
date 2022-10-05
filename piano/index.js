const btn = document.querySelectorAll("button");

window.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    new Audio("notes/C5.mp3").play();
    btn[0].style.boxShadow = "0px 0px 7px black";
    setTimeout(() => {
      btn[0].style.boxShadow = "0px 0px 0px black";
    }, 100);
  }
  if (event.key === "s") {
    new Audio("notes/D5.mp3").play();
    btn[1].style.boxShadow = "0px 0px 7px black";
    setTimeout(() => {
      btn[1].style.boxShadow = "0px 0px 0px black";
    }, 100);
  }
  if (event.key === "d") {
    new Audio("notes/E5.mp3").play();
    btn[2].style.boxShadow = "0px 0px 7px black";
    setTimeout(() => {
      btn[2].style.boxShadow = "0px 0px 0px black";
    }, 100);
  }
  if (event.key === "f") {
    new Audio("notes/F5.mp3").play();
    btn[3].style.boxShadow = "0px 0px 7px black";
    setTimeout(() => {
      btn[3].style.boxShadow = "0px 0px 0px black";
    }, 100);
  }
  if (event.key === "g") {
    new Audio("notes/G5.mp3").play();
    btn[4].style.boxShadow = "0px 0px 7px black";
    setTimeout(() => {
      btn[4].style.boxShadow = "0px 0px 0px black";
    }, 100);
  }
  if (event.key === "h") {
    new Audio("notes/A5.mp3").play();
    btn[5].style.boxShadow = "0px 0px 7px black";
    setTimeout(() => {
      btn[5].style.boxShadow = "0px 0px 0px black";
    }, 100);
  }
  if (event.key === "j") {
    new Audio("notes/B5.mp3").play();
    btn[6].style.boxShadow = "0px 0px 7px black";
    setTimeout(() => {
      btn[6].style.boxShadow = "0px 0px 0px black";
    }, 100);
  }
});
