var hero = document.getElementById("hero");
var obstacle = document.getElementById("obstacle");
var counter = document.getElementById("counter");
var you_win = document.getElementById("you_win");
var continu = document.getElementById("continue");
var t =0;
function jump(){
    hero.classList.add("animate");
    setTimeout(function(){
    hero.classList.remove("animate");
    },1000);
    // if(obstacleLeft < 30 &&heroTop >= 200 ){
    t++;
    counter.innerHTML ="Score:"+ t;
    var text=document.getElementById("text")
    if(t == 10) { 
        // you_win.innerHTML="you good"
        obstacle.style.animationPlayState="paused";
        you_win.style.visibility="visible";
    }
 if(t == 15){ 
    you_win.style.visibility="visible";
    text.innerHTML="you are a special";
 }
}


// ====================== the lose
var lose = document.getElementById("lose_container");
var checkStatus = setInterval(function(){
    var heroTop =parseInt( window.getComputedStyle(hero).getPropertyValue("top"));
    var obstacleLeft=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft<30 && obstacleLeft>0 && heroTop >= 200 ){
        lose.style.visibility="visible";
    }
},10);

//=====================continue button====================== 
continu=()=>{   
    obstacle.style.animationPlayState="running"
    you_win.style.display = "none";
}
retry=()=>{
    lose.style.visibility="hidden"; 
    t=0
}
