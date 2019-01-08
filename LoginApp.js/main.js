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
           window.location.replace('login.html')
        }
    });

    function loggaUt(){
        firebase.auth().signOut();
    }
  loginApp.loggaUt = loggaUt;
})();

