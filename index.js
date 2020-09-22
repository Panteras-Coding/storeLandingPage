function scrollFunction() {
    let header = document.getElementById("header");
    let bar = document.getElementById('socBar')

    if (document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "rgba(134, 125, 108,0.8)";
        bar.style.backgroundColor = "rgba(134, 125, 108,0.8)";
    } else {
        header.style.backgroundColor = "transparent";
        bar.style.backgroundColor = "transparent";
    }
}

window.onscroll = function() {scrollFunction()};

let isNavClosed = true;
let overlay = document.getElementById('overlay');
let ham = document.getElementById("ham")

function openSideBarMenu() {
    ham.classList.toggle("change");

    if(isNavClosed){
        overlay.style.transform = "translateX(0)";
        isNavClosed = false
    } else {
        overlay.style.transform = "translateX(100%)";
        isNavClosed = true
    }
}

