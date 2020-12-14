var firebaseConfig = {
    apiKey: "AIzaSyAEmj8FBWhfhE_61AXBIVDqkUgbCcosJbQ",
    authDomain: "fmll-atx.firebaseapp.com",
    databaseURL: "https://fmll-atx.firebaseio.com",
    projectId: "fmll-atx",
    storageBucket: "fmll-atx.appspot.com",
    messagingSenderId: "984793536411",
    appId: "1:984793536411:web:4ace72d6c579cd1440333e",
    measurementId: "G-W9PC20BSNV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().signInAnonymously().catch(function(error) {
	console.log(error.code);
	console.log(error.message);
});

var db = firebase.firestore();
var featuresRef = db.collection(databaseCollectionName);
