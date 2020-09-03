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

function myFunction(ham) {
    ham.classList.toggle("change");
}