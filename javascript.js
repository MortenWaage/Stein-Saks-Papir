resultList = document.getElementById("result");

// Model

// VANN SLÅR FLAMME
// FLAMME SLÅR EARTH
// EARTH SLÅR VANN
// 1 slår 2
// 2 slår 3
// 3 slår 1

const pokemon = {
    WATER:  1, //R
    FIRE:   2, //P
    EARTH:  3, //S
}

var playerCard;
var computerCard;



// Controller
//Dette er funksjonen hvor du velger kort

function clicked(id) 
{
    if (id == "EARTH") playerCard = pokemon.EARTH;
    else if (id == "WATER") playerCard = pokemon.WATER;
    else playerCard = pokemon.FIRE;

    pickAIPiece();
}


function pickAIPiece()
{
    computerCard = Math.ceil(Math.random() * 3);
    
    checkWhoWon();
}
    
function checkWhoWon() {
    
    console.log(playerCard + " " + computerCard);
    if ((computerCard - playerCard + 7) % 3 == 1) alert("computer wins");
    else if ((computerCard - playerCard + 7) % 3 == 0) alert("player wins");
    else alert("Tie");

}



// View
function updateView(){

resultList.innerHTML = `blabla`;
}




