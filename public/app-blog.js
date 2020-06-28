var firebaseConfig = {
    apiKey: "AIzaSyB2Ei6mFiCfIM57p0DUrJjpm652FXuNkNk",
    authDomain: "my-website-8b344.firebaseapp.com",
    databaseURL: "https://my-website-8b344.firebaseio.com",
    projectId: "my-website-8b344",
    storageBucket: "my-website-8b344.appspot.com",
    messagingSenderId: "653143022309",
    appId: "1:653143022309:web:54fa4c3bda3b335aa4120c",
    measurementId: "G-22NW6HQW6M"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase);

var firestore = firebase.firestore();

const topicBtn = document.querySelector("#subtopic");
let name = document.querySelector("#name");
let email = document.querySelector("#em");
let top = document.querySelector("#top");

const db1 = firestore.collection("suggestions");

topicBtn.addEventListener('click', function() {
    let nameInput = name.value;
    let emailInput = email.value;
    let topInput = top.value;

    console.log("Sending your Suggestion...")

    db1.doc(nameInput.toString()).set({
        Name: nameInput,
        EmailId: emailInput,
        Topic: topInput
    })
    .then(function() {
        console.log("Suggestion Sent");
        setTimeout(function() {alert("Thank You for your Suggestion.")}, 3200);
    })
    .catch(function(error) {
        console.log(error);
    })
});
