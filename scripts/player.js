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