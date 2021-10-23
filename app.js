import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {getDatabase,ref,push,set}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPMB_GvsNueU1bkJyi6Ci0K1ecqAm7hh0",
  authDomain: "contat-me-form.firebaseapp.com",
  projectId: "contat-me-form",
  storageBucket: "contat-me-form.appspot.com",
  messagingSenderId: "692174941028",
  appId: "1:692174941028:web:50948c58f399b331d9e871"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const db= getDatabase(app);
  // Reference messages collection
  
  // Listen for form submit
  document.getElementById('contactform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('contactname');
    var email = getInputVal('contactmail');
    var message = getInputVal('contactmasg');
  
    // Save message
    saveMessage(name, email, message);
  
    // // Show alert
     alert('Thanks for Submittiing');
  
    // // Hide alert after 3 seconds
     setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
     },3000);
  
    // Clear form
    document.getElementById('contactform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email,message){
    const contactlist=ref(db,'contactform');
    const newcontactlist=push(contactlist);
    set(newcontactlist,{
        name:name,
        email:email,
        message:message,
    })
  }