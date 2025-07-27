// create an event listener that will listen for the users key press and display it
const input = document.getElementById("keyInput");
const output = document.getElementById("lastKey");

input.addEventListener("keypress", (event) => {
  output.textContent = event.key;
});
