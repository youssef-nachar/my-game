var hero =document.getElementById("hero");
var obstacle = document.getElementById("obstacle");
var counter = document.getElementById("counter");
var you_win=document.getElementById("you_win");
var continu=document.getElementById("continue");
var t =0;
function jump(){
    hero.classList.add("animate");
    setTimeout(function(){
    hero.classList.remove("animate");
    },1000);
    t++;
    counter.innerHTML=t;
    if(t == 3) { 
        obstacle.style.animation= "paused";
        you_win.style.visibility="visible";
    }
}
continu=()=>{   
    you_win.style.display = "none";
    obstacle.style.animation="running";
    
}
var checkStatus = setInterval(function(){
    var heroTop =parseInt( window.getComputedStyle(hero).getPropertyValue("top"));
    var obstacleLeft=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft<30 && obstacleLeft>0 && heroTop >= 200 ){
        // obstacle.style.animation="none";
        // obstacle.style.display="none";
         document.write("you lose");
    }
},10);

// var retry = document.getElementById("retry");
// var play = document.getElementById("play");
// click=0;
// function play(){
//     if(click == 1){
//             retry.style.display="none";
//         }
          
// }

