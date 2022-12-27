var firebaseConfig = {

    apiKey: "AIzaSyDnmV8QhacKURKVlk0fk8JJI9HAbEX5y_Y",
  
    authDomain: "untitled-1e62a.firebaseapp.com",
  
    projectId: "untitled-1e62a",
  
    storageBucket: "untitled-1e62a.appspot.com",
  
    messagingSenderId: "998323886994",
  
    appId: "1:998323886994:web:3455b54c2626159616ff4b"

}  ;
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

        window.location = "indexk.html";
    }
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
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
        window.location = "indexk.html";
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";     
}