/* =======
Hero Animations
   ======= */ 

const iconMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container');
const exit = document.querySelector('.exit');
const options = document.querySelector('.options');
const footer = document.querySelector('.footer');
const intro = document.querySelector('.introduction');
const local = document.querySelector('.local');
const localContact = document.querySelector('.local-contact');

iconMenu.addEventListener("click", () => {
    menuContainer.classList.remove("exit-animation");
    menuContainer.classList.add("menu-animation");

    exit.classList.remove("exit-icon-animation");
    options.classList.remove("exit-options-animation");

    footer.classList.add("unvisibility");
    intro.classList.add("unvisibility");
    local.classList.add("unvisibility");
    localContact.classList.add("unvisibility");

    menu.classList.remove("unvisibility");
    menu.classList.add("visibility");
});

exit.addEventListener("click", () => {
    menuContainer.classList.remove("menu-animation");
    menuContainer.classList.add("exit-animation");
    exit.classList.add("exit-icon-animation");
    options.classList.add("exit-options-animation");

    setTimeout(() => {
        footer.classList.remove("unvisibility");
        intro.classList.remove("unvisibility");
        local.classList.remove("unvisibility");
        localContact.classList.remove("unvisibility");

        menu.classList.remove("visibility");
        menu.classList.add("unvisibility");
    }, 1000)
});

/* ==========
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