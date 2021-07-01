function selectBg(id) {
    var src = document.getElementById("bgSrc");
    if (src.getAttribute("src").localeCompare("static/bg/" + id + ".mp4")) {    
        var vid = document.getElementById("bgVid");
        src.src = "static/bg/" + id + ".mp4";
        vid.load();
        vid.play();
    }
}