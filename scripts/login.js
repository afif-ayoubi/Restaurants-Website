function checkCredentials(username, password) {
    const users = getUsers();

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === username && user.password === password) {
            return { id: user.id, isAdmin: user.isAdmin };
        }
    }

    return null;
}

const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-login");

const users = getUsers()
console.log(users);



btnLogin.addEventListener("click", (e) => {
    const user = checkCredentials(inputEmail.value, inputPassword.value);
    if (user) {
        console.log("User ID: " + user.id);
        console.log("Is Admin: " + user.isAdmin);
    } else {
        alert("Invalid username or password.");
    }
});