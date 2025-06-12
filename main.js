document.addEventListener("DOMContentLoaded", function () {
    var introTyped = new Typed("#typed-intro", {
        strings: ["Hello, I’m Daniel — a versatile creator who wears many hats in the tech world. To some, I’m a:"],
        typeSpeed: 40,
        showCursor: false,
        onComplete: function () {
            // Show the button
            document.getElementById("cta-button").classList.add("show");

            // Start looping text
            new Typed("#typed-loop", {
                strings: [
                    "Web Developer",
                    "Designer",
                    "Problem Solver",
                    "Storyteller",
                    "Tech Explorer",
                    "lifelong Learner"
                ],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                loop: true
            });
        }
    });
});

// Particles.js Initialization
// Ensure particles.js is loaded before this script
document.addEventListener("DOMContentLoaded", function () {
    // Initialize particles.js
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: { value: "#ffffff" },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#3b82f6",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 4,
                direction: "none",
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});