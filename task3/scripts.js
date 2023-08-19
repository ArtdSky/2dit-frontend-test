document.addEventListener("DOMContentLoaded", function () {
    checkTitleOverlap();
    window.addEventListener("resize", checkTitleOverlap);
});

function checkTitleOverlap() {
    const title = document.querySelector('.main-title');
    const image = document.querySelector('.image-wrapper');

    const titleRect = title.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    if (
        titleRect.top < imageRect.bottom &&
        titleRect.bottom > imageRect.top &&
        titleRect.left < imageRect.right &&
        titleRect.right > imageRect.left
    ) {
        title.style.color = 'white';
    } else {
        title.style.color = '#000000';
    }
}
