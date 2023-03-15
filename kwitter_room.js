var firebaseConfig = {
      apiKey: "AIzaSyDE1NFXRj-4Kt-MTLbnavf6his3gwJ9Buc",
      authDomain: "kwitter-ecd40.firebaseapp.com",
      databaseURL: "https://kwitter-ecd40-default-rtdb.firebaseio.com",
      projectId: "kwitter-ecd40",
      storageBucket: "kwitter-ecd40.appspot.com",
      messagingSenderId: "114631053996",
      appId: "1:114631053996:web:7c264a54ee9698ffcc8509",
      measurementId: "G-9DXPNCGCSK"
    };
    firebase.initializeApp(config);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name" + room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
function redirecttoroomname(name)
{
      localStorage.setItem("room_name",name);
      window.location = "kwitter_room.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
