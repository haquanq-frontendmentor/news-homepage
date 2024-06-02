const menuButton = document.querySelector("#btn-hamburger");
const navLink = document.querySelector(".menu-container");

let isNavOpen = false;

menuButton.addEventListener("click", (e) => {
    isNavOpen = !isNavOpen;
    menuButton.classList.toggle("open");
    navLink.classList.toggle("open");
    document.querySelector("body").style.overflow = isNavOpen ? "hidden" : null;
});

window.addEventListener("resize", (e) => {
    if (window.matchMedia("(min-width: 768px)").matches && isNavOpen) {
        console.log("Awd");
        isNavOpen = !isNavOpen;
        menuButton.classList.remove("open");
        navLink.classList.remove("open");
        document.querySelector("body").style.overflow = null;
    }
});
