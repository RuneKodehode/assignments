let bilde = document.getElementById("picA");
let scaled = 0;
function heightenPic() {
  if (!scaled) {
    bilde.style.height = "100%";
    scaled = 1;
  } else {
    bilde.style.height = "50%";
    scaled = 0;
  }
}
