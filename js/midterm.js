var loadBtn;
var showBtn;
var myData = [];
var x = 0;
var outputTwo

document.addEventListener("DOMContentLoaded", starter);

function starter() {
	loadBtn = document.getElementById("loadBtn");
 	showBtn = document.getElementById("showBtn");
 	outputTwo = document.querySelector("#output2");
	loadBtn.addEventListener("click", clickBtn);
}

function clickBtn() {
	changeClass();
	callJSON();
}

function changeClass() {
	loadBtn.className = "btn disabled";
	showBtn.className = "btn enabled";
}

function callJSON() {
    var req = new XMLHttpRequest();

req.open('GET', 'http://localhost:3000/Desktop/Midterm-Dynamically-Loaded-Data/users.json', true);

req.onreadystatechange = function() {
	if ( req.readyState === 4){
		if( req.status === 200){
//		console.log(req.responseText);

		myData = JSON.parse(req.responseText);

		console.log(myData);
		}
	}
}

req.send(null);
loadBtn.removeEventListener("click", clickBtn);
displayData();
}

function displayData() {
	showBtn.addEventListener("click", loadOne);
}

function loadOne() { 
	showBtn.innerHTML = "Show Next";
    console.log(x);
	document.querySelector("#output1").innerHTML =
	'<img src=' + myData[x].image + '>' +
	'<h2>' + myData[x].firstName + ' ' + myData[x].lastName + '</h2>' +
	'<a href="mailto:' + myData[x].email +'">' + myData[x].email + '</a>';
	x++;
	if (x > 1) {
        document.querySelector("#output2").innerHTML +=
		'<div><img src=' + myData[x - 2].thumbnail + '>' +
		'<a href="mailto:' + myData[x - 2].email + '">' +
		myData[x - 2].firstName + ' ' + myData[x - 2].lastName + '</a></div>';
    	outputTwo.removeChild(outputTwo.firstChild);
    }
}