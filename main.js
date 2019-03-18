let mainApp = {};
(function(){

    let logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("index.html");
        },function(){})
    };

let init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");

        } else {
          // No user is signed in.
          console.log("redirect");
         window.location.replace("index.html");
        }
      });
};

init();

mainApp.logout = logtout;
})();
