var totalDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<totalDrums;i++) {
    document.querySelectorAll(".drum")[0].addEventListener("click", function () {
        
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}