function startgame() {
  let startgame = document.getElementById("startgame");
  let screen = document.getElementById("gamescreenstart");
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
function start() {
  //timer();
 var player=document.getElementById("player");
  player.style.display="block";
}
/*function timer() {
  let clock = document.getElementById("time");

  for (let i = 0; i < 61; i++) {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    console.log(i);
    sleep(2000).then(() => {});
  }
}*/
var C = 0;
function button(R) {
  let player = document.getElementById("player");
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
      console.log("lets go");
      C = 2;
      break;
    case 3:
      player.style.background = "red";
      console.log("lets go");
      C = 3;
      break;
    case 4:
      player.style.background = "green";
      console.log("lets go");
      C = 4;
      break;
    case 5:
      player.style.background = "purple";
      console.log("lets go");
      C = 5;
      break;
    case 6:
      player.style.background = "cyan";
      console.log("lets go");
      C = 6;
      break;
    case 7:
      player.style.background = "yellow";
      console.log("lets go");
      C = 7;
      break;
    case 9:
      player.style.background = "#582900";
      console.log("lets go");
      C = 9;
      break;
  }
  let body = document.getElementById("body");
  window.addEventListener("keydown", function (ev) {
    if (ev.keyCode === 32) {
      console.log("space pressed");
      ev.preventDefault();
      reset();
    } else {
      if (ev.keyCode === 83) {
        console.log("s pressed");
        button(3);
      } else {
        if (ev.keyCode === 68) {
          console.log("d pressed");
          button(4);
        } else {
          if (ev.keyCode === 70) {
            console.log("f pressed");
            button(2);
          }
        }
      }
    } 
  });

  function reset() {
    let player = document.getElementById("player");
    player.style.background = "white";
    R = 0;
    C = 0;
  }
}
