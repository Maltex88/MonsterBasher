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
           window.location.replace('index.html') // här hamnar man om man loggar ut
            // i detta fall tillbaka till login sidan. Ändra till valfri html sida.
        }
    });

    function loggaUt(){
        firebase.auth().signOut();
    }
  loginApp.loggaUt = loggaUt;
})();

