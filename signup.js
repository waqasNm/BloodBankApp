const database = firebase.database().ref('/')

var firstName = document.getElementById('fname')
var lastName = document.getElementById('lname')
var email = document.getElementById('email')
var pass = document.getElementById('pswd')

function submit() {

    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        pass: pass.value
    }
    console.log(user)
    firebase.auth().
        createUserWithEmailAndPassword(user.email, user.pass)
        .then( (res) => {
            database.child(`users/${res.uid}`).set(user)
                .then( () => {
                    location = 'login/login.html'
                })
        })
        .catch( (error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

}