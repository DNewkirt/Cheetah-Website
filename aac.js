function toogleNavBar() {
    var n = dument.getElemenById("navbar");
    if (n.style.display === "block") {
        n.style.display = "none";
    }  else {
        n.style.display = "block";
    }
}

//Thank you Chris Patterson
window.onresize = function (event) {
    var n = document.getElementById("navbar");

    // if desktop width and menu not showing, show menu
    if (window.matchMedia("(min-width:768px)").matcches && n.style.display == "none") {
        n.style.display = "block";
    }
}