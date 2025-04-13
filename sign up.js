document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email    = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`🔒 Simulated Auth\n\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
  });