var imgP = document.querySelector('.main-profile .main-name > img');
var h3P = document.querySelector('.main-profile .main-name > h3');
var pP = document.querySelector('.main-profile .main-name > p');
var Profile = document.getElementsByClassName('main-profile')[0];
var menuP = document.getElementsByClassName('main-menu')[0];
var mxhP = document.getElementsByClassName('list-mxh')[0];
var widthSc = screen.width;

function fullProfile() {
    if(widthSc > 600) {
        imgP.style.width = "63px";
    imgP.style.height = "63px";
    imgP.style.transform = "translateX(0)";

    h3P.style.transform = "translateX(0)";

    pP.style.transform = "translateX(0)";

    mxhP.style.transform = "translateX(0)";

    Profile.style.height = "490px";

    menuP.style.animationName = "amt-main-menu";
    menuP.style.opacity = "1";
    }
}

function notFullProfile() {
    if(widthSc > 600) {
        menuP.style.animationName = "none";
        menuP.style.opacity = "0";

        imgP.style.width = "85px";
        imgP.style.height = "85px";
        imgP.style.transform = "translateX(62px)";

        h3P.style.transform = "translateX(27px)";

        pP.style.transform = "translateX(40px)";

        mxhP.style.transform = "translateX(50px)";

        Profile.style.height = "265px";
    } 
}