// create an event listener for mouse events
var hover = document.getElementById("hover");

hover.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "skyblue";
  this.textContent = "welcome back";
});

hover.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "gray";
  this.textContent = "you have left";
});
// create an event listener that will listen for the users key press and display it
const input = document.getElementById("keyInput");
const output = document.getElementById("lastKey");

input.addEventListener("keypress", (event) => {
  output.textContent = event.key;
});

// create event listener for form on submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const username = document.getElementById("name");
  const message = document.getElementById("message");

  // form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    nameInput = username.value.trim();
    if (nameInput) {
      message.textContent = "Your form was submitted, thank you!";
    } else {
      message.textContent = "Please enter your name";
    }
  });
});
