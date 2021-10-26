var firebaseConfig = {
      apiKey: "AIzaSyCQ_KIhUGvGz7mupgQ8fdDaw33UfYbxu_8",
      authDomain: "kwitter1-98e1b.firebaseapp.com",
      databaseURL: "https://kwitter1-98e1b-default-rtdb.firebaseio.com",
      projectId: "kwitter1-98e1b",
      storageBucket: "kwitter1-98e1b.appspot.com",
      messagingSenderId: "928843498101",
      appId: "1:928843498101:web:f3b36581da470b2bbaee3c"
    };
    
    // Initialize Firebase
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig); 
  
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location  = "index.html"
}

























