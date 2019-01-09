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
        signInSuccessUrl: '1index.html', // här hamnar man när man loggat in dvs main.html kan
        // ändras till choose character sidan
        signInOptions: [

            firebase.auth.EmailAuthProvider.PROVIDER_ID,

        ],

        tosUrl: '<your-tos-url>',

        privacyPolicyUrl: 'main.html'
    };

    ui.start('#firebaseui-auth-container', uiConfig);

})();

