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
        signInSuccessUrl: 'main.html', // ändra till relevant html sida.
        signInOptions: [
            //Leave the lines as is for the providers you want to offer your users.
            //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
      
        tosUrl: '<your-tos-url>',
        
        privacyPolicyUrl: 'main.html'
    };

    ui.start('#firebaseui-auth-container', uiConfig);

})();

