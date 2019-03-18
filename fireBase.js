var fireBase = fireBase || firebase;
let hasInit = false;
let config = {

    apiKey: "AIzaSyDXkXVeJcyIswrhMBarAbg1KXEd8ONm8C8",
    authDomain: "gameloginauth010101.firebaseapp.com",
    databaseURL: "https://gameloginauth010101.firebaseio.com",
    projectId: "gameloginauth010101",
    storageBucket: "gameloginauth010101.appspot.com",
    messagingSenderId: "211454040328"
};
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
