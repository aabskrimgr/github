

let cards=[]
let sum=0
let hasjack=false
let isalive=false
let message=""


let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let pell=document.getElementById("pel")

let player={
    name : "POINTS",
  points:function(){
        if(sum<=17){
            return sum*10
            }
            else return 0
    }
}

    
   
function startgame(){
    isalive=true
    let firstcard=randomCard()
    
    cards=[firstcard]
    sum=firstcard
    rendergame()
    }
    

function newcard(){
    if(isalive && !hasjack){
    let card=randomCard()
    cards.push(card)
    sum+=card
rendergame()
}
}


function rendergame(){
    cardsEl.textContent="cards:"
    sumEl.textContent="sum:"
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent+= " " + cards[i] 
        }
        sumEl.textContent+=" "+ sum
if (sum<17){
message="Do you want to draw a new card?"
}
if(sum>17){
message ="!!you are out of game!!"
isalive=false
}
if(sum===17){
message="CONGRATULATIONS ITS SATRA"
hasjack=true
}
messageEl.textContent=message
pell.textContent= player.name+ ":$" + player.points()
}

function randomCard(){
    let randomvalue = Math.floor(Math.random()*13)+1
 
    if(randomvalue===12){
        return 11
    }
    else if(randomvalue===13){
        return 12 
    }
    else if(randomvalue===11){
        return 0
    }
    else
    {
        return randomvalue
    }

    }


