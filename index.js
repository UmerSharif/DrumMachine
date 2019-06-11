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
      //geting position of the pad
      let padleft = pad.getBoundingClientRect().left;
      let padtop = pad.getBoundingClientRect().top;

      createBalls(index, padleft, padtop);
    });
  });

  //create bubbles
  const createBalls = (index, padleft, padtop) => {
    const ball = document.createElement("div");
    visual.appendChild(ball);
    ball.style.backgroundColor = colors[index];
    ball.style.left = padleft + "px";
    ball.style.top = padtop + "px";
    console.log(padtop);
    ball.style.animation = "jump 1.5s ease";
    ball.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
