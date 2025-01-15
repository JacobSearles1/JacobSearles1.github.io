document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const currentPath = window.location.pathname;

    // Check local storage for the active link
    const activeLink = localStorage.getItem('activeLink');

    navbarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || link.getAttribute('href') === activeLink) {
            link.classList.add('active');
        }

        link.addEventListener('click', function() {
            // Remove the active class from all links
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));

            // Add the active class to the clicked link
            this.classList.add('active');

            // Store the active link in local storage
            localStorage.setItem('activeLink', this.getAttribute('href'));
        });
    });

    const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function(event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'service_xpofp0d';
            const templateID = 'template_f60y0ii';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });
});