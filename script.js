window.addEventListener('DOMContentLoaded', () => {
    const postcards = Array.from(document.getElementsByClassName('postcard'));
    const flipButton = document.getElementById('flip-button');
    const advancedButton = document.getElementById('advanced-button');
    const blackoutButton = document.getElementById('blackout-button');
    const selectCards = Array.from(document.getElementsByClassName('select-card'));
    const frontImages = Array.from(document.getElementsByClassName('front-image'));
    const backImages = Array.from(document.getElementsByClassName('back-image'));

    let isFront = [true, true];
    let isAdvanced = false;

    function flipPostcards() {
        postcards.forEach((postcard, index) => {
            if (isFront[index]) {
                postcard.style.transform = "rotateY(180deg)";
                isFront[index] = false;
            } else {
                postcard.style.transform = "rotateY(0deg)";
                isFront[index] = true;
            }
        });
    }

function changeImage(e) {
    const cardNumber = e.target.value;
    const index = selectCards.indexOf(e.target);

    fetch(`front${cardNumber}.png`).then(response => {
        if (response.ok) {
            frontImages[index].src = `front${cardNumber}.png`;
        } else {
            frontImages[index].src = `front69420.png`;
        }
    }).catch(() => {
        frontImages[index].src = `front69420.png`;
    });

    fetch(`back${cardNumber}.png`).then(response => {
        if (response.ok) {
            backImages[index].src = `back${cardNumber}.png`;
        } else {
            backImages[index].src = `back69420.png`;
        }
    }).catch(() => {
        backImages[index].src = `back69420.png`;
    });

    checkBlackout(index);
}


    function toggleAdvancedMode() {
        const postcard2 = document.getElementById('postcard2');
        const selectCard2 = document.getElementById('select-card2');

        if (isAdvanced) {
            postcard2.style.display = 'none';
            selectCard2.style.display = 'none';
            isAdvanced = false;
        } else {
            postcard2.style.display = 'flex';
            selectCard2.style.display = 'inline-block';
            isAdvanced = true;
        }
    }

    function checkBlackout() {
        const currentCard = document.getElementById('select-card1').value;
        fetch(`front${currentCard}b.png`).then(response => {
            if (response.ok) {
                blackoutButton.disabled = false;
            } else {
                blackoutButton.disabled = true;
            }
        });
    }

    function blackout() {
        const currentCard = document.getElementById('select-card1').value;
        frontImages[0].src = `front${currentCard}b.png`;
        checkBlackout();
    }

    flipButton.addEventListener('click', flipPostcards);
    advancedButton.addEventListener('click', toggleAdvancedMode);
    blackoutButton.addEventListener('click', blackout);
    selectCards.forEach(selectCard => selectCard.addEventListener('change', changeImage));
    
    // Initially hide the second postcard
    document.getElementById('postcard2').style.display = 'none';
    // Check blackout on page load
    checkBlackout();
});
