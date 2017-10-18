var database = firebase.database().ref('/');
var body = document.getElementById('body');

database.child('BloodPosts').on('child_added', function(snapshot){
    var demo = snapshot.val();

    for(var key in demo){
        var element = demo[key];
        element.Id = key;

        console.log(element);

var container = document.createElement("DIV");
container.setAttribute("class","container");
var div1 = document.createElement("DIV");
div1.setAttribute("class","card");
div1.setAttribute("id", element.Id)
div1.setAttribute("style","margin-bottom:10px");
var div2 = document.createElement("DIV");
div2.setAttribute("class","card-body");
var h4 = document.createElement("H4");
h4.setAttribute("class","card-title");
var p = document.createElement("P");
p.setAttribute("class","card-text");

var p1 = document.createElement("P");
p1.setAttribute("class","card-text");
/*var input = document.createElement("INPUT");
input.setAttribute("placeholder","comment here");
input.setAttribute("id","input");*/
var btn = document.createElement("BUTTON");
btn.setAttribute("class","btn btn-info")

var textBtn = document.createTextNode("Volunteer");
btn.appendChild(textBtn);
/*btn.addEventListener('click',function(){
     var commentObj = {
            sender: loggedIN.firstName + loggedIN.lastName,
            comment: input.value,
            postId: obj.id
        }
        // console.log(commentObj)
        database.child('comments').push(commentObj)
})*/

var commentList = document.createElement("DIV");

var textH4 = document.createTextNode(`${element.NumOfUnits} Units of Blood Group "${element.bloodGroup}" is Required in ${element.urgency}`);
var textP = document.createTextNode(`Location : ${element.hospital} ${element.city} ${element.country} ` );
var textP1 = document.createTextNode(`Posted By : ${element.postedBy}`)

h4.appendChild(textH4)
p.appendChild(textP)
p1.appendChild(textP1)
div2.appendChild(h4)
div2.appendChild(p)
div2.appendChild(p1)
// div2.appendChild(input)
div2.appendChild(btn)
container.appendChild(div2)
div1.appendChild(container)
div1.appendChild(commentList)

body.appendChild(div1);
    }
})


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})