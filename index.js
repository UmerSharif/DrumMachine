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
      let padwidth = pad.getBoundingClientRect().width;
      let padheight = pad.getBoundingClientRect().height;

      createBalls(index, padleft, padtop, padwidth, padheight);
    });
  });

  //create bubbles
  const createBalls = (index, padleft, padtop, padwidth, padheight) => {
    const ball = document.createElement("div");
    visual.appendChild(ball);
    let halfBallWidth = ball.getBoundingClientRect().width / 2;
    ball.style.backgroundColor = colors[index];
    ball.style.left = padleft + padwidth / 2 - halfBallWidth + "px";
    ball.style.top = padtop + "px";
    console.log(padleft, padwidth);
    ball.style.animation = "jump 1.6s ease-in-out";
    ball.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
