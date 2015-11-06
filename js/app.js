// getting a dom element
var titleElement = document.getElementById('title');
// console.log(titleElement.innerHTML);

// styling a dom element
titleElement.style.color = '#0033FF';

// adding event listeners to a dom element
// EventTarget.addEventListener()
// target.addEventListener(type, listener[, useCapture]);

// click
titleElement.addEventListener('click', function(){
	title.style.color = '#FFAAAA';
});

// mouseover
var subtitle = document.getElementById('subtitle');
subtitle.addEventListener('mouseover', function(){
	subtitle.style.backgroundColor = '#FFA1A1';
});

// mouseout
subtitle.addEventListener('mouseout', function(){
	subtitle.style.backgroundColor = 'inherit';
});

// hide
var starstuff = document.getElementsByClassName('sub_nav')[0];

// hide the subnav under "Star Stuff"
starstuff.querySelectorAll('ul')[0].style.display = 'none';

// show
starstuff.addEventListener('mouseover', function(){
	starstuff.querySelectorAll('ul')[0].style.display = 'block';
});

// hide again
starstuff.addEventListener('mouseout', function(){
	starstuff.querySelectorAll('ul')[0].style.display = 'none';
});

// add

// select the parent element to add to
var parentNavList = document.querySelector('nav ul');

// create a new element
var loginChild = document.createElement('li');
loginChild.innerHTML = 'login';

// add the new element to the parent element
parentNavList.appendChild(loginChild);

// every time you click on some element
// add a new "<li>cat</li>"

var heartsOfStars = document.querySelector('header h2');

heartsOfStars.addEventListener('click', function (){
	var catParent = document.querySelector('nav ul');
	var catChild = document.createElement('li');
	catChild.innerHTML = 'cat';
	catParent.appendChild(catChild);
});

// querySelectorAll - selects all elements in the 
// querySelector - 