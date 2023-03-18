var secondsTag = document.getElementById("seconds");
var tensTag = document.getElementById("tens");
var minutesTag = document.getElementById("minutes");
var minutes = 0;
var seconds = 0;
var tens = 0;
var interval;

function start() {
    clearInterval(interval);
    interval = setInterval(timer, 10)
}
function timer() {
    tens += 1;
    if (tens > 99) {
        seconds += 1;
        tens = 0;
    }
    if (seconds>59){
        minutes+=1
        seconds=0
    }
    inner()
}
function inner() {
    minutesTag.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    secondsTag.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    tensTag.innerHTML = tens < 10 ? "0" + tens : tens;
}

function stop() {
    clearInterval(interval);
}
function reset() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    tens = 0;
    inner()
}
document.getElementById("button-start").onclick = start;
document.getElementById("button-stop").onclick = stop;
document.getElementById("button-reset").onclick = reset;