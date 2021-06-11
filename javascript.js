resultList = document.getElementById("result");

const pictures = ["Ninetales.png", "Ponyta.png", "Chikorita.png", "Who.png"];

const pokemon = {
    WIND:   1,
    FIRE:   2,
    EARTH:  3,
}
const pokenames = {
    1: "Ninetales",
    2: "Ponyta",
    3: "Chikorita",
    4: "",
}

const victor = {
    COMPUTER: "Computer won!",
    PLAYER: "Player won!",
    TIE: "It's a tie!",
    NEWGAME: "Please choose a card",
    DECIDING: "Computer is thinking",
    CHECKING: "And the winner is...",
}

// Model
var playerCard; 
var computerCard;
var winner;
var playerPickedCard;
var computerPickedCard;
var winnerCard;


clearView();
// Controller

//Dette er funksjonen hvor du velger kort <- test this
function clicked(id) 
{
    clearView();

    if (id == "EARTH") playerCard = pokemon.EARTH;
    else if (id == "WIND") playerCard = pokemon.WIND;
    else playerCard = pokemon.FIRE;

    winner = victor.DECIDING;

    setPickedPictures();
    updateView();
    setTimeout(letComputerPick, 1500);
}


// Dette er funksjonen hvor datamaskinen velger kort
function letComputerPick()
{
    computerCard = Math.ceil(Math.random() * 3);
    winner = victor.CHECKING;

    setPickedPictures();
    updateView();
    setTimeout(checkWinner, 1500);
}

// <- test this
function setPickedPictures()
{
    if (playerCard != null) playerPickedCard = pictures[playerCard-1];
    if (computerCard != null) computerPickedCard = pictures[computerCard-1];
}


// Her sjekker vi hvem som vant <- test this
function checkWinner() {
    
    if ((computerCard - playerCard + 5) % 3 == 1) { winner = victor.COMPUTER; }
    else if ((computerCard - playerCard + 5) % 3 == 0) { winner = victor.PLAYER; }
    else { winner = victor.TIE; };
    
    updateView();
}




// View
function updateView(){

document.getElementById("result").style.borderWidth = "5px";

resultList.innerHTML = `<div>You chose ${pokenames[playerCard]}</div><br />
                        <div>Computer chose ${pokenames[computerCard]}</div>
                        <img src=${playerPickedCard}>
                        <div>${winner}</div>
                        <img src=${computerPickedCard}>
                        

`;

}

function clearView()
{
    playerCard = 4;
    computerCard = 4;
    playerPickedCard = pictures[3];
    computerPickedCard = pictures[3];
    winner = victor.NEWGAME;

    updateView();
}
