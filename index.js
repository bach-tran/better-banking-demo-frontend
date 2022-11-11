const baseUrl = 'http://127.0.0.1:8080';

const usernameInputElement = document.getElementById('username');
const passwordInputElement = document.getElementById('password');

const loginButtonElement = document.getElementById('login-button');

loginButtonElement.addEventListener('click', () => {
    // console.log(usernameInputElement.value);
    // console.log(passwordInputElement.value);
    fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: `{"username":"${usernameInputElement.value}","password":"${passwordInputElement.value}"}`,
        credentials: 'include' // Very important so that the browser will retain the Cookie when we log in
        // by default the browser will throw the Cookie away
    }).then((res) => {
        if (res.status === 200) {
            window.location.href = 'user-profile.html';
        } else {
            alert('Invalid login!');
        }
    });
});