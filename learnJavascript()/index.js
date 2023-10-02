let count=0
function increment(){
    count+=1
     count1=document.getElementById("count")
    count1.innerText=count
   
}

function save(){
save1=document.getElementById("save")
save1.innerText+=" - "+ count 
count=0
count1.innerText=0
}

