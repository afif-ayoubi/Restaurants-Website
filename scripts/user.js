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
    resetForm();

  }
};
const deleteData = (index) => {
  const users = getUsers();
  const userId = users[index].id;
  deleteUser(userId);
  updateDataView();
};

const editData = (index) => {
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";
  users = getUsers();
  firstName.value = users[index].firstName;
  lastName.value = users[index].lastName;
  email.value = users[index].email;
  password.value = users[index];
  document.getElementById("update").onclick = () => {
    if (validateUser(users[index])) {
      users[index].firstName = firstName.value;
      users[index].lastName = lastName.value;
      users[index].email = email.value;
      users[index].password = password.value;
      if(validateUser(users[index])){
      updateUser(users[index]);
      resetForm();
      updateDataView();
      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
    else{
        resetForm();
      updateDataView();
      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
}
  };
};
// const editData = (index) => {
//     submitButton.style.display = "none";
//     updateButton.style.display = "block";
  
//     const users = getUsers();
//     const currentUser = users[index];
//     let { firstName, lastName, email, password } = currentUser;
  
//     FirstName.value = firstName;
//     LastName.value = lastName;
//     Email.value = email;
//     Password.value = password;
  
//     document.getElementById("update").onclick = () => {
//       const updatedUser = {
//         firstName: FirstName.value,
//         lastName: LastName.value,
//         email: Email.value,
//         password: Password.value,
//       };
  
//       updateUser(updatedUser); // Assuming updateUser is not asynchronous
  
//       console.log("User updated successfully:", updatedUser);
//       resetForm();
//       submitButton.style.display = "block";
//       updateButton.style.display = "none";
//       updateDataView();
//     };
//   };
const updateDataView = () => {
  const users = getFromLocalStorage("users");
  const tableBody = document.querySelector("#crudTable tbody");
  tableBody.innerHTML = generatePeopleListHTML(users);
};
const resetForm = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
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
document.addEventListener("DOMContentLoaded", () => updateDataView());
