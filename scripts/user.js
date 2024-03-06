const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const AddData = () => {
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  if (validateUser(user)) {
    addUser(user);
    updateDataView();
  }
};
const deleteData = (index) => {
  const users = getUsers();
  const userId = users[index].id;
  deleteUser(userId);
  updateDataView();
};

const updateDataView = () => {
  const users = getFromLocalStorage("users");
  const tableBody = document.querySelector("#crudTable tbody");
  tableBody.innerHTML = generatePeopleListHTML(users);
};

const validateUser = (user) => {
  return user.firstName === ""
    ? (alert("First name is required"), false)
    : user.lastName === ""
    ? (alert("Last name is required"), false)
    : user.email === ""
    ? (alert("Email is required"), false)
    : !user.email.includes("@")
    ? (alert("Invalid email address"), false)
    : user.password === ""
    ? (alert("Password is required"), false)
    : true;
};
const generatePeopleListHTML = (userList) => {
  let html = "";
  userList.forEach((element, index) => {
    html += `
            <tr>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.email}</td>
                <td>${element.password}</td>
                <td>
                    <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
                    <button onclick="editData(${index})" class="btn btn-warning">Edit</button>
                </td>
            </tr>
        `;
  });
  return html;
};
