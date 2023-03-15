var firebaseConfig = {
    apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
    authDomain: "testkwitter.firebaseapp.com",
    databaseURL: "https://testkwitter.firebaseio.com",
    projectId: "testkwitter",
    storageBucket: "testkwitter.appspot.com",
    messagingSenderId: "624653701634",
    appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b"
  };
  
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send()
  {
    message=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        like:0
    });
    document.getElementById("message").value="";
  }
  
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name",room_name);
      
      window.location = "kwitter_room.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
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
      window.location = "kwitter_room.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  