//for login auth

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXFe_ZELAIrRk0D2u-hCCQsK8LgF3iYxQ",
  authDomain: "learnhub-9c4bb.firebaseapp.com",
  projectId: "learnhub-9c4bb",
  storageBucket: "learnhub-9c4bb.appspot.com",
  messagingSenderId: "474616406908",
  appId: "1:474616406908:web:65a56d0ca71196d6177af9"
};

const app = initializeApp(firebaseConfig);




//implementing login functionality
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
event.preventDefault();
const email = loginForm['username'].value; 
const password = loginForm['password'].value;

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.error(errorMessage);
    
  });
});

firebase.auth().onAuthStateChanged((user) => {
if (user) {
  
  window.location.href = "home.html";
} else {
  
}
});




// Get signup form
const signupForm = document.getElementById('signup-form');


signupForm.addEventListener('submit', function(event) {
event.preventDefault(); 

// Get user input
const email = signupForm['email'].value;
const password = signupForm['password'].value;

// Create new user with email and password
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log('User signed up:', user);
    
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Signup error:', errorCode, errorMessage);
    
  });
});