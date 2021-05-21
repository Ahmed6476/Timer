var startingminutes = prompt("Enter the time");
let time = startingminutes * 60;
var countdown = document.getElementById("countdown");
var btndis = document.getElementById('disabled')
var interval;


function updatecountdown(){
    var minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
    time = time < 0 ? 0 : time;   
    
}
function start(){ 
    
    interval = setInterval(updatecountdown,1000);
    btndis.disabled = true
}

function pause(){
    clearInterval(interval)
    btndis.disabled = false
}

