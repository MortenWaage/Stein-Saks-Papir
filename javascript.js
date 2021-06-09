resultList = document.getElementById("result");


const pokemon = {
    WATER:  1,
    FIRE:   2,
    EARTH:  3,
}

const victor = {
    COMPUTER: "Computer won",
    PLAYER: "Player won",
    TIE: "Result is tied",
}

// Model
var playerCard;
var computerCard;
var winner;


// Controller

//Dette er funksjonen hvor du velger kort
function clicked(id) 
{
    if (id == "EARTH") playerCard = pokemon.EARTH;
    else if (id == "WATER") playerCard = pokemon.WATER;
    else playerCard = pokemon.FIRE;

    letComputerPick();
}


// Dette er funksjonen hvor datamaskinen velger kort
function letComputerPick()
{
    computerCard = Math.ceil(Math.random() * 3);
    
    checkWhoWon();
}

// Her sjekker vi hvem som vant
function checkWhoWon() {
    
    if ((computerCard - playerCard + 5) % 3 == 1) winner = victor.COMPUTER;
    else if ((computerCard - playerCard + 5) % 3 == 0) winner = victor.PLAYER; 
    else winner = victor.TIE;

    updateView();
}



// View
function updateView(){

resultList.innerHTML = `<div>Du valgte ${playerCard}</div>
                        <div>Maskinen valgte ${computerCard}</div>

`;

}




