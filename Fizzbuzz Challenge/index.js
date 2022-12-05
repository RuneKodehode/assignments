let array = [];

function createArray(upperbound) {
  for (let i = 1; i <= upperbound; i++) {
    if (i % 15 === 0) {
      array.push("fizzbuzz");
    } else if (i % 3 === 0) {
      array.push("fizz");
    } else if (i % 5 === 0) {
      array.push("buzz");
    } else {
      array.push(i);
    }
  }
  document.getElementById("head").innerHTML = array.join(", ");
}
console.log(array);

createArray(669);

//

// fizz = 3 , 6 , 9, 12, 15, 18, 21, 24
// buzz, 5, 10, 15, 20, 25
// fizzbuzz 15
