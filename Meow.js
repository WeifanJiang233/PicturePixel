document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('revealImage');
    
    // Add a listener for mousemove events
    document.addEventListener('mousemove', function (e) {
        // Calculate the position of the mouse relative to the image
        const mouseX = e.clientX - image.offsetLeft;
        const mouseY = e.clientY - image.offsetTop;
        
        // Update the image style to reveal the words
        image.style.clipPath = `circle(50px at ${mouseX}px ${mouseY}px)`;
    });
});