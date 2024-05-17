

//     TIMER
let timerPg = document.getElementById("timer")
let stopWatchPg = document.getElementById("stop-watch")
let tSec = `00`;
let tMin = 5;
let playTimer = false
let interval;
let displayTime = document.getElementById("displayTime")
let changeBtn = document.getElementById('start-watch')

let tFunc = () => {
    timerPg.style.display = "block"
    stopWatchPg.style.display = "none"
    document.getElementById("t-btn").style.borderBottom = "2px solid black"
    document.getElementById("s-btn").style.borderBottom = "none"
}

let sFunc = () => {
    timerPg.style.display = "none"
    stopWatchPg.style.display = "block"
    document.getElementById("s-btn").style.borderBottom = "2px solid black"
    document.getElementById("t-btn").style.borderBottom = "none"
}

displayTime.innerHTML = `${tMin}m ${tSec}s`


let timer = () => {
    if(tSec== 0){    
        tMin--
        tSec=60
    }
    tSec--
    displayTime.innerHTML=`${tMin}m ${tSec}s`

    if(tMin==0 && tSec==0){
        clearInterval(interval)
        alert('your time has been finished')
        tMin=5;
        tSec=60

    }
}

let startTimer = ()=>{
    if(playTimer){
       clearInterval(interval)
       event.target.innerHTML='START'
       playTimer=false  
    }
    else{
        interval= setInterval(timer,1000);
        event.target.innerHTML='STOP'
        playTimer=true
    }
}

let ResetTimer = () =>{
    clearInterval(interval)
    tMin='5';
    tSec='00';
    displayTime.innerHTML=`${tMin}m ${tSec}s`
    playTimer=false;
    let tstart =document.getElementById('t-start')
     tstart.innerHTML='START'

}

let milliSec='00' , Ssec ='0' , Smin='0', playWatch =false;
let startwatch = document.getElementById('startStopWatch');

let watchpath = ()=>{
    startwatch.innerHTML=`${Smin}m : ${Ssec}s : ${milliSec}`;
     
    milliSec++
    if(milliSec==99){
        Ssec++
        milliSec=0
    }
    if(Ssec==59){
        Smin++
        Ssec=0
    }
   
    let getMill = milliSec < 10 ? '0' + milliSec : milliSec;
    let getsec = Ssec < 10 ? '0' + Ssec : Ssec;
    let getMec = Smin < 10 ? '0' + Smin : Smin;
    startwatch.innerHTML=` ${getMec}m : ${getsec}s : ${getMill}`;
    
}

// startWatch()

let stopInterval;
let startWatch = () => {

    if(playWatch){
        clearInterval(stopInterval)
        event.target.innerHTML='START'
        playWatch=false
    }
    else{
         stopInterval = setInterval(watchpath,10)
         event.target.innerHTML="STOP"
         milliSec='0' , Ssec ='0' , Smin ='0';
         startwatch.innerHTML=` ${Smin}m : ${Ssec}s : ${milliSec}`;
         playWatch=true
    }
}

let resetWatch = () =>{
    clearInterval(stopInterval);
    milliSec='00' , Ssec ='00' , Smin ='00';
    startwatch.innerHTML=` ${Smin}m : ${Ssec}s : ${milliSec}`;
    changeBtn.innerHTML='START'
    playWatch=false
   
}
