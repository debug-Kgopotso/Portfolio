/* ==========================================
   Portfolio JavaScript
   Author: Kgopotso Poopedi
========================================== */

// ==========================
// Typing Effect
// ==========================

const typingElement = document.getElementById("typing");

const words = [

    "Final-Year Computer Science Student",

    "Java Developer",

    "Web Developer",

    "Software Engineer",

    "Problem Solver"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();


// ==========================
// Navbar Background
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "#08121f";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.35)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,.75)";

        navbar.style.boxShadow = "none";

    }

});


// ==========================
// Fade-In Animation
// ==========================

const hiddenElements =
    document.querySelectorAll(
        ".service-card, .project-card, .skill-box, .summary-card, .timeline-item"
    );

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

hiddenElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition =
        "all .8s ease";

    observer.observe(element);

});


// ==========================
// Active Navigation
// ==========================

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});


// ==========================
// Button Hover Animation
// ==========================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0)";

    });

});


// ==========================
// Image Hover Animation
// ==========================

const images =
    document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform =
            "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
            "scale(1)";

    });

});


// ==========================
// Scroll To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

topButton.className =
    "btn btn-primary";

topButton.style.position = "fixed";

topButton.style.bottom = "30px";

topButton.style.right = "30px";

topButton.style.display = "none";

topButton.style.borderRadius = "50%";

topButton.style.width = "55px";

topButton.style.height = "55px";

topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================
// Console Message
// ==========================

console.log(
    "Portfolio Website Loaded Successfully"
);