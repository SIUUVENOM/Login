var signupName = document.getElementById("signupname");
var signupemail = document.getElementById("signupemail");
var signuppass = document.getElementById("usignuppass");
var signupBtn = document.getElementById("signup");
var signinemail = document.getElementById("signinemail");
var signinpass = document.getElementById("signinpass");
var signinBtn = document.getElementById("signin");
var emaileror = document.getElementById("emaileror");
var emptyinputs = document.getElementById("emptyinputs");
var Success = document.getElementById("Success");
var username = document.getElementById("username");
var signout = document.getElementById("logout");

if (JSON.parse(localStorage.getItem("Allusers")) == null) {
  var userscontainer = [];
} else {
  userscontainer = JSON.parse(localStorage.getItem("Allusers"));
}

if (signupBtn) {
  signupBtn.addEventListener("click", function () {
    if (emailValidition() == undefined) {
      create();
      emaileror.classList.replace("d-block", "d-none");
      Success.classList.replace("d-none", "d-block");
    } else if (emailValidition() == true) {
      emaileror.classList.replace("d-none", "d-block");
      Success.classList.replace("d-block", "d-none");
    } else {
      create();
      emaileror.classList.replace("d-block", "d-none");
      Success.classList.replace("d-none", "d-block");
    }
  });
}

if (signinBtn) {
  signinBtn.addEventListener("click", function () {
    var email = signinemail.value;
    var pass = signinpass.value;
    for (var i = 0; i < userscontainer.length; i++) {
      if (
        userscontainer[i].uEmail.toLowerCase() == email.toLowerCase() &&
        userscontainer[i].uPass.toLowerCase() == pass.toLowerCase()
      ) {
        localStorage.setItem("usersession", userscontainer[i].uname);
        location.replace("./html/welcom.html");
        wrong.classList.replace("d-block", "d-none");
      } else {
        wrong.classList.replace("d-none", "d-block");
      }
    }
  });
}

if (username) {
  username.innerText = `Welcome ${localStorage.getItem("usersession")}`;
}

function create() {
  users = {
    uname: signupName.value,
    uEmail: signupemail.value,
    uPass: signuppass.value,
  };
  userscontainer.push(users);
  localStorage.setItem("Allusers", JSON.stringify(userscontainer));
}

function emailValidition() {
  for (var i = 0; i < userscontainer.length; i++) {
    if (userscontainer[i].uEmail == signupemail.value) {
      return true;
    } else {
      return false;
    }
  }
}

function passValidition() {
  for (var i = 0; i < userscontainer.length; i++) {
    if (userscontainer[i].uPass == signinpass.value) {
      return true;
    } else {
      return false;
    }
  }
}

if (signout) {
  signout.addEventListener("click", function signout() {
    location.replace("../index.html");
    localStorage.removeItem("usersession");
  });
}
