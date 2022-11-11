const baseUrl = 'http://127.0.0.1:8080';

/*
    Example of using the Fetch API to send HTTP requests from the browser to the backend
*/
fetch(`${baseUrl}/current-user`, {
    method: 'GET',
    credentials: 'include'
}).then((res) => {
    return res.json();
}).then((responseBody) => {
    const id = responseBody.id;
    const username = responseBody.username;
    const password = responseBody.password;
    const role = responseBody.role;

    /*
        Example of DOM manipulation
    */
    const p1 = document.createElement('p');
    p1.innerHTML = `User Id: ${id}`;

    const p2 = document.createElement('p');
    p2.innerHTML = `Username: ${username}`;

    const p3 = document.createElement('p');
    p3.innerHTML = `Password: ${password}`;

    const p4 = document.createElement('p');
    p4.innerHTML = `Role: ${role}`;


    const userInfoDivElement = document.getElementById('user-info');
    userInfoDivElement.appendChild(p1);
    userInfoDivElement.appendChild(p2);
    userInfoDivElement.appendChild(p3);
    userInfoDivElement.appendChild(p4);
});

const logoutButtonElement = document.getElementById('logout');
logoutButtonElement.addEventListener('click', () => {
    fetch(`${baseUrl}/logout`, {
        method: 'POST',
        credentials: 'include'
    }).then((res) => {
        window.location.href = 'index.html';
    })
});