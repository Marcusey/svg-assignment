function animateSVG() {
    var eyeLeft = document.getElementById("eye-left");
    var eyeRight = document.getElementById("eye-right");
    var mouth = document.getElementById("mouth");

    eyeLeft.style.animation = "spin-clockwise 4s linear infinite";
    eyeRight.style.animation = "spin-counterclockwise 4s linear infinite";
}

document.addEventListener("DOMContentLoaded", animateSVG);
