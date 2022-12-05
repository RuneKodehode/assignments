// Use a normal for loop to loop over the people array and do the following:

// - Make a new key on each person object in the array called "city" and set the value to a random city
// 	from the cities array.

// - Make a new key on each person object called "title" and set it to "Mr." for males and "Ms." for females.

// - Increment the age by 1

// - Add "coding" to the hobby array on each object.

// PS: Use only 1 loop to do the above steps.

// console.log(people) after your loop to check that your changes are correct.

// Feel free to ask me or Joe if you're stuck, and remember the deadline is this friday!

// */

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

for (i = 0; i < people.length; i++) {
  const p = people[i];
  p["city"] = cities[Math.floor(Math.random() * cities.length)];
  p.male ? (p.title = "Mr") : (p.title = "Ms");
  p.age += 1;
  p.hobbies.push("coding");
}
console.log(people);
