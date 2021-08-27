function selectBg(id) {
    var src = document.getElementById("bgSrc");
    if (src.getAttribute("src").localeCompare("static/bg/" + id + ".webm")) {    
        var vid = document.getElementById("bgVid");
        src.src = "static/bg/" + id + ".webm";
        vid.load();
        vid.play();
    }
}