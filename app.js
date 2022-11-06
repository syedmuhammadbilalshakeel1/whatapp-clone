//  Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Sign-up
// variable in signupHtml
let signUp = document.getElementById("signUp");
let fullName = document.getElementById("fullName");
let fatherName = document.getElementById("fatherName");
let emailAddress = document.getElementById("emailAddress");
let password = document.getElementById("password");

signUp.addEventListener("click", (event) => {
  // Varaiables In Regix
  event.preventDefault();
  const emptyNameRegix = /^\s*$/.test(fullName.value);
  const nameRegix = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/.test(fullName.value);
  const emptyFatherNameRegix = /^\s*$/.test(fatherName.value);
  const fatherNameRegix = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/.test(
    fatherName.value
  );
  const emailRegix =
    /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(
      emailAddress.value
    );
  const passwordRegix = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/.test(
    password.value
  );
  if (emptyNameRegix) {
    swal("Warning!", "Ist You Fill out The Name!", "error");
  } else if (!nameRegix) {
    swal("Warning!", "Your name must be 3 chrachter!", "error");
  } else if (emptyFatherNameRegix) {
    swal("Warning!", "Ist You Fill out The Fathername!", "error");
  } else if (!fatherNameRegix) {
    swal("Warning!", "Your Fathername must be 3 character!", "error");
  } else if (!emailRegix) {
    swal("Warning!", "Your email address is invalid!", "error");
  } else if (!passwordRegix) {
    swal(
      "Warning!",
      "Your password must be contain 8 chracter numbers and strings!",
      "error"
    );
  } else if (
    !emptyNameRegix &&
    nameRegix &&
    !emptyFatherNameRegix &&
    fatherNameRegix &&
    emailRegix &&
    passwordRegix
  ) {
    createUserWithEmailAndPassword(auth, emailAddress.value, password.value)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => {
        fullName.value = "";
        fatherName.value = "";
        emailAddress.value = "";
        password.value = "";
      });
  }
});

// login
// varaiables is loginHtml
let loginEmailAdreess = document.getElementById("loginEmailAdreess");
let loginPassword = document.getElementById("loginPassword");
