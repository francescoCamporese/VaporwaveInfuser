function playPauseFun() {
    var aud = document.getElementById("music");
    
    if (aud.paused)
        aud.play();
    else
        aud.pause();
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
    document.getElementById("playPauseBtn").innerHTML = "<img src=\"static/img/baseline_play_arrow_white_24dp.png\">Play";
}

function whenPlayed() {
    document.getElementById("playPauseBtn").innerHTML = "<img src=\"static/img/baseline_pause_white_24dp.png\">Pause";
}