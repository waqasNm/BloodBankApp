const database = firebase.database().ref('/')

const user = JSON.parse(localStorage.getItem('loggedInUser'));
console.log(user);

const bg = document.getElementById('bg');
const units = document.getElementById('units');
const urgency = document.getElementById('urgency');
const country = document.getElementById('country');
const city = document.getElementById('city');
const hospital = document.getElementById('hospital');
const relation = document.getElementById('relation');
const contact = document.getElementById('contact');
const info = document.getElementById('info');

function submitPost(){

	const postObj = {
		bloodGroup:bg.value,
		units:units.value,
		urgency:urgency.value,
		country:country.value,
		city:city.value,
		hospital:hospital.value,
		relation:relation.value,
		contact:contact.value,
		info:info.value,
	}
	console.log(postObj)	
	database.child(`BloodPosts/${user.uid}`).push(postObj)

}