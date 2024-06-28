/*  ==========
    Btn Contact
    ========== */

    const contact = document.querySelector('.contact');
    const withUs = document.querySelector('.withUs h1');
    const contactTxt = document.querySelector('.contact p');
    
    contact.addEventListener("mouseover", () => {
        withUs.classList.add("contact-btn-hover");
        contactTxt.classList.add("contact-btn-hover");
    });
    
    contact.addEventListener("mouseout", () => {
        withUs.classList.remove("contact-btn-hover");
        contactTxt.classList.remove("contact-btn-hover");
    });