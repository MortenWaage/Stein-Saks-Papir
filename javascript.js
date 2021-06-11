resultList = document.getElementById("result");

const pictures = ["Who.png", "Ninetales.png", "Ponyta.png", "Chikorita.png"];

const pokemon = {
    NONE:   0,
    WIND:   1,
    FIRE:   2,
    EARTH:  3,
}
const pokenames = {
    0: "",
    1: "Ninetales",
    2: "Ponyta",
    3: "Chikorita",
}

const result = {
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

    winner = result.DECIDING;

    setPickedPictures();
    updateView();
    setTimeout(letComputerPick, 1500);
}


// Dette er funksjonen hvor datamaskinen velger kort
function letComputerPick()
{
    computerCard = Math.ceil(Math.random() * 3);
    winner = result.CHECKING;

    setPickedPictures();
    updateView();
    setTimeout(checkWinner, 1500);
}

// <- test this
function setPickedPictures()
{
    if (playerCard != null) playerPickedCard = pictures[playerCard];
    if (computerCard != null) computerPickedCard = pictures[computerCard];
}


// Her sjekker vi hvem som vant <- test this
function checkWinner() {
    
    if ((computerCard - playerCard + 5) % 3 == 1) { winner = result.COMPUTER; }
    else if ((computerCard - playerCard + 5) % 3 == 0) { winner = result.PLAYER; }
    else { winner = result.TIE; };
    
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
    playerCard = pokemon.NONE;
    computerCard = pokemon.NONE;
    playerPickedCard = pictures[playerCard];
    computerPickedCard = pictures[computerCard];
    winner = result.NEWGAME;

    updateView();
}
