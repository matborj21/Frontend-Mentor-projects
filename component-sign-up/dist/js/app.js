let viewportWidth;
const image = document.getElementById('imahe');
// Set/update the viewportWidth value
const setViewportWidth = function () {
    viewportWidth = window.screen.width || window.screen.availWidth;
    if (viewportWidth < 640) {
        return image.setAttribute('src', './dist/images/bg-intro-mobile.png');
    } else {
        return image.setAttribute('src', './dist/images/bg-intro-desktop.png');
    }
}

// On resize events, recalculate and log
window.addEventListener('resize', function () {
    setViewportWidth();
}, false);