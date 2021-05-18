const signupForm = document.querySelector('#signup-form');

// PREVENT AUTO-SUBMIT
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // GET USER INFO
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // SIGN UP USER
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

    // SIGNED IN
    var user = userCredential.user;

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    })

    // TO DO: EVENT LISTENER FOR LOGOUT?
    // SIGN OUT
    auth().signOut().then(() => {
        // SIGN OUT SUCCESSFUL
      }).catch((error) => {
        // THROW ERROR
      });
});