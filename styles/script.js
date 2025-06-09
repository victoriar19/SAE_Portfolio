// Animation défilement de la page :
const sections = document.querySelectorAll('.section');

function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkSections);


// Défilement fluide pour les liens de navigation :
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});



// Animation du nuage en arrière-plan :
const circles = document.querySelectorAll('.nuage-anime');

function animateCircles() {
    circles.forEach(circle => {
        // Position initiale aléatoire
        const startX = Math.random() * 20 - 10;
        const startY = Math.random() * 20 - 10;
        
        // Animation avec requestAnimationFrame
        let time = 0;
        
        function move() {
            time += 0.008;
            const x = startX + Math.sin(time) * 15;
            const y = startY + Math.cos(time) * 15;
            
            circle.style.transform = `translate(${x}px, ${y}px)`;
            
            requestAnimationFrame(move);
        }
        
        move();
    });
}



// Gestion de la barre de navigation
function updateSideNav() {
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.dot-nav');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        // Si la section est visible à plus de 40% dans la fenêtre
        if (sectionTop < window.innerHeight * 0.6 && sectionTop > -sectionHeight * 0.4) {
            currentSectionId = section.id;
        }
    });
    
    // Mise à jour des points de navigation actifs
    dots.forEach(dot => {
        const dotSection = dot.getAttribute('data-section');
        
        if (dotSection === currentSectionId) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateSideNav);

// Initialiser les animations de nuages au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    checkSections();
    animateCircles();
    updateSideNav();
});