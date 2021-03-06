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
		NumOfUnits:units.value,
		urgency:urgency.value,
		country:country.value,
		city:city.value,
		hospital:hospital.value,
		relation:relation.value,
		contact:contact.value,
		info:info.value,
		postedBy:user.name
	}
	console.log(postObj)	
	database.child(`BloodPosts/${user.uid}`).push(postObj)

	bg.value = "Blood Group";
	units.value = "";
	urgency.value = "Urgency";
	country.value = "Country";
	city.value = "City";
	hospital.value = "Hospital";
	relation.value = "";
	contact.value = "";
	info.value = "";

}