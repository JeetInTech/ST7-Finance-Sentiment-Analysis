// Animated Chart
const ctx = document.getElementById('chartContainer').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Market Sentiment Index',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#00ff88',
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { display: false },
            x: { display: false }
        },
        plugins: { legend: { display: false } }
    }
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.7)';
    }
});

// Stats Counter Animation
const stats = document.querySelectorAll('.stat-number');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumber(entry.target);
        }
    });
}, options);

stats.forEach(stat => observer.observe(stat));

function animateNumber(element) {
    const target = parseInt(element.innerText);
    let current = 0;
    const increment = target / 100;
    
    const updateNumber = () => {
        if (current < target) {
            current += increment;
            element.innerText = Math.ceil(current);
            requestAnimationFrame(updateNumber);
        }
    }
    updateNumber();
}