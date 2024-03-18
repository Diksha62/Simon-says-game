let  gameseq=[];
let userseq=[];
let btns=["yellow","blue","green","red"]
let started=false;
let level=0;
let h2= document.querySelector("h2");
document.addEventListener("keypress", function() {
   if ( started == false){
    console.log("game is started");
    started = true;
    levelup();
   }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 450);

}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 450);
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*3);
    let ranColor =btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    console.log(gameseq);
    gameflash(ranbtn);
}



function checkAns(idx) {
    if (userseq[idx]=== gameseq[idx]){
        if(userseq.length ===gameseq.length) {
            setTimeout(levelup,1000);
        }
   } else {
         h2.innerHTML=`Game over! Your score was <b>${level}</b>  <br>Press any key to start`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
         }, 300);
        reset();
    }
}
function btnPress() {
    console.log(this);
    let btn =this;
    userflash(btn);

    userColor= btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for( let btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started=false;
    gameseq= [];
    userseq= [];
    level=0;
}
