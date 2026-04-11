// Player One Space — Main JS

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            toggle.textContent = navLinks.classList.contains('open') ? '\u2715' : '\u2630';
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.textContent = '\u2630';
            });
        });
    }

    // Fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Pac-Man typing animation
    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
        const phrases = [
            'Player One Space',
            'Building what space runs on',
            'Space data. Earth intelligence',
            'Connectivity where none exists',
            'The backbone of orbital infrastructure',
            'Eyes on every asset, everywhere',
        ];
        let phraseIdx = 0;
        let charIdx = 0;
        let deleting = false;
        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseEnd = 2000;
        const pauseStart = 500;

        function tick() {
            const current = phrases[phraseIdx];
            if (!deleting) {
                typedEl.textContent = current.substring(0, charIdx + 1);
                charIdx++;
                if (charIdx >= current.length) {
                    deleting = true;
                    setTimeout(tick, pauseEnd);
                    return;
                }
                setTimeout(tick, typeSpeed);
            } else {
                typedEl.textContent = current.substring(0, charIdx);
                charIdx--;
                if (charIdx < 0) {
                    deleting = false;
                    charIdx = 0;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    setTimeout(tick, pauseStart);
                    return;
                }
                setTimeout(tick, deleteSpeed);
            }
        }
        tick();
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

