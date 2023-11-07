gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
});

const box = document.querySelector("header");
// ScrollTrigger.create({
//     trigger: el,
//     onToggle: self => self.isActive && gsap.to(box, {width: widths[i], duration: 3, overwrite: true, ease: "power1"}),
//     start: "top 5%",
//     end: "bottom 15%",
//     markers: true
// });
window.addEventListener("load", function () {
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    // Pinning and horizontal scrolling

    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scroller: pageContainer, //locomotive-scroll
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
});

const link = document.querySelectorAll(".hover_link");
const animateit = function (e) {
    const hover = this.querySelector(".hover");
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = this;
    const move = 20;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    hover.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") {
        hover.style.transform = "";
    }
};

link.forEach((t) => t.addEventListener("mousemove", animateit));
link.forEach((t) => t.addEventListener("mouseleave", animateit));