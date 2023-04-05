for(var i=0; i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var event=this.innerHTML;
  makesound(event);
  animation(event);
});
}
  document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
  });

  function makesound(key){
    
  switch(key){
    case "w":
        var kick=new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;
    case "a":
        var crash=new Audio('sounds/crash.mp3');
    crash.play();
    break;
    case "s":
        var snare=new Audio('sounds/snare.mp3');
    snare.play();
    break;
    case "d":
        var tom1=new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case "j":
        var tom2=new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case "k":
        var tom3=new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case "l":
        var tom4=new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
  }
}
    



function animation(currentkey){
var activekey=document.querySelector("."+currentkey);
activekey.classList.add("pressed");
setTimeout(function(){
    activekey.classList.remove("pressed")
},100);
}