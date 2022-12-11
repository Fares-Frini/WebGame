function startgame() {
  let startgame = document.getElementById("startgame");
  let screen = document.getElementById("gamescreenstart");
  let lost=document.getElementById("lost");
  let button =document.getElementById("restart");
  let eye =document.getElementById("eye");
  eye.style.display="none";
  let hand =document.getElementById("hand");
  hand.style.display="none";
  let wand =document.getElementById("wand");
  wand.style.display="none";
  button.style.display="none";
  lost.style.display="none";
  startgame.style.display = "none";
  mapchoose(screen);
}
function mapchoose(screen) {
  let map1 = document.getElementById("map1");
  let map2 = document.getElementById("map2");
  let map3 = document.getElementById("map3");
  let map4 = document.getElementById("map4");
  screen.style.background = "linear-gradient(black,10%,#400079,black    ) ";
  map1.style.display = "block";
  map2.style.display = "block";
  map3.style.display = "block";
  map4.style.display = "block";
}
function maps1() {
  mapschosen(1);
}
function maps2() {
  mapschosen(2);
}
function maps3() {
  mapschosen(3);
}
function maps4() {
  mapschosen(4);
}
var R;
function mapschosen(R) {
  let map1 = document.getElementById("map1");
  let map2 = document.getElementById("map2");
  let map3 = document.getElementById("map3");
  let map4 = document.getElementById("map4");
  let red = document.getElementById("red");
  let blue = document.getElementById("blue");
  let green = document.getElementById("green");
  map1.style.display = "none";
  map2.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "none";
  red.style.display = "block";
  blue.style.display = "block";
  green.style.display = "block";
  let screen = document.getElementById("gamescreenstart");
  switch (R) {
    case 1:
      screen.style.background = "url(ressources/moon.jpg)";
      screen.style.backgroundSize = "100% 100%";
      break;
    case 2:
      screen.style.background = "url(ressources/desert.jpg)";
      screen.style.backgroundSize = "100% 100%";
      break;
    case 3:
      screen.style.background = "url(ressources/snow.jpg)";
      screen.style.backgroundSize = "100% 100%";
      break;
    case 4:
      screen.style.background = "url(ressources/forest.jpg)";
      screen.style.backgroundSize = "100% 100%";
      break;
  }
  start();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var E;

function random(ennemy) {
  ennemy.style.display = "block";
  E = getRandomInt(10);
  console.log(E);
  while (E == 0 || E == 8 || E == 1) {
    E = getRandomInt(10);
  }
  switch (E) {
    case 2:
      ennemy.style.background = "blue";
      console.log("lets go");
      break;
    case 3:
      ennemy.style.background = "red";
      console.log("lets go");
      break;
    case 4:
      ennemy.style.background = "green";
      console.log("lets go");
      break;
    case 5:
      ennemy.style.background = "purple";
      console.log("lets go");
      break;
    case 6:
      ennemy.style.background = "cyan";
      console.log("lets go");
      break;
    case 7:
      ennemy.style.background = "yellow";
      console.log("lets go");
      break;
    case 9:
      ennemy.style.background = "#582900";
      console.log("lets go");
      break;
  }
}
function moove(name) {
  let moveBy = 1100;

  mov = setInterval(() => {
    document.getElementById(name).style.left = moveBy + "px";
    moveBy--;
    if (moveBy == 350) {
      loose();
      endcycle=1;
    }
    if (moveBy==500) {
      let eye =document.getElementById("eye");
      eye.src = "ressources/scared.png";
      
    }
    if (endcycle == 1) {
      clearInterval(mov);
      document.getElementById(name).style.display= "none";
      endcycle==0;  
    }
  }, 10);

}
function loose()
{
  let lost=document.getElementById("lost");
  let button =document.getElementById("restart");
  button.style.display="block";
  lost.style.display="block";
  let red = document.getElementById("red");
  let blue = document.getElementById("blue");
  let green = document.getElementById("green");
red.style.display = "none";
  blue.style.display = "none";
  green.style.display = "none";
  var player = document.getElementById("player");
  player.style.display = "none";
}

function start() {
  timer();
  var player = document.getElementById("player");
  player.style.display = "block";
  var eye = document.getElementById("eye");
  eye.style.display = "block";
  eye.style.display="block";
  let hand =document.getElementById("hand");
  hand.style.display="block";
  let wand =document.getElementById("wand");
  wand.style.display="block";
  var ennemy = document.getElementById("ennemy");
  random(ennemy);
  moove("ennemy");
}
var time;
function timer() {
  var minute = 0;
  var sec = 0;
  time = setInterval(() => {
    document.getElementById("time").innerHTML = "0" + minute + ":" + sec;
    sec++;
    if (sec == 60) {
      sec = 0;
      minute += 1;
    }
  }, 1000);
}
var C = 0;
function button(R) {
  let player = document.getElementById("player");
  let beem = document.getElementById("beem");
  console.log(R);
  console.log(C);
  R = parseInt(R);
  if (R != C && C != 5 && C != 6 && C != 7 && C != 9) {
    C = C + R;
    console.log(C);
  }
  if (R + C == 9) {
    C = C + R;
  }
  switch (C) {
    case 2:
      player.style.background = "blue";
      beem.style.background = "blue";
      beem.style.boxShadow= "0px 0px 40px 20px blue";
      console.log("lets go");
      C = 2;
      break;
    case 3:
      player.style.background = "red";
      beem.style.background = "red";
      beem.style.boxShadow= "0px 0px 40px 20px red";
      console.log("lets go");
      C = 3;
      break;
    case 4:
      player.style.background = "green";
      beem.style.background = "green";
      beem.style.boxShadow= "0px 0px 40px 20px green";
      console.log("lets go");
      C = 4;
      break;
    case 5:
      player.style.background = "purple";
      beem.style.background = "purple";
      beem.style.boxShadow= "0px 0px 40px 20px purple";
      console.log("lets go");
      C = 5;
      break;
    case 6:
      player.style.background = "cyan";
      beem.style.background = "cyan";
      beem.style.boxShadow= "0px 0px 40px 20px cyan";
      console.log("lets go");
      C = 6;
      break;
    case 7:
      player.style.background = "yellow";
      beem.style.background = "yellow";
      beem.style.boxShadow= "0px 0px 40px 20px yellow";
      console.log("lets go");
      C = 7;
      break;
    case 9:
      player.style.background = "#582900";
      beem.style.background = "#582900";
      beem.style.boxShadow= "0px 0px 40px 20px #582900";
      console.log("lets go");
      C = 9;
      break;
  }
}
window.addEventListener("keydown", function (ev) {
  if (ev.repeat) {
    if (ev.code === "Space") ev.preventDefault();
    return;
  }

  if (ev.code === "Space") {
    console.log("space pressed");
    let beem = document.getElementById("beem");
    let background=document.getElementById("gamescreenstart");
    beem.classList.toggle("AAA");
    background.classList.toggle("BBB");
    beemretract = setInterval(() => {
      beem.classList.toggle("AAA");
      background.classList.toggle("BBB");
      clearInterval(beemretract);
    }, 350);
    ev.preventDefault();
    reset();
  } else if (ev.code === "KeyS") {
    console.log("s pressed");
    button(3);
  } else if (ev.code === "KeyD") {
    console.log("d pressed");
    button(4);
  } else if (ev.code === "KeyF") {
    console.log("f pressed");
    button(2);
  }
});
var endcycle = 0;
function reset() {
  let player = document.getElementById("player");
  let ennemy = document.getElementById("ennemy");
  let beem = document.getElementById("beem");
  clearcolor = setInterval(() => {
    beem.style.background="white";
    beem.style.boxShadow= "0px 0px 40px 20px white";
    clearInterval(clearcolor);
  }, 350);
  player.style.background = "white";
  
  console.log(E);
  console.log(C);
  console.log(R);
  if (E == C) {
    random(ennemy);
    score();
    endcycle = 1;
  }
  R = 0;
  C = 0;
}
var scr = 0;
function score() {
  scr += 10;
  var score = document.getElementById("score");
  score.innerHTML = "0000" + scr;
}
