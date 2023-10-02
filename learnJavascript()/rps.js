let javaP=document.getElementById("javap")
let Result=document.getElementById("result")



function rock(){
    value=generator()
if(value==="✊"){
    Result.innerHTML="Draw"
}
if(value==="✋"){
    Result.innerHTML="you loose"
}
else if(value==="✌️"){
    Result.innerHTML="you win"
}
}
function paper(){
    value=generator()
    if(value==="✋"){
        Result.innerHTML="Draw"
    }
    if(value==="✊"){
        Result.innerHTML="you win"
    }
    else if(value==="✌️"){
        Result.innerHTML="you loose"
    }
}
function scissor(){
    value=generator()
    if(value==="✌️"){
        Result.innerHTML="Draw"
    }
    if(value==="✊"){
        Result.innerHTML="you loose"
    }
    else if(value==="✋"){
        Result.innerHTML="you win"
    }

}

function generator(){
    let a=""
    let randomvalue=Math.floor(Math.random()*3)+1
    if(randomvalue===1){
        a="✊"
    }
    else if(randomvalue===2){
        a="✋"
    }
    else {
        a="✌️"
    }
    javaP.innerHTML="<h1> Computer:"+a+"</h1"
    return a
}

