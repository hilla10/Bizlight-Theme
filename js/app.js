document.addEventListener('DOMContentLoaded', function () {
    // Find all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Iterate over each header
    accordionHeaders.forEach(header => {
        // Add a click event listener to each header
        header.addEventListener('click', event => {
            // Close all other accordions
            accordionHeaders.forEach(item => {
                if (item !== header) {
                    item.nextElementSibling.classList.remove('active');
                }
            });

            // Open/close the clicked accordion
            const content = event.target.parentElement.nextElementSibling;
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                content.classList.add('active');
            }
        });
    });
});

const menu = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
})