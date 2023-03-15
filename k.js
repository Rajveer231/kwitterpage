var firebaseConfig = {
  apiKey: "AIzaSyCk3fgPs3Jk72L40GV4cJHJ4zia2RUHUnQ",
  authDomain: "k1221-a42ad.firebaseapp.com",
  databaseURL: "https://k1221-a42ad-default-rtdb.firebaseio.com",
  projectId: "k1221-a42ad",
  storageBucket: "k1221-a42ad.appspot.com",
  messagingSenderId: "958902120660",
  appId: "1:958902120660:web:c629ee9849dc99dd39cb41",
};
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name",room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot)
   { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
   { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

