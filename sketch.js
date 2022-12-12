let canvasState = "IDLE"; //"BUILDIN, IDLE, BUILDOUT, DAYEND, END"

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
    this.ang = 3.1415 / 6.0;
    this.changeAng();
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
      push();
      translate(width / 2, height / 2);
      rotate(this.ang);
      textSize(128);
      text(this.emoji, -64, 40);
      pop();
    }
  }
  changeAng() {
    this.ang = -this.ang;
    setTimeout(() => {
      this.changeAng();
    }, 500);
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

class checkerBg {
  constructor(interval) {
    this.interval = interval;
    this.checkerArray = [];
    for (let i = 0; i < width; i += width / interval) {
      for (let j = 0; j < height; j += height / interval) {
        this.checkerArray.push(
          new checker(i, j, width / interval, height / interval)
        );
      }
    }
  }
  display() {
    this.checkerArray.map((element) => {
      element.display();
    });
  }
  startUpdate() {
    this.checkerArray.map((element) => {
      element.update();
    });
  }
}

class checker {
  constructor(x, y, w, h) {
    this.color = color(random(360), 60, 60);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display() {
    push();
    fill(this.color);
    strokeWeight(10);
    stroke(255);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  update() {
    let randomHue;
    if (checkStat() == 0) {
      randomHue = random(81, 166);
    } else if (checkStat() == 1) {
      randomHue = random(30, 60);
    } else if (checkStat() == 2) {
      randomHue = random(0, 30);
    }
    this.color = color(randomHue, 50, 80);
    setTimeout(() => {
      this.update();
    }, 200);
  }
}

function checkStat() {
  if (
    playerStat.money < 100 ||
    playerStat.health < 5 ||
    playerStat.relationship < 5 ||
    playerStat.learning < 5
  ) {
    return 2;
  } else if (
    playerStat.money < 150 ||
    playerStat.health < 10 ||
    playerStat.relationship < 10 ||
    playerStat.learning < 10
  ) {
    return 1;
  } else {
    return 0;
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
  cBg = new checkerBg(10);
  cBg.startUpdate();
}

//!Draw function
function draw() {
  background(255);

  if (canvasState == "BUILDIN") {
    cBg.display();
    choicesDisplayArr.map((element) => {
      element.buildIn();
    });
    console.log("BUILDIN");
  }

  if (canvasState == "IDLE") {
    cBg.display();
    choicesDisplayArr.map((element) => {
      element.display();
    });
    console.log("IDLE");
  }

  if (canvasState == "BUILDOUT") {
    cBg.display();
    choicesDisplayArr.map((element) => {
      element.buildOut();
    });
    console.log("BUILDOUT");
  }

  if (canvasState == "END") {
    if (dayNum < 7) {
      push();
      translate(width / 2, height / 2);
      textFont("menlo");
      textSize(32);
      textAlign(CENTER);
      text("The end", 0, 0);
      textSize(24);
      text("You failed to live through", 0, 40);
      text("a week in college", 0, 60);
      pop();
    } else {
      for (let i = 0; i < confettiArr.length; i++) {
        confettiArr[i].display();
        confettiArr[i].move();
        if (confettiArr[i].y > height) {
          confettiArr[i] = new confetti(random(width), 0);
        }
      }
      push();
      translate(width / 2, height / 2);
      textFont("menlo");
      textSize(32);
      textAlign(CENTER);
      text("The end", 0, 0);
      textSize(24);
      text("Congrats!", 0, 40);
      text("You lived through a week", 0, 65);
      text("in college", 0, 92);
      pop();
    }

    console.log("ENDING");
  }

  if (canvasState == "DAYEND") {
    if (checkStat() == 0) {
      push();
      for (let i = 0; i < confettiArr.length; i++) {
        confettiArr[i].display();
        confettiArr[i].move();
        if (confettiArr[i].y > height) {
          confettiArr[i] = new confetti(random(width), 0);
        }
      }
      pop();
    }

    push();
    translate(width / 2, height / 2);
    strokeWeight(4);
    stroke(0);
    textFont("menlo");
    textSize(64);
    textAlign(CENTER);
    text("Day " + dayNum, 0, 0);
    noStroke(0);
    textSize(16);

    if (checkStat() == 0) {
      text("You are doing good, keep it up.", 0, 60);
    } else if (checkStat() == 1) {
      text("Keep an eye on your stats!", 0, 60);
    } else if (checkStat() == 2) {
      text("You should take better care", 0, 60);
      text("of your self!", 0, 80);
    }
    pop();
  }
}
