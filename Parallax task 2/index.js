let bilde = document.getElementById("picA");
let scaled = 0;
function heightenPic() {
  if (!scaled) {
    bilde.style.height = "100%";
    scaled = 1;
    bilde.style.transition = "5s";
    document.getElementById("fsButton").textContent =
      "why would you click this.";
  } else {
    bilde.style.transition = "3s";
    bilde.style.height = "20%";
    scaled = 0;
    document.getElementById("fsButton").textContent = "stop clicking me.";
  }
}
