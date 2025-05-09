// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

// Create Popup
const popup = document.createElement('div');
popup.className = 'popup';
popup.innerHTML = `
    <div class="popup-content">
        <span class="popup-close">&times;</span>
        <h3 class="popup-title">Thank You!</h3>
        <p class="popup-message">Your message has been sent successfully.</p>
        <button class="popup-button">OK</button>
    </div>
`;
document.body.appendChild(popup);

// Hamburger Menu
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close Menu When Clicking Outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Check if all fields are filled
        if (name && email && message) {
            // Show popup
            popup.style.display = 'flex';
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Close Popup
const closePopup = function() {
    popup.style.display = 'none';
};

// Close popup when clicking close button or OK button
popup.querySelector('.popup-close').addEventListener('click', closePopup);
popup.querySelector('.popup-button').addEventListener('click', closePopup);

// Close popup when clicking outside
popup.addEventListener('click', function(e) {
    if (e.target === popup) {
        closePopup();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to Top Button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 
