window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pad-select");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#bad867",
    "#8463b8",
    "#e67dae",
    "#72b5e2",
    "#e49e76"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBalls(index);
    });
  });

  //create bubbles
  const createBalls = index => {
    const ball = document.createElement("div");
    visual.appendChild(ball);
    ball.style.backgroundColor = colors[index];
    ball.style.animation = "jump 1s ease";
    ball.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
