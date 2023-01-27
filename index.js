let sum = 0
let random = Math.floor(Math.random() * 13) + 2;
let cards = document.getElementById("cards")
let total = document.getElementById("sum")
let mess = document.getElementById("mess")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let player3 = document.getElementById("player3")
let player1score = 0
let player2score = 0
let player3score = 0
let playercount = 0


player1.style.color="green"
player2.style.color="yellow"
player3.style.color="orange"





function game(){
if (sum <= 20) {
    mess.innerText =  "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
     mess.innerText =  "Wohoo! You've got Blackjack! 🥳"
   
} else {
    mess.innerText =   "You're out of the game! 😭"
    
}
}





function pickcard(){
    random = Math.floor(Math.random() * 13 + 2) ;
    cards.innerText += " " + random + ", "
   
    sum += random
    total.innerText = " "+ sum
    game()
    
}



function newgame(){
    cards.innerHTML = ""
    total.innerHTML = ""
    sum = 0
    game()
    if (playercount != 4){
         player1.innerHTML = ""
         player2.innerHTML = ""
         player3.innerHTML = ""
         playercount = 0
         player1score = 0
         player2score= 0
         player3score = 0
    }

    
   
    
}

function addplayer(){
    playercount += 1
    if (playercount===1){
         player1.innerHTML = "player1: " + sum
         player1score = sum
    sum = 0
    total.innerHTML = ""
    cards.innerText = ""
    
    }
    else if (playercount === 2){
        player2.innerHTML = "player2: " + sum
        player2score = sum
        sum = 0
        total.innerHTML = ""
        cards.innerText = ""
    }
    else if ( playercount ===3 ){
        player3.innerHTML = "player3: " + sum
        player3score = sum
        
        
       
    }
    
  chceckwinner()
    
}


function chceckwinner(){
  
    if(player1score > 21){
        player1.innerHTML = "player1: OUT OF GAME " + "("+player1score+")"
    }
     if (player2score >21){
        player2.innerHTML = "player2: OUT OF GAME " + "("+player2score+")"
    }
     if (player3score > 21){
        player3.innerHTML = "player3: OUT OF GAME " + "("+player3score+")"
    }
    
    
    
    if (player1score === 21){
        player1.innerHTML = "player1: WINNER"
    }
    if(player2score === 21){
        player2.innerHTML = "player2: WINNER"
    }
     if(player3score === 21){
        player3.innerHTML = "player3: WINNER"
    }
     
     

   
    
}

