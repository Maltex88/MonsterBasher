


let loginApp = {};


(function () {
    let firebase = app_firebase;
    let uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //inloggad
            uid = user.id;
        } else{
            uid = null;
           window.location.replace('main.html') // här hamnar man om man loggar ut
            // i detta fall tillbaka till login sidan. Ändra till valfri html sida.
        }
    });

    function loggaUt(){
        firebase.auth().signOut();
    }
  loginApp.loggaUt = loggaUt;
})();

// This is the firebase code--------------
let app_firebase = {};
(function () {


    let config = {
        apiKey: "AIzaSyDXkXVeJcyIswrhMBarAbg1KXEd8ONm8C8",
        authDomain: "gameloginauth010101.firebaseapp.com",
        databaseURL: "https://gameloginauth010101.firebaseio.com",
        projectId: "gameloginauth010101",
        storageBucket: "gameloginauth010101.appspot.com",
        messagingSenderId: "211454040328"
    };
    firebase.initializeApp(config);
    app_firebase = firebase;
})();


// A new fucntion of code begins here

(function () {
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    let uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {


                return true;
            },
            uiShown: function() {

                document.getElementById('loader').style.display = 'none';
            }
        },

        signInFlow: 'popup',
        signInSuccessUrl: 'main.html', // här hamnar man när man loggat in dvs main.html kan
        // ändras till choose character sidan
        signInOptions: [

            firebase.auth.EmailAuthProvider.PROVIDER_ID,

        ],

        tosUrl: '<your-tos-url>',

        privacyPolicyUrl: 'main.html'
    };

    ui.start('#firebaseui-auth-container', uiConfig);

})();
