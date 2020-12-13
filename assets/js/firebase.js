// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
	apiKey: "AIzaSyAEmj8FBWhfhE_61AXBIVDqkUgbCcosJbQ",
	authDomain: "find-my-landlord.firebaseapp.com",
	databaseURL: "https://find-my-landlord.firebaseio.com",
	projectId: "find-my-landlord",
	storageBucket: "find-my-landlord.appspot.com",
	messagingSenderId: "470878094978",
	appId: "1:470878094978:web:ebc5b2350e17f590af569b",
	measurementId: "G-C7MQBH19E6"
};

var firebaseConfig = {
    apiKey: "AIzaSyAEmj8FBWhfhE_61AXBIVDqkUgbCcosJbQ",
    authDomain: "fmll-atx.firebaseapp.com",
    databaseURL: "https://fmll-atx.firebaseio.com",
    projectId: "fmll-atx",
    storageBucket: "fmll-atx.appspot.com",
    messagingSenderId: "984793536411",
    appId: "1:984793536411:web:4ace72d6c579cd1440333e"
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
