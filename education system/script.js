function showLoginForm() {
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('create-account-form').style.display = 'none';
}

function showCreateAccountForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('create-account-form').style.display = 'flex';
}

function handleLogin(event) {
    event.preventDefault();
    const loginId = document.getElementById('login-id').value;
    const password = document.getElementById('password').value;

    const storedLoginId = localStorage.getItem('loginId');
    const storedPassword = localStorage.getItem('password');

    if (loginId === storedLoginId && password === storedPassword) {
        window.location.href = 'welcome.html'; // Redirect to welcome page
    } else {
        alert('Invalid login ID or password');
    }
}

function handleCreateAccount(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const newPassword = document.getElementById('new-password').value;

    const loginId = email; // Using email as the login ID

    localStorage.setItem('loginId', loginId);
    localStorage.setItem('password', newPassword);
    localStorage.setItem('name', name); // Store the user's name

    showLoginForm();
}
document.getElementById('ready-btn').addEventListener('click', function() {
    document.getElementById('course-materials').classList.remove('hidden');
});

document.getElementById('completion-checkbox').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('completion-message').classList.remove('hidden');
    } else {
        document.getElementById('completion-message').classList.add('hidden');
    }
});