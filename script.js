var scene = document.getElementById('scene');
var postcard = document.getElementById('postcard');
var isDragging = false;
var startX = 0, startY = 0;
var currentX = 0, currentY = 0;

scene.addEventListener('mousedown', function(event) {
    isDragging = true;
    startX = event.clientX - currentX;
    startY = event.clientY - currentY;
});

scene.addEventListener('mousemove', function(event) {
    if (!isDragging) return;
    currentX = event.clientX - startX;
    currentY = event.clientY - startY;
    postcard.style.transform = 'rotateX(' + currentY + 'deg) rotateY(' + currentX + 'deg)';
});

scene.addEventListener('mouseup', function() {
    isDragging = false;
});
