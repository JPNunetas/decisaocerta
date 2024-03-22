/* =======
Hero Animations
   ======= */ 

const iconMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const exit = document.querySelector('.exit');
const options = document.querySelector('.options');
const footer = document.querySelector('.footer');

iconMenu.addEventListener("click", () => {
    menu.classList.remove("exit-animation");
    menu.classList.add("menu-animation");

    exit.classList.remove("exit-icon-animation");
    options.classList.remove("exit-options-animation");

    footer.classList.add("unvisibility");

    menu.classList.remove("unvisibility");
    menu.classList.add("visibility");
});

exit.addEventListener("click", () => {
    menu.classList.remove("menu-animation");
    menu.classList.add("exit-animation");
    exit.classList.add("exit-icon-animation");
    options.classList.add("exit-options-animation");

    footer.classList.remove("unvisibility");

    setTimeout(() => {
        menu.classList.remove("visibility");
        menu.classList.add("unvisibility");
    }, 1000)
});

/*  ==========
    Btn Contact
    ========== */

const contactBtn = document.querySelector('.contact-btn');
const heroTitle = document.querySelector('.hero-title h1');
const btnTxt = document.querySelector('.contact-btn p');

contactBtn.addEventListener("mouseover", () => {
    heroTitle.classList.add("contact-btn-hover");
    btnTxt.classList.add("contact-btn-hover");
});

contactBtn.addEventListener("mouseout", () => {
    heroTitle.classList.remove("contact-btn-hover");
    btnTxt.classList.remove("contact-btn-hover");
});