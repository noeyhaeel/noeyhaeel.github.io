gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
    });

    ScrollTrigger.refresh();
});

const link = document.querySelectorAll(".hover_link");
const animateit = function (e) {
    const hover = this.querySelector(".hover");
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = this;
    const move = 30;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    hover.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") {
        hover.style.transform = "";
    }
};

link.forEach((t) => t.addEventListener("mousemove", animateit));
link.forEach((t) => t.addEventListener("mouseleave", animateit));