var firebaseConfig = {
    apiKey: "AIzaSyBjeM0lVWXyTr9O41HlVUYopi4qhGFOSq0",
    authDomain: "kwitterproject-657c0.firebaseapp.com",
    databaseURL: "https://kwitterproject-657c0-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-657c0",
    storageBucket: "kwitterproject-657c0.appspot.com",
    messagingSenderId: "1001642672233",
    appId: "1:1001642672233:web:8959e9a9822df1c5e4a2f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
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
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}