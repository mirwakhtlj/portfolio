// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// CLOSE MENU AFTER CLICK
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ACTIVE NAVIGATION ON SCROLL
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


/* =========================
   ABOUT ME - SCROLL REVEAL
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const aboutSection = document.querySelector("#about");

    if (!aboutSection) return;

    const aboutElements = aboutSection.querySelectorAll(
        ".about-header, .about-text"
    );

    aboutElements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            `opacity 0.8s ease ${index * 0.2}s, 
             transform 0.8s ease ${index * 0.2}s`;
    });

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                aboutElements.forEach(element => {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                });

                aboutObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    aboutObserver.observe(aboutSection);

});

// EDUCATION EXPAND / COLLAPSE
document.querySelectorAll('.education-card').forEach(card => {

    const button = card.querySelector('.toggle-btn');

    button.addEventListener('click', () => {

        card.classList.toggle('active');

        if (card.classList.contains('active')) {
            button.innerHTML =
                'Tutup detail & dokumentasi <span class="arrow">⌄</span>';
        } else {
            button.innerHTML =
                'Lihat detail & dokumentasi <span class="arrow">⌄</span>';
        }

    });

});



// EXPERIENCE ACCORDION
const experienceButtons = document.querySelectorAll('.experience-toggle');

experienceButtons.forEach(button => {

    button.addEventListener('click', () => {

        const currentCard = button.closest('.experience-card');

        // Tutup semua kartu lainnya
        document.querySelectorAll('.experience-card').forEach(card => {
            if (card !== currentCard) {
                card.classList.remove('active');
            }
        });

        // Buka atau tutup kartu yang diklik
        currentCard.classList.toggle('active');

    });

});

// PUBLICATION DETAIL TOGGLE

function togglePublication() {

    const detail = document.getElementById("publication-detail");
    const arrow = document.getElementById("publication-arrow");

    detail.classList.toggle("active");

    if (detail.classList.contains("active")) {
        arrow.style.transform = "rotate(180deg)";
    } else {
        arrow.style.transform = "rotate(0deg)";
    }

}

// PUBLICATION DETAIL TOGGLE

function togglePublication() {

    const detail = document.getElementById("publication-detail");
    const arrow = document.getElementById("publication-arrow");

    detail.classList.toggle("active");

    if (detail.classList.contains("active")) {
        arrow.style.transform = "rotate(180deg)";
    } else {
        arrow.style.transform = "rotate(0deg)";
    }

}

// EDUCATION EXPAND / COLLAPSE
document.querySelectorAll('.education-card').forEach(card => {

    const button = card.querySelector('.toggle-btn');

    button.addEventListener('click', () => {

        card.classList.toggle('active');

        if (card.classList.contains('active')) {
            button.innerHTML =
                'Tutup detail & dokumentasi <span class="arrow">⌄</span>';
        } else {
            button.innerHTML =
                'Lihat detail & dokumentasi <span class="arrow">⌄</span>';
        }

    });

});