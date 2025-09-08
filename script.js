// Part 1: Event Handling
const btn = document.getElementById("showMessageBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", function() {
  msg.textContent = "Button was clicked!";
});

// Part 2: Interactive Elements
// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
const modeText = document.getElementById("modeText");

toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    modeText.textContent = "Dark Mode";
  } else {
    modeText.textContent = "Light Mode";
  }
});

// Counter
let count = 0;
const counter = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function() {
  count++;
  counter.textContent = count;
});

document.getElementById("reset").addEventListener("click", function() {
  count = 0;
  counter.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById("myForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name === "") {
    error.textContent = "Name is required";
  } else if (!email.includes("@")) {
    error.textContent = "Enter a valid email";
  } else if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters";
  } else {
    error.textContent = "Form submitted successfully";
  }
});
