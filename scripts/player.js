var timer;

function playPauseFun() {
    var aud = document.getElementById("music");
    
    if (aud.paused)
        aud.play();
    else
        aud.pause();
}

function resetTimer() {
    var setTimerBtn = document.getElementById("setTimerBtn");
    
    setTimerBtn.setAttribute("data-minutes", "Set timer");
    setTimerBtn.innerHTML = "<img src=\"static/img/outline_timer_white_24dp.webp\" width=\"24\" height=\"24\">Set timer";
}

function setTimer() {
    var setTimerBtn = document.getElementById("setTimerBtn");
    var val = setTimerBtn.getAttribute("data-minutes");
    var putValue = null;
    
    switch (val) {
        case "Set timer":
            putValue = "15min";
            break;
        case "15min":
            putValue = "30min";
            break;
        case "30min":
            putValue = "45min";
            break;
        case "45min":
            putValue = "60min";
            break;
        case "60min":
            putValue = "Set timer";
            break;
    }
    setTimerBtn.setAttribute("data-minutes", putValue);
    setTimerBtn.innerHTML = "<img src=\"static/img/outline_timer_white_24dp.webp\" width=\"24\" height=\"24\">" + putValue;
        
    clearTimeout(timer);
    if (putValue != "Set timer")
        timer = setTimeout(() => {
            document.getElementById("music").pause();
            resetTimer();
        }, parseInt(putValue, 10) * 1000);
}

function setVolume(val) {
    var aud = document.getElementById("music");
    var down = document.getElementById("volumeDownBtn");
    var up = document.getElementById("volumeUpBtn");
        
    aud.volume = ((aud.volume * 100) + val) / 100;
    
    switch (aud.volume) {
        case 0:
            down.disabled = true;
            break;
        case 1:
            up.disabled = true;
            break;
        default:
            down.disabled = false;
            up.disabled = false;
            break;
    }
}

function whenPaused() {
    document.getElementById("playPauseBtn").innerHTML = "<img src=\"static/img/baseline_play_arrow_white_24dp.webp\" width=\"24\" height=\"24\">Play";
    resetTimer();
    setTimerBtn.disabled = true;
}

function whenPlayed() {
    document.getElementById("playPauseBtn").innerHTML = "<img src=\"static/img/baseline_pause_white_24dp.webp\" width=\"24\" height=\"24\">Pause";
    setTimerBtn.disabled = false;
}