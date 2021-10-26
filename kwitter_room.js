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
document.getElementById("user_name").innerHTML="welcome "+user_name

function addRoom(){
      room_name = document.getElementById("room_name").value;
       
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_namr=" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML+= row
      //End code
      });});}
getData();
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location  = "index.html"
}
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}