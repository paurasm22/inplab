document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // Clear previous errors
  clearErrors();
  let isValid = true;

  // Validate Name
  const name = document.getElementById('name').value;
  if (!name.trim()) {
    showError('nameError', 'Name is required.');
    isValid = false;
  }

  // Validate Mobile Number
  const mobile = document.getElementById('mobile').value;
  const mobileRegex = /^[0-9]{10}$/; // Example for 10-digit mobile number
  if (!mobile || !mobileRegex.test(mobile)) {
    showError('mobileError', 'Please enter a valid 10-digit mobile number.');
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  if (!email || !emailRegex.test(email)) {
    showError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }

  // Validate Birthday
  const birthday = document.getElementById('birthday').value;
  if (!birthday) {
    showError('birthdayError', 'Birthday is required.');
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById('password').value;
  if (!password || password.length < 6) {
    showError('passwordError', 'Password must be at least 6 characters long.');
    isValid = false;
  }

  // If all fields are valid, submit the form
  if (isValid) {
    alert('Form submitted successfully!');
    // Here you could send form data to a server or process it as needed
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(error => error.textContent = '');
}
