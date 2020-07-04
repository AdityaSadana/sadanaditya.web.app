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

const submitBtn = document.querySelector('#submit');
let firstname = document.querySelector('#firstname');
let areacode = document.querySelector('#areacode');
let telnum = document.querySelector('#telnum');
let emailid = document.querySelector('#emailid');
let mess = document.querySelector('#message');

const db = firestore.collection("messages");

submitBtn.addEventListener('click', function() {
    let firstnameInput = firstname.value;
    let areacodeInput = areacode.value;
    let telnumInput = telnum.value;
    let emailidInput = emailid.value;
    let messInput = mess.value;

    console.log("Sending your Message..")
    db.doc(firstnameInput.toString()).set({
        Name: firstnameInput,
        Areacode: areacodeInput,
        Telephone: telnumInput,
        Email: emailidInput,
        Message: messInput
    })
    .then(function(){
        console.log("Message Sent");
        setTimeout(function() {alert("Message Sent")}, 3200);
    }).catch(function(error) {
        console.log(error);
    })
});