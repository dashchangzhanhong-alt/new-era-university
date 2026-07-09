/* ===================================
   MOBILE NAVIGATION
=================================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ===================================
   BACK TO TOP BUTTON
=================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ===================================
   ACTIVE NAVIGATION LINK
=================================== */

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/* ===================================
   NAVBAR SHADOW ON SCROLL
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ===================================
   FADE-IN ANIMATION
=================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

const animatedElements = document.querySelectorAll(

".feature-card, .course-card, .stat-box, .cta"

);

animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.7s ease";

    observer.observe(element);

});

/* ===================================
   BUTTON HOVER EFFECT
=================================== */

const buttons = document.querySelectorAll(

".btn-primary, .btn-secondary, .course-btn, .apply-btn"

);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

/* ===================================
   CONTACT FORM VALIDATION
=================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name");

        const email = document.getElementById("email");

        const message = document.getElementById("message");

        if (

            name.value.trim() === "" ||

            email.value.trim() === "" ||

            message.value.trim() === ""

        ) {

            alert("Please complete all fields.");

            return;

        }

        const emailPattern =

        /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

        if (!emailPattern.test(email.value)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert("Your message has been sent successfully!");

        form.reset();

    });

}

/* ===================================
   HERO BUTTON RIPPLE EFFECT
=================================== */

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        let ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;

        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = x + "px";

        ripple.style.top = y + "px";

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});

/* ===================================
   CONSOLE MESSAGE
=================================== */

console.log("New Era University College Website Loaded Successfully");