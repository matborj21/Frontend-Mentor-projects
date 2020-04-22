let viewportWidth;
const bgImage = document.getElementById('body');
// Set/update the viewportWidth value
const setViewportWidth = function () {
    viewportWidth = window.screen.width || window.screen.availWidth;
    if (viewportWidth < 500) {
        return bgImage.style.backgroundImage = "url('./dist/images/bg-intro-mobile.png')";
    } else {
        return bgImage.style.backgroundImage = "url('./dist/images/bg-intro-desktop.png')";
    }
}

// On resize events, recalculate and log
window.addEventListener('resize', function () {
    setViewportWidth();
}, false);