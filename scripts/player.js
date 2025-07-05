var timer;
let currentSong = null;
let currentPosition = 0;
const streamURL = "https://radio.plaza.one/mp3";
const apiURL = "proxy.php";

const interval = setInterval(GetAnswers, 1000);

function GetAnswers() {
    var titleElem = document.getElementById("title");
    var artistElem = document.getElementById("artist");
    var albumElem = document.getElementById("album");

    if (!currentSong || currentPosition >= currentSong.length) {
        fetch(apiURL)
            .then(response => {
                if (response.ok)
                    return response.json();
                throw new Error("Network response was not ok");
            })
            .then(data => {
                const { artist, title, album, position, length, artwork_src } = data.song;
                const songData = {
                    artist,
                    title,
                    album,
                    position,
                    length,
                    artwork_src,
                };

                currentSong = songData;
                currentPosition = songData.position;

                titleElem.innerHTML = songData.title;

                artistElem.innerHTML = songData.artist;

                albumElem.src = songData.artwork_src;
                albumElem.title = "Album: " + songData.album + " (click to play/pause)";
            })
            .catch(error => {
                console.error(error);

                titleElem.innerHTML = "";

                artistElem.innerHTML = "";

                albumElem.removeAttribute("src");
                albumElem.title = "Album not found (click to play/pause)";
            });
    } else
        currentPosition += 1;
};

function playPauseFun() {
    var aud = document.getElementById("music");
    var albumElem = document.getElementById("album");

    if (aud.paused) {
        aud.play();
        albumElem.classList.add("playing");
        albumElem.classList.remove("paused");
    }
    else {
        aud.pause();
        albumElem.classList.add("paused");
        albumElem.classList.remove("playing");
    }
}

function resetTimer() {
    var setTimerBtn = document.getElementById("setTimerBtn");

    clearTimeout(timer);
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
        }, parseInt(putValue, 10) * 60000);
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
    resetTimer();
    setTimerBtn.disabled = true;
}

function whenPlayed() {
    setTimerBtn.disabled = false;
}