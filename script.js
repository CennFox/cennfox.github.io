var postcard = document.getElementById('postcard');
var flipButton = document.getElementById('flip-button');
var isFront = true;

function flipPostcard() {
    if (isFront) {
        postcard.style.transform = 'rotateY(180deg)';
    } else {
        postcard.style.transform = 'rotateY(0deg)';
    }
    isFront = !isFront;
}

flipButton.addEventListener('click', flipPostcard);
