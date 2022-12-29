// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUwZpL_cHzHek7rjsmraDzVhcbf3kETlQ",
    authDomain: "untitled2-68b0e.firebaseapp.com",
    databaseURL: "https://untitled2-68b0e-default-rtdb.firebaseio.com",
    projectId: "untitled2-68b0e",
    storageBucket: "untitled2-68b0e.appspot.com",
    messagingSenderId: "272991728685",
    appId: "1:272991728685:web:2fc41402a9c284a2df34a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("rooom_name");


  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
       document.getElementById("msg").value = "";
    }
