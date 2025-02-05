// Basic Functionality
document.getElementById('predictBtn').addEventListener('click', () => {
    // Add your logic here to handle button click (e.g., show a form, make an API call)
    alert("Predict Sentiment button clicked!");
});

// Particles.js configuration
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#007bff"
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
        },
        "size": {
            "value": 3,
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#007bff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});