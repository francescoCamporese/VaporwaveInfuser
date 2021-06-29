function selectBg(id) {
    var vid = document.getElementById("bgVid");
    var src = document.getElementById("bgSrc");
    src.src = "static/bg/" + id + ".mp4";
    vid.load();
    vid.play();
}

/*window.onload = function() {
    var fs = require("fs");
    var div = document.getElementById("bgDiv");
    console.log("test onload");
    fs.readdirSync("static/bg").forEach(name =>
    {
        var label = document.createElement("label");
        label.setAttribute("class", "btn btn-primary");
        label.setAttribute("id", "bglbl" + name);
        label.setAttribute("onclick", "selectBg(" + name + ");");
        
        var input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "bg");
        input.setAttribute("id", "bg" + "name");
        input.setAttribute("autocomplete", "off");
        input.innerHTML = name;
        
        label.appendChild(input);
        div.appendChild(label);
    });
    
    document.getElementById("bglbl1").ìsetAttribute("class", "btn btn-primary active");
    document.getElementById("bg1").checked = true;//testare
    selectBg(1);
}
*/