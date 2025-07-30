// Review code
// List existing issues
// Fix issues

const savedUsers = localStorage.getItem('userData') || '[]';
let users = JSON.parse(savedUsers);
let currentUser = null;

window.onload = function () {
    loadUsers();
};

function addUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value;
    if (username.length < 2) {
        showMessage("Username too short", "error");
        return;
    }

    const user = {
        id: Date.now(),
        username: username,
        email: email,
        password: password,
        bio: bio,
        created: new Date().toISOString(),
        isAdmin: username.toLowerCase() === 'admin'
    };

    users.push(user);
    saveUsers();
    displayUsers();
    clearForm();
    showMessage("User added successfully!", "success");
    localStorage.setItem('lastAddedUser', JSON.stringify(user));
}

function displayUsers() {
    const usersList = document.getElementById('usersList');
    let html = '';
    for (let i = 0; i < users.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < users.length; j++) {
            if (i !== j && users[i].email === users[j].email) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            const user = users[i];
            html += '<div class="user-card">';
            html += '<h4>' + user.username + '</h4>';
            html += '<p>Email: ' + user.email + '</p>';
            html += '<p>Bio: ' + user.bio + '</p>';
            html += '<p>Admin: ' + (user.isAdmin ? 'Yes' : 'No') + '</p>';
            html += '<button onclick="deleteUser(' + user.id + ')">Delete</button>';
            html += '</div>';
            break;
        }
    }
    usersList.innerHTML = html;
    document.getElementById('userCount').textContent = users.length;
}

function deleteUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            localStorage.removeItem('lastAddedUser');
            users.splice(i, 1);
            break;
        }
    }
    saveUsers();
    displayUsers();
    showMessage("User deleted", "success");
}

function exportUsers() {
    const dataStr = JSON.stringify(users, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'users_backup.json';
    link.click();

    showMessage("Data exported successfully!", "success");
}

function importUsers() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            try {
                const importedUsers = JSON.parse(e.target.result);
                users = users.concat(importedUsers);
                saveUsers();
                displayUsers();
                showMessage("Data imported successfully!", "success");
            } catch (error) {
                showMessage("Invalid file format", "error");
            }
        };

        reader.readAsText(file);
    };

    input.click();
}

function saveUsers() {
    localStorage.setItem('userData', JSON.stringify(users));
}

function loadUsers() {
    let saved = localStorage.getItem('userData');
    if (saved) {
        users = JSON.parse(saved);
        displayUsers();
    }
}

function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('bio').value = '';
}

function showMessage(msg, type) {
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '<div class="' + type + '">' + msg + '</div>';

    setTimeout(function () {
        messageDiv.innerHTML = '';
    }, 3000);
}

function searchUsers(query) {
    let results = [];
    for (let i = 0; i < users.length; i++) {
        let userStr = JSON.stringify(users[i]).toLowerCase();
        if (userStr.indexOf(query.toLowerCase()) !== -1) {
            results.push(users[i]);
        }
    }
    return results;
}
