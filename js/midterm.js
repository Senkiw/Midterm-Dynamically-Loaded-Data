var loadBtn;
var showBtn;
var myData = [];
var x = 0;
//var clicks = 0;
var outputTwo = document.querySelector("#output2");

document.addEventListener("DOMContentLoaded", starter);

function starter() {
	loadBtn = document.getElementById("loadBtn");
 	showBtn = document.getElementById("showBtn");
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
    
    }
   // onClick();
  // if (x > 1) {
   	//outputTwo.removeChild(outputTwo.firstChild)
   //}
   outputTwo.removeChild(outputTwo.firstChild);
}

//function onClick(){
	//clicks ++;
	//document.getElementById("showBtn");
	//console.log(clicks);
	//if (clicks >= 0) {
	//	outputTwo.removeChild(outputTwo.firstChild);
	//}
//}; 

//var div = document.createElement("div");
//var outputTwo = doucment.querySelector("#output2");


//if (onClick >= 0){
//	outputTwo.removeChild(outputTwo.firstChild);
//} 


//var myString = 

// appends the top div after it adds a third div??
// capitalize first and last name
// for (i=0; i<3; i++) {myArray[count-i]};



