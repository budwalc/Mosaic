// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// Creates a REMOVE button and appends it to each list item
var myNodelist = document.getElementsByClassName("#myLI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var element = document.createElement("button");
  element.appendChild(document.createTextNode("Remove"));
  
  span.className = "close";
  span.appendChild(element);

  myNodelist[i].appendChild(span);
}

// Click on the REMOVE button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//Attempt to Strikethrough the text in the list when clicking on the checkbox.
var list = document.querySelector("#myUL");
list.addEventListener('click', function(ev) {
  if (ev.target.ClassName === '#myLI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item (li) when clicking on the "Add" button
function newElement() {
  
  var li = document.createElement("li");
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  x.className = "checkBox";
    
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  
  li.ClassName = "#myLI";
  li.appendChild(x); //Checkbox
  li.appendChild(t); //Text
  
  if (inputValue === '') {
    alert("Cannot Contain Empty Strings, please type in something");
  	} 
  else {
    document.getElementById("myUL").appendChild(li);
  	}
  
  document.getElementById("myInput").value = "";


// Creating the REMOVE button
  var span = document.createElement("SPAN");
  var element = document.createElement("button");
  element.className = "removeBtn";
  element.appendChild(document.createTextNode("Remove"));
  span.className = "close";
  span.appendChild(element);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    	close[i].onclick = function() {
      		var div = this.parentElement;
      		div.style.display = "none";
    	}
  	}
} // END OF newElement() function.
