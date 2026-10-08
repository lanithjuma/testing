// ==========================================
// OUR LITTLE LOVE STORY
// Interactive JavaScript
// ==========================================


// Elements
const openHeart = document.getElementById("openHeart");
const surpriseBtn = document.getElementById("surpriseBtn");

const loveLetter = document.getElementById("loveLetter");
const surprise = document.getElementById("surprise");

const message = document.getElementById("message");
const reasonResult = document.getElementById("reasonResult");

const counter = document.getElementById("clickCounter");


// Love click counter
let loveClicks = 0;


// Update counter
function addLoveClick() {

    loveClicks++;

    counter.textContent =
        `Love clicks: ${loveClicks}`;

}


// Open love letter
openHeart.addEventListener("click", function () {

    loveLetter.scrollIntoView({
        behavior: "smooth"
    });

    message.textContent =
        "Here is a little piece of my heart for you. 💕";

    addLoveClick();

});


// Surprise button
surpriseBtn.addEventListener("click", function () {

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    message.textContent =
        "You found the surprise! ✨";

    addLoveClick();

});


// Reason cards
const reasonCards =
    document.querySelectorAll(".reason-card");


reasonCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const selectedMessage =
            card.getAttribute("data-message");

        reasonResult.textContent =
            selectedMessage;

        addLoveClick();

    });

});


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.textContent = "♥";

    heart.style.position = "fixed";
    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.color = "#ed78aa";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);


    const duration =
        Math.random() * 3000 + 4000;


    heart.animate(

        [
            {
                transform: "translateY(0)",
                opacity: 1
            },

            {
                transform:
                    `translateY(-${window.innerHeight + 100}px)`,
                opacity: 0
            }
        ],

        {
            duration: duration,
            easing: "linear"
        }

    );


    setTimeout(function() {

        heart.remove();

    }, duration);

}


// Create floating hearts occasionally
setInterval(createHeart, 1000);