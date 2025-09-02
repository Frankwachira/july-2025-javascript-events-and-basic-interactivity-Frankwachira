// Toggle dark mode
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter logic
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counterDisplay").textContent = count;
});

// Show message on button click
document.getElementById("showMessageBtn").addEventListener("click", () => {
  document.getElementById("message").style.display = "block";
});

// Change background color on mouseover
document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#f4ce7cff";
});

// Validate form on submit
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let message = "";

  if (name === "") {
    message += "Name is required. ";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message += "Invalid email format. ";
  }

  if (password.length < 6) {
    message += "Password must be at least 6 characters.";
  }

  document.getElementById("formMessage").textContent = message || "Form submitted successfully!";
});