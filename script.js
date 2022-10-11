const char = document.querySelector("#character");
const block = document.querySelector("#block");

document.body.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    const mario = document.querySelector("#mario");
    if (!char.classList.contains("jump")) {
      mario.src =
        "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/8cb20f6034485a1.png";
      char.classList.add("jump");
    }

    setTimeout(function () {
      char.classList.remove("jump");
      mario.src = "img/pngwing.com.png";
    }, 500);
  }
});
let i = 0;
let b = 0;
localStorage.setItem("score", b);
const checkHit = setInterval(() => {
  const gameOver = document.querySelector("#gameOver");
  let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  let score = document.querySelector("#points");
  let bestScore = document.querySelector("#bestscore");
  bestScore.innerHTML = `Best score:${localStorage.getItem("score")}`;

  if (blockLeft < 50 && blockLeft > 0 && charTop >= 120) {
    block.style.animation = "none";
    block.style.display = "none";
    gameOver.style.display = "block";
  }

  if (blockLeft < 50 && blockLeft > 0 && charTop <= 115) {
    i++;
    score.textContent = `Score: ${i}`;
  }
  let best = localStorage.getItem("score");
  if (i > best) {
    best = i;
  }
}, 50);
