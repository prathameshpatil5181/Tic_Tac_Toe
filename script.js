console.log("Tic Tac Toe");
var turn  = "player2";
var gamearray = [[0,0,0],[0,0,0],[0,0,0]];
var win = false;
let blur = document.getElementById('winnerid');
let image1 = document.getElementById('image');
let button = document.getElementById('button');
let fristplayer = document.querySelector('.turn1');
let secondplayer = document.querySelector('.turn2');
const backgroundmusic = new Audio("tictacbackground.mp3");
const clickeffect = new Audio("clickmain.mp3");
const winmusic = new Audio("winn.mp3");
function turns(){
    if(turn === "player1"){
       turn = "player2";
       turn1 = "visible";
       turn2= "hidden";
       return;
    }
    turn= "player1";
    turn2="visible";
    turn1="hidden";
}
let say = ()=>{
    if(turn === "player1"){
        fristplayer.style.visibility = 'hidden';
        secondplayer.style.visibility = 'visible';
        return ;
     }
     fristplayer.style.visibility = 'visible';
     secondplayer.style.visibility = 'hidden';
}
const cheakwin = ()=>{
    let boxtext = document.getElementsByClassName("box");
    let wins = [

            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
    ]
    wins.forEach(e =>{
        if(boxtext[e[0]].style.backgroundImage===boxtext[e[1]].style.backgroundImage&&boxtext[e[0]].style.backgroundImage===boxtext[e[2]].style.backgroundImage&&boxtext[e[0]].style.backgroundImage!==""){
            win = true;
            console.log(boxtext[e[0]].style.backgroundImage + " wins");
            boxtext[e[0]].style.backgroundColor="#ffd652";
            boxtext[e[1]].style.backgroundColor="#ffd652";
            boxtext[e[2]].style.backgroundColor="#ffd652";
            setTimeout(myGreeting, 500);
        }
    })

}
function myGreeting(){
    const img = document.querySelector(".winnerimage");
    document.querySelector(".background").style.filter = "blur(20px)";
    blurwindow();
    backgroundmusic.pause();
    winmusic.play();
}
function placeimgae(element){
    turns();
    if(turn==="player1"){
    element.style.backgroundImage="url(cross_with_shadow.png)"; 
    }
    else{
        element.style.backgroundImage="url(circle.png)";    
    }
}

function reset(){
    let boxe= document.getElementsByClassName("box");
    Array.from(boxe).forEach(element =>{
        win = false;
         element.style.backgroundImage="";
         element.style.backgroundColor="";
         backgroundmusic.play();
    });  
}
function replay(){
    let boxe= document.getElementsByClassName("box");
    Array.from(boxe).forEach(element =>{
        win = false;
         element.style.backgroundImage="";
         element.style.backgroundColor="";
         backgroundmusic.play();
    });  
    document.querySelector(".background").style.filter = "none";
    image1.classList.remove("active");
    button.classList.remove("active");
    blur.classList.remove("active");
    document.querySelector(".background").style.visibility = "visible";
}




function blurwindow(){
    blur.classList.add("active");
    if(turn === "player1"){
        document.getElementById("image").src="cross_with_shadow.png";
    }
    else{
        document.getElementById("image").src="circle.png";
    }
    image1.classList.add("active");
    button.classList.add("active");
    document.querySelector(".background").style.visibility = "hidden";
}

const urlParams = new URLSearchParams(window.location.search);
const play1 = urlParams.get('p1');
const play2 = urlParams.get('p2');
document.querySelector('.identity3').innerText = play1;
document.querySelector('.identity4').innerText = play2;
console.log(play1);
console.log(play2);
backgroundmusic.play();
fristplayer.style.visibility = 'visible';
secondplayer.style.visibility = 'hidden';
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxcontaint  = element.querySelector(".boxcontaint");
    element.addEventListener('click',()=>{
        if(element.style.backgroundImage===''&& win===false){
        clickeffect.play();
        placeimgae(element);
        say();
        }
        cheakwin();

    });
});