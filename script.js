var postcard = document.getElementById('postcard');
var flipButton = document.getElementById('flip-button');
var swapButton = document.getElementById('swap-button');
var selectCard = document.getElementById('select-card');
var frontImage = document.getElementById('front-image');
var backImage = document.getElementById('back-image');
var isFront = true;

function flipPostcard() {
    if (isFront) {
        postcard.style.transform = 'rotateY(180deg)';
    } else {
        postcard.style.transform = 'rotateY(0deg)';
    }
    isFront = !isFront;
}

function updateCard() {
    var selected = selectCard.value;
    frontImage.src = 'front' + selected + '.png';
    backImage.src = 'back' + selected + '.png';
    checkSwapImage();
}

function swapImage() {
    var selected = selectCard.value;
    frontImage.src = 'front' + selected + 'b.png';
}

function checkSwapImage() {
    var selected = selectCard.value;
    var img = new Image();
    img.src = 'front' + selected + 'b.png';
    img.onload = function() {
        swapButton.disabled = false;
    }
    img.onerror = function() {
        swapButton.disabled = true;
    }
}

flipButton.addEventListener('click', flipPostcard);
swapButton.addEventListener('click', swapImage);
selectCard.addEventListener('change', updateCard);
