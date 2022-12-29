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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



    function addRoom(){
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
        });
        
        localStorage.setItem("room_name", room_name);

        window.location = "index1.html";
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
       });});}
 getData();

    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "index2.html";
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";     
}