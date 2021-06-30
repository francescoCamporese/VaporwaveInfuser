function selectBg(id) {
    var src = document.getElementById("bgSrc");
    if (src.getAttribute("src").localeCompare("static/bg/" + id + ".mp4")) {    
        var vid = document.getElementById("bgVid");
        src.src = "static/bg/" + id + ".mp4";
        vid.load();
        vid.play();
    }
}

/*window.onload = function() {
    var fs = require("fs");
    var div = document.getElementById("bgDiv");
    console.log("test onload");
    fs.readdirSync("static/bg").forEach(name =>
    {
        var label = document.createElement("label");
        label.setAttribute("class", "btn bg-transparent btn-lg text-white");
        label.setAttribute("id", "bglbl" + name);
        label.setAttribute("onclick", "selectBg(" + name + ");");
        
        var input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "bg");
        input.setAttribute("id", "bg" + "name");
        input.setAttribute("autocomplete", "off");
        input.innerHTML = "<img src=\"static/img/98pc24dp.png\"><br>" + id;
        
        label.appendChild(input);
        div.appendChild(label);
    });
    
    document.getElementById("bglbl1").setAttribute("class", "btn bg-transparent btn-lg text-white active");
    document.getElementById("bg1").checked = true;//testare
    selectBg(1);
}*/
