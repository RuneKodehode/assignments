// String METHODS!!!-------------

let stringVar = "this is a string";
let convertedString = stringVar.toUpperCase();

console.log(convertedString);
console.log(stringVar.slice(2, 6));
console.log(stringVar.substring(2, 8));
console.log(stringVar.replace("this", "that"));
console.log(stringVar.trim());
console.log(stringVar.padStart(4, "x"));
console.log(stringVar.charAt(5));
console.log(stringVar.split(""));

// split, kun quotation marks converte alle chars til ein egen array., space inni quotation marks gjer alle ordena omm te array.
// padStart legge te 4* x's i starten, paddEnd legge til i enden av stringer.
// replace kan bli brukt te møkje, ha da i bakhåvet.
// .trim fjerne store spaces (Tab) og trimme da vekk.
// negative numbers counts from the end of the string and backwards.

// Array methods

const fruits = ["banana", "appe", "pear", "mango", "melon"];

console.log(fruits.join("*"));
console.log(fruits.pop());
console.log(fruits.concat(fruits2));
console.log(fruits.splice(2, 2, "kiwi", "passionFruit"));

// join, fills the void between each array, empty brackests so blir ordena hengandes sammen, multiplikasjonssymbolet so gange du dei f.eks.
// pop fjerne den nyaste arrayen, i denna arrayen so forsvinne melon f.eks.
// shift e motsatt, fjerne fyste
// unshift replace fyste
// concat, combina arrays.
// splice lets you insert and replace. fysta tallet e kor i arrayet du ska jobba, andra e tallet på arrays du ska fjerna.
