let a=2
let b=3

document.getElementById("num1").innerText=a
document.getElementById("num2").innerText=b
let c=document.getElementById("num3")

function add(){
c.innerText=a+b
}
function sub(){
    c.innerText=a-b 
}

function mul(){
    c.innerText=a*b

}

function div(){
    c.innerText=a/b
}