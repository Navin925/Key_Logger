const logdiv=document.getElementById("log");
const statediv=document.getElementById("state");
const startBtn=document.getElementById("start-btn");
const stopBtn=document.getElementById("stop-btn");

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleup)
    startBtn.disabled=true;
    stopBtn.disabled=false;
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleup)
    logdiv.textContent="";
    statediv.textContent=" ";
    stopBtn.disabled=true;
    startBtn.disabled=false;


})
 function handleDown(e){
    logdiv.textContent= `key ${e.key} pressed down`;
    statediv.textContent="key is down";

 }
 function handleup(e){
    logdiv.textContent= `key ${e.key} pressed down`;
    statediv.textContent="key is down";

 }