let video = document.querySelector("video");
 
let PlayButton = document.getElementById("play");

let PauseButton = document.getElementById("pause")

let playing = false;


PlayButton.addEventListener("click", function(){
 
    if (!playing) {
 
    video.play();
    playing = true;
    console.log(playing);

    // setInterval(() => {console.log(Math.round(video.currentTime)+'s')
    //     },1000);
    
}});

PauseButton.addEventListener("click", function(){
 
    if (playing) {

    video.pause();
    playing = false;
    console.log(playing);  
}});

////////////////////// DURACIÓN DEL VIDEO //////////////////////////////

video.addEventListener("timeupdate", function(){
 
    let currentVideoTime = video.currentTime;
    let currentMin = Math.floor(currentVideoTime / 60);
    let currentSec = Math.floor(currentVideoTime % 60);
     
    const videoDuration = video.duration;
    const durationMin = Math.floor(videoDuration / 60);
    const durationSec = Math.floor(videoDuration % 60);

    currentSec < 10 ? (currentSec = "0" + currentSec) : currentSec;
    
    document.getElementById('video-time').innerHTML= `${currentMin}:${currentSec} / ${durationMin}:${durationSec}`;
});