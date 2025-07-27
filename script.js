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
