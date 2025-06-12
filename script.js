
// Typing Animation
const typingText = document.getElementById('typing-text');
const textToType = 'Hi I am Daniel';
let index = 0;

function type() {
    if (index < textToType.length) {
        typingText.textContent += textToType[index];
        index++;
        setTimeout(type, 150);
    }
}
window.onload = type;

// Scramble Text Animation
const scrambleContainer = document.getElementById('scramble-text');
const scrambleText = 'Creative Front-End Developer';
const letters = scrambleText.split('');

letters.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.className = 'scramble';
    span.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    span.style.opacity = '0';
    scrambleContainer.appendChild(span);
});

setTimeout(() => {
    const spans = document.querySelectorAll('.scramble');
    spans.forEach((span) => {
        span.style.transform = 'translate(0, 0)';
        span.style.opacity = '1';
    });
}, 1000);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

console.log('Script loaded successfully!');
