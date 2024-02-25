var hero =document.getElementById("hero");
var obstacle = document.getElementById("obstacle");
function jump(){
    hero.classList.add("animate");
    setTimeout(function(){
    hero.classList.remove("animate");
    },2000);
}

var checkStatus = setInterval(function(){
    var heroTop =parseInt( window.getComputedStyle(hero).getPropertyValue("top"));
    var obstacleLeft=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft<30 && obstacleLeft>0 && heroTop>=200 ){
        // obstacle.style.animation="none";
        // obstacle.style.display="none";
          document.write("you lose");
    }
},10);


var retry = document.getElementById("retry");

function retry(){
    retry.classList.remove("retry")
}
