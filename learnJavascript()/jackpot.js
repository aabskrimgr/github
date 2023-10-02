

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
    name : "aabiskar",
    points: 323
}
pell.textContent= player.name+ ":$" + player.points
function startgame(){
    isalive=true
    let firstcard=randomCard()
    let secondcard=randomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
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
if (sum<21){
message="Do you want to draw a new card"
}
if(sum>21){
message ="you are out of game"
isalive=false
}
if(sum===21){
message="you've got a jackpot"
hasjack=true
}
messageEl.textContent=message
}

function randomCard(){
    let randomvalue = Math.floor(Math.random()*13)+1
    return randomvalue
    }
    
   