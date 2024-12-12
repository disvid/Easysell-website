var i = 0;

function show_hide() {
    if (i == 1) {
        document.querySelector('.main-nav').style.display = "flex";
        return i = 0;
    } else {
        document.querySelector('.main-nav').style.display = "none";
        return i = 1;
    }
}