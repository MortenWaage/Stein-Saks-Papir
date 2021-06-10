resultList = document.getElementById("result");

const pictures = ["Ninetales.png", "Ponyta.png", "Chikorita.png"];

const pokemon = {
    WIND:   1,
    FIRE:   2,
    EARTH:  3,
}
const pokenames = {
    1: "Ninetales",
    2: "Ponyta",
    3: "Chikorita",
    4: "like kort",
}

const victor = {
    COMPUTER: "Computer",
    PLAYER: "Player",
    TIE: "Ingen",
}

// Model
var playerCard; 
var computerCard;
const tieCard = 4;
var winner;
var playerPickedCard;
var computerPickedCard;
var winnerCard;


// Controller

//Dette er funksjonen hvor du velger kort
function clicked(id) 
{
    if (id == "EARTH") playerCard = pokemon.EARTH;
    else if (id == "WIND") playerCard = pokemon.WIND;
    else playerCard = pokemon.FIRE;

    setPickedPictures();

    updateView();
    setTimeout(letComputerPick, 1000);
    //letComputerPick();
}


// Dette er funksjonen hvor datamaskinen velger kort
function letComputerPick()
{
    computerCard = Math.ceil(Math.random() * 3);

    setPickedPictures();

    updateView();
    setTimeout(checkWinner, 1000);
    //checkWinner();
}


function setPickedPictures()
{
    if (playerCard != null) playerPickedCard = pictures[playerCard-1];
    if (computerCard != null) computerPickedCard = pictures[computerCard-1];
}


// Her sjekker vi hvem som vant
function checkWinner() {
    
    if ((computerCard - playerCard + 5) % 3 == 1) { winner = victor.COMPUTER; winnerCard = computerCard; }
    else if ((computerCard - playerCard + 5) % 3 == 0) { winner = victor.PLAYER; winnerCard = playerCard; }
    else { winner = victor.TIE; winnerCard = tieCard };
    
    updateView();
}




// View
function updateView(){

document.getElementById("result").style.borderWidth = "5px";

resultList.innerHTML = `<div>Du valgte ${pokenames[playerCard]}</div><br />
                        <div>Maskinen valgte ${pokenames[computerCard]}</div>
                        <img src=${playerPickedCard}>
                        <div>${winner} vant! </div>
                        <img src=${computerPickedCard}>
                        

`;

}
