// Seleciona todos os elementos com a classe "fade-in"
const faders = document.querySelectorAll('.fade-in');

const options = { threshold: 0.4 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

faders.forEach(fader => observer.observe(fader));
