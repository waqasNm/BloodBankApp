const database = firebase.database().ref('/')

const email = document.getElementById('inputEmail')
const pass = document.getElementById('inputPassword')

document.getElementById('stop')
    .addEventListener("submit",  (event) => {
        event.preventDefault()
        let user = {
            email: email.value,
            password: pass.value
        }

        console.log(user)

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                // console.log(res.uid)
                database.child(`users/${res.uid}`)
                    .once('value',  (snapshot) => {
                        // let convert = {};
                        let convert = {
                            name:snapshot.val().firstname + ' ' + snapshot.val().lastname,
                            email:snapshot.val().email,
                            uid:res.uid
                        }
                        // convert.uid = res.uid;
                        localStorage.setItem('loggedInUser', JSON.stringify(convert))
                        location = '../createPost/createpost.html'
                        console.log(`login successfull! :${convert}`)
                    })
            })
            .catch( (error) => {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

    })