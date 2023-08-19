document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;

            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.style.display = 'none';
                }
            });

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
