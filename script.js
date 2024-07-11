window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 600, 0);
    header.style.backgroundSize = `${100 + scrollY / 5}%`;
    header.style.opacity = opacity;
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header Toggle on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 100) {
        header.classList.add('bg-gray-900');
    } else {
        header.classList.remove('bg-gray-900');
    }
});

// // Form Validation and Submission
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const name = form.querySelector('#name').value.trim();
//     const email = form.querySelector('#email').value.trim();
//     const message = form.querySelector('#message').value.trim();

//     if (name === '' || email === '' || message === '') {
//         alert('Please fill in all fields.');
//         return;
//     }

//     // Example of form submission handling (you can replace this with your own logic)
//     console.log('Form Submitted:', { name, email, message });
//     alert('Thank you for your message!');

//     form.reset();
// });

window.addEventListener('scroll', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');
    // Show or hide the button based on scroll position
    if (window.scrollY > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');

    }
});

// Scroll to the top of the page on page load
backToTopBtn.addEventListener('click', function () {
    // Scroll back to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


window.scrollTo({
    top: 0,
    behavior: 'auto' // Use 'auto' to avoid smooth scrolling on initial load
});
