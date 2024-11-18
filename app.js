let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");
let btns = ["yellow","purple","red","green"];

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
    
});

function btnFlash(btn){
     btn.classList.add("flash");
     setTimeout(function (){
        btn.classList.remove("flash");
     },250);
}

function btnFlash2(btn){
    btn.classList.add("user-flash");
    setTimeout(function (){
       btn.classList.remove("user-flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
   h2.innerText = `level ${level}`;

let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
   btnFlash(randBtn);
}

function checkColor(index){
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }  else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";

        },500);
        h2.innerText = `oops:) 
         your score was ${level - 1} !! Press any key to start.`;
        restart();
    }
}

function btnPress(){
    let btn = this;
    btnFlash2(btn);
    userColor = btn.classList[1];
    userSeq.push(userColor);
    
    checkColor(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(buton of allBtns){
    buton.addEventListener("click", btnPress);
}

function restart(){
    userSeq = [];
    started = false;
    gameSeq = [];
    level = 0;
}