var allowed_keys = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL"];

window.addEventListener('keydown', function(event){
    	var keyCode = event.code;
    	if (!allowed_keys.includes(keyCode)) return;
    	event.preventDefault();
    	event.stopPropagation();
    	playAudio(keyCode)
});

var drums = document.getElementsByClassName("drum");
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', function(){
    	var keyCode = this.getAttribute("data-key");
    	playAudio(keyCode); 
    }, false);
}

function playAudio(keyCode) { 
	
	var note = document.querySelector("audio[data-key='"+keyCode+"']");
	var drum = document.querySelector(".drum[data-key='"+keyCode+"']");
	note.currentTime = 0;  //Sets current position of playback to 0. So the sound restarts if its still playing.
	drum.classList.add("playing");
	setTimeout(function(){
		drum.classList.remove("playing");
	}, 50)
	note.play();
} 