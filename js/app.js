// Array to store user data
let users = [];

// Signup functionality
document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  let username = document.querySelector('#signup-form input[type="text"]').value;
  let email = document.querySelector('#signup-form input[type="email"]').value;
  let password = document.querySelector('#signup-form input[type="password"]').value;

  // Check if the user already exists (by username or email)
  let userExists = users.some(user => user.username === username || user.email === email);

  if (userExists) {
    alert('Username or Email already taken. Please try again.');
  } else {
    // Add new user to the array
    users.push({ username, email, password });
    alert('Signup successful!');
    // Optionally, clear form fields after signup
    document.getElementById('signup-form').reset();
  }
});

// Login functionality
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  let username = document.querySelector('#login-form input[type="text"]').value;
  let password = document.querySelector('#login-form input[type="password"]').value;

  // Check if the user exists and password matches
  let user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Login successful!');
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
