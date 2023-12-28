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

window.onscroll = function () {
    var ele = document.getElementById('pageBtn');
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 300) {
        ele.classList.add('on');
    } else {
        ele.classList.remove('on');
    }
}