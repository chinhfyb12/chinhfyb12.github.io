var span1 = document.querySelector('.container-list-menu > span');

function display() {
    span1.style.display = "block";
    document.getElementsByClassName('bars')[0].style.display = "none";
    document.getElementsByClassName('close')[0].style.display = "block";
    document.getElementsByClassName('main-profile')[0].style.transform = "translate(-10px, 0)";
}
function hide() {
    span1.style.display = "none";
    document.getElementsByClassName('bars')[0].style.display = "block";
    document.getElementsByClassName('close')[0].style.display = "none";
    document.getElementsByClassName('main-profile')[0].style.transform = "translate(-275px, 0)";
}

function hide_2 () {
    if(widthSc < 600) {
        hide();
    }
}