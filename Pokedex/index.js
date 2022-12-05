const info = document.getElementById("info");
const pic = document.getElementById("pic");
let x = 6;

function mainFunction() {
  fetch("https://pokeapi.co/api/v2/pokemon-species/" + x)
    .then((re) => re.json())
    .then((data) => {
      info.textContent = "Type: ";
      fetch("https://pokeapi.co/api/v2/pokemon/" + x)
        .then((res) => res.json())
        .then((data1) => {
          pic.innerHTML = `<img src="${data1.sprites.front_default}">`;
          document.getElementById("mon").textContent = "#" + data1.id + " " + data1.name.toUpperCase();
          const types = data1.types;
          types.map((x) => {
            info.textContent += "  " + x.type.name;
          });
        });
      pic.style = "box-shadow: 0px 0px 30px " + data.color.name + ";" + "background: linear-gradient(white, " + data.color.name +")";
      console.log(data.color.name)
      let lang = 0;
      data.flavor_text_entries[lang].language.name === "en" ? (document.getElementById("flavor").textContent = data.flavor_text_entries[lang].flavor_text.replace("\u000c","\n")): lang++;});
  shiny();
}

document.getElementById("next").addEventListener("click", () => {
  x === 151 ? (x = 1) : x++;
  mainFunction();
});

document.getElementById("pre").addEventListener("click", () => {
  x === 1 ? (x = 151) : x--;
  mainFunction();
});

document.getElementById("rnd").addEventListener("click", () => {
  for (let i = 0; i < 14; i++) {
    setTimeout(() => {
      x = Math.floor(Math.random() * 151 + 1);
      mainFunction();
    }, 50 * i);
  }
});

function shiny() {
  fetch("https://pokeapi.co/api/v2/pokemon/" + x)
    .then((res) => res.json())
    .then((data1) => {
      document.getElementById("shiny").addEventListener("click", () => {
        if (pic.innerHTML == `<img src="${data1.sprites.front_default}">`) {
          pic.innerHTML = `<img src="${data1.sprites.front_shiny}">`;
        } else if (pic.innerHTML == `<img src="${data1.sprites.front_shiny}">`) {
          pic.innerHTML = `<img src="${data1.sprites.front_default}">`;
        }
      });
    });
}

mainFunction();