document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a URL-encoded string of the form data
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password', password);

  // Send the data to the C++ backend (signup.cgi)
  fetch('/cgi-bin/signup.cgi', {
      method: 'POST',
      body: formData,
  })
  .then(response => response.text())
  .then(data => {
      // Handle the response from the server
      alert(data);  // Show the response from the C++ server
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
