const roadArea = document.querySelector(".road");
let player = { step: 5 };
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};
let score = 0;
const startBtn = document.querySelector(".btn");
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(event) {
  keys[event.key] = true;
}
function keyUp(event) {
  keys[event.key] = false;
}

function moveLines() {
  let lines = document.querySelectorAll(".lines");
  lines.forEach((item) => {
    if (item.y >= 700) {
      item.y = item.y - 750;
    }
    item.y = item.y + player.step;
    item.style.top = item.y + "px";
  });
}

function moveEnemies(playercar) {
  let vehicles = document.querySelectorAll(".enemies");
  let playercarb = playercar.getBoundingClientRect();

  vehicles.forEach((item) => {
    othercarb = item.getBoundingClientRect();
    if (
      !(
        playercarb.bottom < othercarb.top ||
        playercarb.top > othercarb.bottom ||
        playercarb.left > othercarb.right ||
        playercarb.right < othercarb.left
      )
    ) {
      alert("The Final Score is " + score + "\n Press OK to play again");
      location.reload();
      player.start = false;
    }
    if (item.y >= 815) {
      // Player will earn score when the car will pass enemy car
      score = score + 1;
      startBtn.innerHTML = "Score: " + score;
      item.y = -300;
      item.style.left = Math.floor(Math.random() * 350) + "px";
    }
    item.y = item.y + player.step;
    item.style.top = item.y + "px";
  });
}

function playArea() {
  let playercar = document.querySelector(".car");
  let road = roadArea.getBoundingClientRect();
  if (player.start) {
    moveLines();
    moveEnemies(playercar);
    if (keys.ArrowUp && player.y > road.top + 80) {
      //we're seeing if the up arrow is pressed then player should not exceed the road top
      player.y = player.y - player.step;
    }

    if (keys.ArrowDown && player.y < road.bottom - 150) {
      player.y = player.y + player.step;
    }

    if (keys.ArrowLeft && player.x > 0) {
      player.x = player.x - player.step;
    }

    if (keys.ArrowRight && player.x < road.width - 64) {
      player.x = player.x + player.step;
    }
    //based on left and right we assign position to our car i.e player
    playercar.style.top = player.y + "px";
    playercar.style.left = player.x + "px";
    window.requestAnimationFrame(playArea);
  }
}

function createRoadLines() {
  for (let i = 0; i < 5; i++) {
    let roadlines = document.createElement("div");
    roadlines.setAttribute("class", "lines");
    roadlines.y = i * 150;
    roadlines.style.top = roadlines.y + "px";
    roadArea.appendChild(roadlines);
  }
}

function createCar() {
  let playercar = document.createElement("div");
  playercar.setAttribute("class", "car");
  roadArea.appendChild(playercar);
  player.x = playercar.offsetLeft;
  player.y = playercar.offsetTop;
}

function createTraffic() {
  for (x = 0; x < 4; x++) {
    let enemies = document.createElement("div");
    enemies.setAttribute("class", "enemies");
    enemies.y = (x + 1) * 350 * -1;
    enemies.style.top = enemies.y + "px";
    enemies.style.left = Math.floor(Math.random() * 350) + "px";
    roadArea.appendChild(enemies);
  }
}

function init() {
  player.start = true;
  window.requestAnimationFrame(playArea);
  createRoadLines();
  createCar();
  createTraffic();
}

function startgame() {
  document.querySelector(".push").style.border = "5px solid rgb(86,50,57)";
  startBtn.style.backgroundColor = "rgb(86,50,57)";
  startBtn.style.cursor = "not-allowed";
  startBtn.innerHTML = "Use Arrow keys to Navigate";
  init();
}
