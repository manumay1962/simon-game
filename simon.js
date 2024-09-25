let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){

    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);

};

function levelUp(){
   userseq=[]; 
   level++;
   h2.innerText=` Level ${level}`;
     
   let randidx=Math.floor(Math.random()*3);
   let randcolor=btns[randidx];
   let randbtn=document.querySelector(`  .${randcolor}`);
   gameseq.push(randcolor);
    btnFlash( randbtn);
};

function checkAns(idx){
     if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelUp,1000) ;
        }
     }else{
        h2.innerHTML=`Game over! Your score was<b>${level}<b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);

        reset();
     }
     
}

function btnpress(){
    let btn=this;
    btnFlash(btn);
    userseq.push

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for( btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
}