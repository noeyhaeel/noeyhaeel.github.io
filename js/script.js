// 홈페이지 버튼
var link = document.querySelectorAll(".hover_link");
var animateit = function (e) {
    var hover = this.querySelector(".hover");
    var { offsetX: x, offsetY: y } = e;
    var { offsetWidth: width, offsetHeight: height } = this;
    var move = 30;
    var xMove = (x / width) * (move * 2) - move;
    var yMove = (y / height) * (move * 2) - move;

    hover.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") {
        hover.style.transform = "";
    }
};

link.forEach((t) => t.addEventListener("mousemove", animateit));
link.forEach((t) => t.addEventListener("mouseleave", animateit));


// 다크모드
var css = document.querySelector("#css-link");
var darkModeYn = localStorage["darkMode"];

loadMode();

function loadMode(){
    if (darkModeYn == "Y"){
        css.setAttribute('href', "/css/dark-mode.css")
    } else {
        css.setAttribute('href', "/css/light-mode.css")
    }
}

function changeMode(){
    if (darkModeYn == "N"){
        localStorage["darkMode"] = 'Y' 
    } else {
        localStorage["darkMode"] = 'N'
    }

    location.reload(); // 웹페이지 새로고침
}



// 스크롤
window.onscroll = function() {
    var scrollButton = document.getElementById("pageBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.opacity = "1";
    } else {
        scrollButton.style.opacity = "0";
    }
};

document.querySelector('.scrolltop').onclick = function() {
    window.scrollTo(0, 0);
}