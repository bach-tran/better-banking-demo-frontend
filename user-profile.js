const baseUrl = 'http://127.0.0.1:8080';

/*
    Logout functionality
*/
const logoutButtonElement = document.getElementById('logout');
logoutButtonElement.addEventListener('click', () => {
    fetch(`${baseUrl}/logout`, {
        method: 'POST',
        credentials: 'include'
    }).then((res) => {
        window.location.href = 'index.html';
    })
});

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

    const tableHeadingElement = document.getElementById('table-heading');
    if (role === 'customer') {
        tableHeadingElement.innerHTML = 'Your Accounts'
    } else if (role === 'admin') {
        tableHeadingElement.innerHTML = 'All Accounts in The System'
    }
});

/*
    Display a table of accounts
    Customer: their own accounts
    Admin: all accounts
*/
fetch(`${baseUrl}/accounts`, {
    method: 'GET',
    credentials: 'include'
}).then((res) => {
    return res.json();
}).then((accounts) => {
    const tbodyElement = document.querySelector('#accounts tbody') // descendant css selector
    for (account of accounts) {
        let tr = document.createElement('tr');

        let idTd = document.createElement('td');
        idTd.innerHTML = account.id;
        let balanceTd = document.createElement('td');
        balanceTd.innerHTML = account.balance;

        tr.appendChild(idTd);
        tr.appendChild(balanceTd);

        tbodyElement.appendChild(tr);
    }
});
