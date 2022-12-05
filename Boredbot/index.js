const button = document.getElementById("btn");
button.addEventListener("click", randomActivity);

function randomActivity() {
  console.log("wtf");
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("type").textContent = "type: " + data.type;
      document.getElementById("price").textContent = "price: " + data.price;
      document.getElementById("link").textContent = "link: " + data.link;
      document.getElementById("placeholder").textContent =
        "participants: " + data.participants;
    });
}
