let video = document.querySelector("video");
 
let PlayButton = document.getElementById("play");

let PauseButton = document.getElementById("pause")

let playing = false;

PlayButton.addEventListener("click", function(){
 
    if (!playing) {
 
    video.play();
    playing = true;
    console.log(playing)
}});

PauseButton.addEventListener("click", function(){
 
    if (playing) {

    video.pause();
    playing = false;
    console.log(playing)
}});