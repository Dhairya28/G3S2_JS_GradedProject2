const validUsernamePasswords = [
  {
    username: "dhairya",
    password: "password",
  },
  {
    username: "debopriyo",
    password: "password",
  },
];

// html nodes
const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const passwordTag = document.getElementById("error");


usernameField.onfocus = clearError;
passwordField.onfocus = clearError;


window.history.forward();
function noBack() {
  alert(
       "Back option not autherized"
  );
  window.history.forward();
}


function clearError() {
  passwordTag.innerText = "";
}


loginForm.onsubmit = function (event) {
  onLoginClick(event);
};


function onLoginClick(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const currentUser = validUsernamePasswords.find((userData) => {
    return userData.username === username;
  });
  if (!currentUser) {
    passwordTag.innerText = "User doesn't exist";
  } else if (currentUser.password === password) {
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    window.location.href = "./resume-page.html";
  } else {
    passwordTag.innerText = "Invalid Credentials";
  }
}
