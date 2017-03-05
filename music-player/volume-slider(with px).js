//Using px requires a one less div than using percentage
/*
OVERVIEW : 
vol_container is a container that contain vol_thumb and vol_bar
vol_thumb is a moveable circle
vol_bar is a bar that covers the container and follows the thumb
*/

//Declare the 3 important variables first
var vol_thumb = document.getElementById('vol_thumb');
var vol_container = document.getElementById('vol_container');
var vol_bar = document.getElementById('vol_bar');

//Add eventListeners to listen to any events

/*Reason why I use window.addEventListener instead of thumb.addEventListener for mouseup is so that I can release my mouse 
anywhere on the page instead of releasing on the thumb; the event listener will continue to run unless use inside the thumb*/

window.addEventListener('mouseup',function(){
window.removeEventListener('mousemove', volumeSlider,true);
}, false);

vol_thumb.addEventListener('mousedown',function(){
window.addEventListener('mousemove', volumeSlider, true);
}, false);

vol_container.addEventListener('click',volumeSlider, false);

function volumeSlider(e){
//PreventDefault is used to prevent any text from getting selected.
e.preventDefault();

/*e.pageX gets the screen width so we need to minus vol_container offset to get 0 which is important for the slider to work. 
7.5 is minus to set the mouse to center of the thumb*/

var direction = Math.ceil((e.pageX - vol_container.offsetLeft - 7.5));

//Set condition
direction < 0 ? direction = 0 : direction = direction;
direction > vol_container.offsetWidth - vol_thumb.offsetWidth? direction = vol_container.offsetWidth - vol_thumb.offsetWidth : direction = direction;

vol_thumb.style.left = direction + 'px';
vol_bar.style.width = direction + 7.5 + 'px';

}
