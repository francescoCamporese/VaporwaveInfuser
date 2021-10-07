function playPauseFun() {
    var aud = document.getElementById("music");
    var btn = document.getElementById("playPauseBtn");
    
    if (aud.paused) {
        aud.play();
        btn.innerHTML = "<img src=\"static/img/baseline_pause_white_24dp.png\">Pause";
    }
    else {
        aud.pause();
        btn.innerHTML = "<img src=\"static/img/baseline_play_arrow_white_24dp.png\">Play";
    }
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