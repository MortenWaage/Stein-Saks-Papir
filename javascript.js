resultList = document.getElementById("result");

const pictures = [
    "Who.png",
    "Ninetales.png", 
    "Ponyta.png", 
    "Chikorita.png"
];

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

/*--------------*
 *    MODEL     *
 *--------------*/
var playerCard; 
var computerCard;
var playerPickedCard;
var computerPickedCard;
var winner;
var gameStarted = false;

/*--------------*
 *    START     *
 *--------------*/
clearView();

/*--------------*
 *  CONTROLLER  *
 *--------------*/
function clicked(id) 
{
    if (gameStarted) return;    
    gameStarted = true;

    clearView();

    if (id == "EARTH") playerCard = pokemon.EARTH;
    else if (id == "WIND") playerCard = pokemon.WIND;
    else playerCard = pokemon.FIRE;

    winner = result.DECIDING;

    setPickedPictures();
    updateView();
    setTimeout(letComputerPick, 1500);
}

function letComputerPick()
{
    computerCard = Math.ceil(Math.random() * 3);
    winner = result.CHECKING;

    setPickedPictures();
    updateView();
    setTimeout(checkWinner, 1500);
}

function setPickedPictures()
{
    if (playerCard != null) playerPickedCard = pictures[playerCard];
    if (computerCard != null) computerPickedCard = pictures[computerCard];
}

function checkWinner() {
    
    if ((computerCard - playerCard + 5) % 3 == 1) { winner = result.COMPUTER; }
    else if ((computerCard - playerCard + 5) % 3 == 0) { winner = result.PLAYER; }
    else { winner = result.TIE; };
    
    gameStarted = false;
    updateView();
}

/*--------------*
 *     VIEW     *
 *--------------*/
function updateView(){

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