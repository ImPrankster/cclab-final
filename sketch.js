let canvasState = "IDLE"; //"BUILDIN, IDLE, BUILDOUT"

let choicesDisplayArr;
let confettiArr = [];

class choicesDisplay {
  constructor(emoji) {
    this.x = Math.floor(Math.random() * 401) - 1;
    this.y = Math.floor(Math.random() * 401) - 1;
    this.xSpd = Math.floor(Math.random() * 2 - 1) - 1;
    this.ySpd = Math.floor(Math.random() * 2 - 1) - 1;
    this.emoji = emoji;
    this.tW = 0;
    this.isChoosed = false;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  bounce() {
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -1;
    } else if (this.x > width) {
      this.x = width;
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * -1;
    } else if (this.y > height) {
      this.y = height;
      this.ySpd = this.ySpd * -1;
    }
  }
  display() {
    push();
    textSize(128);
    text(this.emoji, this.x - 64, this.y + 64);
    this.move();
    this.bounce();
    pop();
  }
  buildIn() {
    push();
    textSize(128);
    fill(0, 0, 0, this.tW);
    text(this.emoji, this.x - 64, this.y + 64);
    this.tW += 0.05;
    pop();
  }
  buildOut() {
    if (!this.isChoosed) {
      return;
    } else {
      for (let i = 0; i < confettiArr.length; i++) {
        confettiArr[i].display();
        confettiArr[i].move();
        if (confettiArr[i].y > height) {
          confettiArr[i] = new confetti(random(width), 0);
        }
      }
      textSize(128);
      text(this.emoji, 200 - 64, 200 + 64);
    }
  }
}

class confetti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSize = random(10, 20);
    this.ySize = 0.7 * this.xSize;
    this.hue = random(0, 255);
    this.time = 0;
    this.amp = random(5, 10);
    this.angReset = random(0, 2 * PI); //each confetti start rotating at a different place.
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.time + this.angReset);

    noStroke();
    fill(this.hue, 75, 75);

    let cXSize = this.xSize * sin(this.time + this.angReset); //mimic confetti rotation
    let cYSize = this.ySize * cos(this.time + this.angReset);

    rect(-cXSize / 2, -cYSize / 2, cXSize, cYSize);
    pop();
    this.time += this.amp / 100;
  }
  move() {
    this.y += this.amp / 2;
  }
}

function loadChoices(arr) {
  choicesDisplayArr = arr.map((element) => {
    return new choicesDisplay(element);
  });
}

//!Setup function
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  for (let i = 0; i < random(50, 70); i++) {
    confettiArr[i] = new confetti(random(width), random(height));
  }
}

//!Draw function
function draw() {
  background(255);

  if (canvasState == "BUILDIN") {
    choicesDisplayArr.map((element) => {
      element.buildIn();
    });
    console.log("BUILDIN");
  }

  if (canvasState == "IDLE") {
    choicesDisplayArr.map((element) => {
      element.display();
    });
    console.log("IDLE");
  }

  if (canvasState == "BUILDOUT") {
    choicesDisplayArr.map((element) => {
      element.buildOut();
    });
    console.log("BUILDOUT");
  }
}
