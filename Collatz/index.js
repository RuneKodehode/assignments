const input = document.getElementById("numInput");
const output = document.getElementById("output");
const high = document.getElementById("highNumber");
const stepshit = document.getElementById("stepshit");
const array = [];

document.getElementById("numInput").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  let number = input.value;
  let stepCounter = 0;
  let highscore = 0;
  let forNumber = number;
  let steps = 0;
  let stepstellar = 0;
  for (let i = 0; i <= forNumber; i++) {
    let x = i;
    while (x > 1) {
      highscore = highscore < x ? x : highscore;
      x = x % 2 ? x * 3 + 1 : x / 2;
      stepCounter++;
      steps++;
      high.innerHTML = "Høgaste talet: " + highscore;
      output.innerHTML = "Antall steg: " + stepCounter;
    }
    if (steps > stepstellar) {
      stepstellar = steps;
      stepshit.innerHTML =
        "Number with highest number of steps =  " +
        i +
        "!  Number of steps: " +
        stepstellar +
        "!";
    }
    steps = 0;
  }
});

// original tallet med høgast collatz topp "print", topp-tall "print"
