let myleads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")


inputBtn.addEventListener("click",function(){
    console.log("button clicked")
    if(inputEl.value!=""){
        myleads.push(inputEl.value)
    inputEl.value=""
    render()
    }
    })
function render(){
ulEl.innerHTML=""
let itemlists=""
for(let i=0;i<myleads.length;i++){
    //ulEl.innerHTML+="<li>"+myleads[i]+"</li>"
    itemlists+="<li>"+"<a target='_blank' href="+"'https://"+myleads[i]+"'>"+myleads[i]+"</a></li>"

    // const li=document.createElement("li")
    // li.textContent=myleads[i]
    // ulEl.append(li)
}
ulEl.innerHTML=itemlists
}