/* ==========================================================
   SHREYA SINGU | DATA ANALYST PORTFOLIO
   Professional Portfolio JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       1. PAGE LOADING
    ====================================================== */

    document.body.classList.add("page-loaded");


    /* ======================================================
       2. SMOOTH SCROLLING
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* ======================================================
       3. ACTIVE NAVIGATION
    ====================================================== */

    const navLinks = document.querySelectorAll("nav a");

    const sections = document.querySelectorAll(
        "section[id], header[id], .hero[id]"
    );

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.getBoundingClientRect().top +
                window.scrollY -
                180;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("