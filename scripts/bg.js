function selectBg(id) {
    var src = document.getElementById("bgSrc");
    if (src.getAttribute("src").localeCompare("static/bg/" + id + ".mp4")) {
        var prevBgSrc = document.getElementById("bgSrc").src;
        var prevId = prevBgSrc.substring(prevBgSrc.lastIndexOf("/") + 1, prevBgSrc.lastIndexOf("."));
        var prevIco = document.getElementById("icobg" + prevId);
        prevIco.src = "static/img/98pc24dp.webp";

        var clicked = document.getElementById("icobg" + id);
        clicked.src = "static/img/gbasp24dp.webp";

        var vid = document.getElementById("bgVid");
        src.src = "static/bg/" + id + ".mp4";
        vid.load();
        vid.play();
    }
}

function hideUi() {
    var playerDiv = document.getElementById("playerDiv");
    var bgDiv = document.getElementById("bgDiv");
    var aboutBtn = document.getElementById("aboutBtn");
    var castBtn = document.getElementById("castBtn");

    if (playerDiv.hidden) {
        playerDiv.hidden = false;
        bgDiv.hidden = false;
        aboutBtn.hidden = false;
        castBtn.hidden = false;
    }
    else {
        playerDiv.hidden = true;
        bgDiv.hidden = true;
        aboutBtn.hidden = true;
        castBtn.hidden = true;
    }
}