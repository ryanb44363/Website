document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    if (password === '') {
        alert('Password is required');
        event.preventDefault();
    }
});
