var video = document.getElementById("player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function(){
 console.log("Play Video");
 video.play()
 document.getElementById("volume").innerHTML = video.volume * 100 + "%"
 });

document.querySelector("#pause").addEventListener("click", function(){
 console.log("Pause Video");
 video.pause()
});

document.querySelector("#pause").addEventListener("click", function(){
console.log("Pause Video");
video.pause()
}); 

document.querySelector("#vintage").addEventListener("click", function(){
console.log("Change CSS");
video.classList.add("oldSchool")
}); 

document.querySelector("#orig").addEventListener("click", function(){
console.log("Change CSS");
video.classList.remove("oldSchool")
}); 



document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
});

