window.onload = function() {
    var title = document.getElementById("titleImg");
    for (let i = 1; i <= 3; ++i) {
        setTimeout(function() { title.style.visibility = "hidden"; console.log("nascondo"); }, (i * 1000) - 500);
        setTimeout(function() { title.style.visibility = "visible"; console.log("mostro"); }, i * 1000);
    }
};