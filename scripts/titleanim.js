function animateTitle() {
    var title = document.getElementById("titleImg");
    for (let i = 1; i <= 3; ++i) {
        setTimeout(function () { title.style.visibility = "hidden"; }, (i * 1000) - 500);
        setTimeout(function () { title.style.visibility = "visible"; }, i * 1000);
    }
};