var listMenu = document.querySelectorAll('.main-profile .main-menu .list-menu > li');
var aboutC = document.getElementsByClassName('container-about')[0];
var skillC_title = document.querySelector('.container-skill > h3');
var skillC_detail = document.querySelectorAll('.container-skill .skill-detail .detail');
var contact_title = document.querySelector('.container-contact > h3');
var contact_list = document.querySelectorAll('.list-contact > div');

function choose (x) {
    for(let i = 0; i < 5; i++) {
        listMenu[i].removeAttribute('class');
    }
    x.setAttribute("class", "active");
}

function moveEle() {
    if(widthSc > 600) {
        //toTop
        if(window.pageYOffset < 250) {
                document.getElementsByClassName('toTop')[0].style.opacity = "0";
        }
        if(window.pageYOffset >= 250) {
                document.getElementsByClassName('toTop')[0].style.opacity = "1";
        }
         //home
        if(window.pageYOffset >= 27 && window.pageYOffset <= 200) {
                choose(listMenu[0]);
        }
        //about
        if(window.pageYOffset >= 477 && window.pageYOffset <= 500) {
                choose(listMenu[1]);
        }
        if(window.pageYOffset >= 300 ) {
        aboutC.style.animationName = "amt-about";
        setTimeout(() => {
                aboutC.style.opacity = "1";
        }, 1000);
        }
        //skill
        if(window.pageYOffset >= 972 && window.pageYOffset <= 1100) {
                choose(listMenu[2]);
        }
        if(window.pageYOffset >= 860) {
        skillC_title.style.animationName = "amt-skill-title";
        setTimeout(function title() {
                skillC_title.style.opacity = "1";
        }, 1000);
        for(let i  = 0; i < 6; i++){
                setTimeout(() => {
                        skillC_detail[i].style.animationName = "amt-skill-detail";
                        skillC_detail[i].style.opacity = "1";
                }, 300*i);
        }
        }
        //exp
        if(window.pageYOffset >= 1477 && window.pageYOffset <= 1600) {
                choose(listMenu[3]);
        }
        if(window.pageYOffset >= 1300) {
                document.getElementsByClassName('icon-exp')[0].style.opacity = "1";
                document.querySelector('.container-exp > h3').style.animationName = "amt-exp-title";
                document.getElementsByClassName('detail-exp')[0].style.animationName = "amt-exp-detail";
                document.querySelector('.container-exp .tree-exp .tree > span').style.animationName = "amt-exp-tree";
                setTimeout(() =>{
                document.querySelector('.container-exp > h3').style.opacity = "1";
                document.getElementsByClassName('detail-exp')[0].style.opacity = "1";
                document.querySelector('.container-exp .tree-exp .tree > span').style.opacity = "1";  
                document.getElementsByClassName('ano-exp')[0].style.opacity = "1";
                }, 1000);
        }
        //contact
        if(window.pageYOffset >= 1982) {
                choose(listMenu[4]);
        }
        if(window.pageYOffset >= 1850) {
        contact_title.style.animationName = "amt-con-title";
        contact_title.style.opacity = "1";
        for(let i = 0; i< 3; i++){
                setTimeout(() => {
                        contact_list[i].style.animationName = "amt-con-list";
                        contact_list[i].style.opacity = "1";
                }, 300*i);
        }
        }
    }
    if(widthSc <= 600) {
        //toTop
        if(window.pageYOffset < 250) {
                document.getElementsByClassName('toTop')[0].style.opacity = "0";
        }
        if(window.pageYOffset >= 250) {
                document.getElementsByClassName('toTop')[0].style.opacity = "1";
        }
             //home
        if(window.pageYOffset >= 50 && window.pageYOffset <= 150) {
                choose(listMenu[0]);

        }
        //about
        if(window.pageYOffset >= 330 && window.pageYOffset <= 400) {
                choose(listMenu[1]);
        }
        if(window.pageYOffset >= 130 ) {
        aboutC.style.animationName = "amt-about";
        setTimeout(() => {
                aboutC.style.opacity = "1";
        }, 1000);
        }
        //skill
        if(window.pageYOffset >= 760 && window.pageYOffset <= 1100) {
                choose(listMenu[2]);
        }
        if(window.pageYOffset >= 650) {
        skillC_title.style.animationName = "amt-skill-title";
        setTimeout(function title() {
                skillC_title.style.opacity = "1";
        }, 1000);
        for(let i  = 0; i < 6; i++){
                setTimeout(() => {
                        skillC_detail[i].style.animationName = "amt-skill-detail";
                        skillC_detail[i].style.opacity = "1";
                }, 300*i);
        }
        }
        //exp
        if(window.pageYOffset >= 1465 && window.pageYOffset <= 1600) {
                choose(listMenu[3]);
        }
        if(window.pageYOffset >= 1200) {
                document.getElementsByClassName('icon-exp')[0].style.opacity = "1";
                document.querySelector('.container-exp > h3').style.animationName = "amt-exp-title";
                document.getElementsByClassName('detail-exp')[0].style.animationName = "amt-exp-detail";
                document.querySelector('.container-exp .tree-exp .tree > span').style.animationName = "amt-exp-tree";
                setTimeout(() =>{
                document.querySelector('.container-exp > h3').style.opacity = "1";
                document.getElementsByClassName('detail-exp')[0].style.opacity = "1";
                document.querySelector('.container-exp .tree-exp .tree > span').style.opacity = "1";  
                document.getElementsByClassName('ano-exp')[0].style.opacity = "1";
                }, 1000);
        }
        //contact
        if(window.pageYOffset >= 1880) {
                choose(listMenu[4]);
        }
        if(window.pageYOffset >= 1600) {
        contact_title.style.animationName = "amt-con-title";
        contact_title.style.opacity = "1";
        for(let i = 0; i< 3; i++){
                setTimeout(() => {
                        contact_list[i].style.animationName = "amt-con-list";
                        contact_list[i].style.opacity = "1";
                }, 300*i);
        }
        }
    }
}
