const password = document.getElementById('password')
const background = document.getElementById('background')
const toggleButton = document.getElementById('togglePassword');
const passwordIcon = toggleButton.querySelector('i');

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2
    background.style.filter = `blur(${blurValue}px)`
})

toggleButton.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
});
// also not a good way to store the password in plain text. they should
// always be stored on the server side