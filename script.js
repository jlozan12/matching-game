// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
let counterdiv = document.querySelector(".counter");

//counter
let counter = 0;
let button = document.querySelector(".counter");
button.onclick = function() {
counter = counter + 1;

   counterdiv.innerHTML = ("This quiz has been taken " + counter + " times ");
};
// Array containing image URLs
let cards = [
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/broom1.jpg?v=1712940315470",
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/broom2.jpg?v=1712940317571",
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/broom3.jpg?v=1712940321441",
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/broom4.jpg?v=1712940329378",
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/broom6.jpg?v=1712940332997",
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/brrom5.jpg?v=1712940337918",
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/broom8.jpg?v=1712940697667",
    "https://cdn.glitch.global/3d67121f-af9b-470f-be54-26c300852359/broom7.jpg?v=1712940701593"
];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML(
            "beforeend",
            `<div style='background-image: url(${card})' class='card'>`);
    }
};



// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("the deck has 8 cards");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML(
                "beforeend",
                `<div style='background-image: url(${card})' class='card'>`);
        }
    }
};
// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling cards");
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML(
            "beforeend",
            `<div style='background-image: url(${card})' id='${i}' class='card'>`);
        i = i + 1;
    }
};
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards

buttonFlip.onclick = function() {
    let i = 0;
    for (let card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};
// Match All Cards
// If a card was clicked, show it, and add it to an array.
//$(document).click(function(event) {
$(document).click( function(event) { 
       let clickedId = event.target.id;
       console.log(clickedId);
       if (clickedId !== "") {
   document.getElementById(clickedId).style.backgroundImage= "url('"+ cards[clickedId] +  "')";
         clickedIds.push(clickedId);
         console.log(clickedIds) ;
         // if 1 card was clicked...
         if (clickedIds.length === 2) {
             
             let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
             let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
             console.log(card1picture);
             console.log(card2picture);
             if (card1picture === card2picture) {
                 console.log("match");
                 document.getElementById(clickedIds[0]).id = "";
                 document.getElementById(clickedIds[1]).id = "";
                 clickedIds = [];
                 console.log(clickedIds);
             }
         } else if (clickedIds.length > 2) {
             console.log("match");
             document.getElementById(clickedIds[0]).style.backgroundImage = "";
             document.getElementById(clickedIds[1]).style.backgroundImage = "";
             clickedIds = [];
               clickedIds.push(clickedId);
               console.log(clickedIds);
               // if 1 card was clicked...

           }
             console.log(clickedIds);
         }
   });
