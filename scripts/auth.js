// GET SIGNED IN USER
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log(user);
  } else {
    // no user is signed in
    console.log("no one is signed in");
  }
});

// ----SIGN UP----
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
    console.log("signed up!")
    // SIGNED IN
    var user = userCredential.user;
    
    // CLOSE MODAL
    const modal = document.querySelector("#modal-signup");
    modal.style.display = "none";
    signupForm.reset();

    // MATERIALIZE
    // MSAssertion.Modal.getInstance(modal).close();
    

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    })
});

// ----SIGN IN----
// ADD EVENT LISTENER
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  // PREVENT REFRESH
  e.preventDefault();

  // GET USER INFO
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // SIGN IN
  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // SIGNED IN
    console.log("logged in!")
    var user = userCredential.user;

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  })


  // CLOSE MODAL
  const modal = document.querySelector("#modal-login");
  modal.style.display = "none";
  signupForm.reset();
})

// ----LOGOUT----
const logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', (e) => {
  e.preventDefault();

  auth.signOut().then(() => {
    // Sign-out successful.
    console.log('sign out successful');
  }).catch((error) => {
    // An error happened.
  });
});

