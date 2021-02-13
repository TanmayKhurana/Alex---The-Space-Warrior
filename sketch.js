var mainSpaceship, mainSpaceshipimg;
var finalSpaceship, finalSpaceshipimg;
var obstacle1, obstacle1img, obstacle2, obstacle2img, obstacle3, obstacle3img, obstacle4, obstacle4img;
var obstacle5, obstacle5img, obstacle6, obstacle6img, obstacle7, obstacle7img, obstacle8, obstacle8img;
var obstacle9, obstacle9img, obstacle10, obstacle10img, obstacle11, obstacle11img, obstacle12, obstacle12img;
var score = 0
var shot = [];
var m = 0;
function preload(){
  obstacle1img = loadAnimation("obstacle1.png")
  obstacle2img = loadAnimation("obstacle2.png")
  obstacle3img = loadAnimation("obstacle3.png")
  obstacle4img = loadAnimation("obstacle4.png")
  obstacle5img = loadAnimation("obstacle5.png")
  obstacle6img = loadAnimation("obstacle6.png")
  obstacle7img = loadAnimation("obstacle7.png")
  obstacle8img = loadAnimation("obstacle8.png")
  obstacle9img = loadAnimation("obstacle9.png")
  obstacle10img = loadAnimation("obstacle10.png")
  obstacle11img = loadAnimation("obstacle11.png")
  obstacle12img = loadAnimation("obstacle12.png")
  mainSpaceshipimg = loadAnimation("spaceshipmain.png")
  finalSpaceshipimg = loadAnimation("finalspaceship.png")
}
function setup() {
  createCanvas(800,850)

  gamestate = "play"

  mainSpaceship = createSprite(425, 780)
  mainSpaceship.addAnimation("player", mainSpaceshipimg)
  mainSpaceship.scale = 0.4

  finalSpaceship = createSprite(random(200, 600), -100)
  finalSpaceship.addAnimation("villain", finalSpaceshipimg)
  finalSpaceship.velocityY = 3

  obstacle1 = createSprite(random(50, 750), -550)
  obstacle1.addAnimation("opponent", obstacle1img)
  obstacle1.scale = 0.4
  obstacle1.vlocityY = 5
  obstacle2 = createSprite(random(50, 750), -450)
  obstacle2.addAnimation("bad", obstacle2img)
  obstacle2.scale = 0.3
  obstacle2.velocityY = 5
  obstacle3 = createSprite(random(50, 750), -550)
  obstacle3.addAnimation("evil", obstacle3img)
  obstacle3.scale = 0.4
  obstacle3.velocityY = 5
  obstacle4 = createSprite(random(50, 750), -450)
  obstacle4.addAnimation("coroa", obstacle4img)
  obstacle4.scale = 0.3
  obstacle4.velocityY = 5
  obstacle5 = createSprite(random(50, 750), -350)
  obstacle5.addAnimation("op", obstacle5img)
  obstacle5.scale = 0.4
  obstacle5.velocityY = 5
  obstacle6 = createSprite(random(50, 750), -250)
  obstacle6.addAnimation("ba", obstacle6img)
  obstacle6.scale = 0.3
  obstacle6.velocityY = 5
  obstacle7 = createSprite(random(50, 750), -350)
  obstacle7.addAnimation("evi", obstacle7img)
  obstacle7.scale = 0.4
  obstacle7.velocityY = 5
  obstacle8 = createSprite(random(50, 750), -250)
  obstacle8.addAnimation("coron", obstacle8img)
  obstacle8.scale = 0.3
  obstacle8.velocityY = 5
  obstacle9 = createSprite(random(50, 750), -150)
  obstacle9.addAnimation("opp", obstacle9img)
  obstacle9.scale = 0.4
  obstacle9.velocityY = 5
  obstacle10 = createSprite(random(50, 750), -50)
  obstacle10.addAnimation("bal", obstacle10img)
  obstacle10.scale = 0.3
  obstacle10.velocityY = 5
  obstacle11 = createSprite(random(50, 750), -150)
  obstacle11.addAnimation("evih", obstacle11img)
  obstacle11.scale = 0.4
  obstacle11.velocityY = 5
  obstacle12 = createSprite(random(50, 750), -50)
  obstacle12.addAnimation("coco", obstacle12img)
  obstacle12.scale = 0.3
  obstacle12.velocityY = 5  
  for (var i = 0; i<50; i++) {
    shot[i] = createSprite(2000, 200, 5, 5)
    shot[i].shapeColor = "red"
  }
}

function draw() {
  background(0);  
  
  if (keyDown("left")){
   mainSpaceship.x = mainSpaceship.x-18;
  }
  if (keyDown("right")){
    mainSpaceship.x = mainSpaceship.x+18;
  }
  if (keyDown("space")) {
    shot[m].velocityY = -15
    shot[m].x = mainSpaceship.x;
    shot[m].y = mainSpaceship.y-60;
    m = m+1
    if (m>49) {
      m = 0;
    }
  }
  textSize(30)
  text(round(score), 730, 800)
  text("Strength =", 580, 800)
  changingspeed();
  afterTouching();
  afterleavingcanvas();

  if (score<=-200){
    score = 0
    obstacle1.velocityY = 0
    obstacle2.velocityY = 0
    obstacle3.velocityY = 0
    obstacle4.velocityY = 0
    obstacle5.velocityY = 0
    obstacle6.velocityY = 0
    obstacle7.velocityY = 0
    obstacle8.velocityY = 0
    obstacle9.velocityY = 0
    obstacle10.velocityY = 0
    obstacle11.velocityY = 0
    obstacle12.velocityY = 0
    finalSpaceship.velocityY = 0
    obstacle1.x = 5000
    obstacle1.y = 5000
    obstacle2.x = 5000
    obstacle2.y = 5000
    obstacle3.x = 5000
    obstacle3.y = 5000
    obstacle4.x = 5000
    obstacle4.y = 5000
    obstacle5.x = 5000
    obstacle5.y = 5000
    obstacle6.x = 5000
    obstacle6.y = 5000
    obstacle7.x = 5000
    obstacle7.y = 5000
    obstacle8.x = 5000
    obstacle8.y = 5000
    obstacle9.x = 5000
    obstacle9.y = 5000
    obstacle10.x = 5000
    obstacle10.y = 5000
    obstacle11.x = 5000
    obstacle11.y = 5000
    obstacle12.x = 5000
    obstacle12.y = 5000
    finalSpaceship.x = 6000
    finalSpaceship.y = 6000
    textSize(30)
    text("GameOver better luck next time", 200, 425)
  }
  drawSprites();
}

function changingspeed(){
  if (score>=10){
    obstacle1.velocityY = 15
    obstacle2.velocityY = 15
    obstacle3.velocityY = 15
    obstacle4.velocityY = 15
    obstacle5.velocityY = 15
    obstacle6.velocityY = 15
    obstacle7.velocityY = 15
    obstacle8.velocityY = 15
    obstacle9.velocityY = 15
    obstacle10.velocityY = 15
    obstacle11.velocityY = 15
    obstacle12.velocityY = 15
    finalSpaceship.velocityY = 10
  }
  if (score>=50){
    obstacle1.velocityY = 20
    obstacle2.velocityY = 20
    obstacle3.velocityY = 20
    obstacle4.velocityY = 20
    obstacle5.velocityY = 20
    obstacle6.velocityY = 20
    obstacle7.velocityY = 20
    obstacle8.velocityY = 20
    obstacle9.velocityY = 20
    obstacle10.velocityY = 20
    obstacle11.velocityY = 20
    obstacle12.velocityY = 20
    finalSpaceship.velocityY = 15
  }
  if (score>=150){
    obstacle1.velocityY = 25
    obstacle2.velocityY = 25
    obstacle3.velocityY = 25
    obstacle4.velocityY = 25
    obstacle5.velocityY = 25
    obstacle6.velocityY = 25
    obstacle7.velocityY = 25
    obstacle8.velocityY = 25
    obstacle9.velocityY = 25
    obstacle10.velocityY = 25
    obstacle11.velocityY = 25
    obstacle12.velocityY = 25
    finalSpaceship.velocityY = 18
  }
  if (score>=200){
    obstacle1.velocityY = 28
    obstacle2.velocityY = 28
    obstacle3.velocityY = 28
    obstacle4.velocityY = 28
    obstacle5.velocityY = 28
    obstacle6.velocityY = 28
    obstacle7.velocityY = 28
    obstacle8.velocityY = 28
    obstacle9.velocityY = 28
    obstacle10.velocityY = 28
    obstacle11.velocityY = 28
    obstacle12.velocityY = 28
    finalSpaceship.velocityY = 25
  }
  if (score>=250){
    obstacle1.velocityY = 30
    obstacle2.velocityY = 30
    obstacle3.velocityY = 30
    obstacle4.velocityY = 30
    obstacle5.velocityY = 30
    obstacle6.velocityY = 30
    obstacle7.velocityY = 30
    obstacle8.velocityY = 30
    obstacle9.velocityY = 30
    obstacle10.velocityY = 30
    obstacle11.velocityY = 30
    obstacle12.velocityY = 30
    finalSpaceship.velocityY = 27
  }
  if (score>=300){
    obstacle1.velocityY = 35
    obstacle2.velocityY = 35
    obstacle3.velocityY = 35
    obstacle4.velocityY = 35
    obstacle5.velocityY = 35
    obstacle6.velocityY = 35
    obstacle7.velocityY = 35
    obstacle8.velocityY = 35
    obstacle9.velocityY = 35
    obstacle10.velocityY = 35
    obstacle11.velocityY = 35
    obstacle12.velocityY = 35
    finalSpaceship.velocityY = 30
  }
  if (score>=350){
    obstacle1.velocityY = 40
    obstacle2.velocityY = 40
    obstacle3.velocityY = 40
    obstacle4.velocityY = 40
    obstacle5.velocityY = 40
    obstacle6.velocityY = 40
    obstacle7.velocityY = 40
    obstacle8.velocityY = 40
    obstacle9.velocityY = 40
    obstacle10.velocityY = 40
    obstacle11.velocityY = 40
    obstacle12.velocityY = 40
    finalSpaceship.velocityY = 35
  }
}

function afterleavingcanvas(){
  if (obstacle12.y>850){
    score = score-8
    obstacle12.x = random(50, 750)
    obstacle12.y = -50
  }
  if (obstacle11.y>850){
    score = score-8
    obstacle11.x = random(50, 750)
    obstacle11.y = -150
  }
  if (obstacle10.y>850){
    score = score-8
    obstacle10.x = random(50, 750)
    obstacle10.y = -50
  }
  if (obstacle9.y>850){
    score = score-8
    obstacle9.x = random(50, 750)
    obstacle9.y = -150
  }
  if (obstacle8.y>850){
    score = score-8
    obstacle8.x = random(50, 750)
    obstacle8.y = -250
  }
  if (obstacle7.y>850){
    score = score-8
    obstacle7.x = random(50, 750)
    obstacle7.y = -350
  }
  if (obstacle6.y>850){
    score = score-8
    obstacle6.x = random(50, 750)
    obstacle6.y = -250
  }
  if (obstacle5.y>850){
    score = score-8
    obstacle5.x = random(50, 750)
    obstacle5.y = -350
  }
  if (obstacle4.y>850){
    score = score-8
    obstacle4.x = random(50, 750)
    obstacle4.y = -450
  }
  if (obstacle3.y>850){
    score = score-8
    obstacle3.x = random(50, 750)
    obstacle3.y = -550
  }
  if (obstacle2.y>850){
    score = score-8
    obstacle2.x = random(50, 750)
    obstacle2.y = -450
  }
  if (obstacle1.y>850){
    score = score-8
    obstacle1.x = random(50, 750)
    obstacle1.y = -550
  }
}

function afterTouching(){
  for (var i = 0; i < 50; i++) {
    if (shot[i].isTouching(finalSpaceship)){
      finalSpaceship.x = random(200, 600)
      finalSpaceship.y  = -100
      score = score+0.1
      shot[i].x = 2000
      shot[i].y = 200
    }
    if (shot[i].isTouching(obstacle12)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle12.x = random(50, 750)
      obstacle12.y = -50
    }
    if (shot[i].isTouching(obstacle11)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle11.x = random(50, 750)
      obstacle11.y = -150
    }
    if (shot[i].isTouching(obstacle10)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
    }
    if (shot[i].isTouching(obstacle9)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle9.x = random(50, 750)
      obstacle9.y = -150
    }
    if (shot[i].isTouching(obstacle8)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle8.x = random(50, 750)
      obstacle8.y = -250
    }
    if (shot[i].isTouching(obstacle7)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle7.x = random(50, 750)
      obstacle7.y = -350
    }
    if (shot[i].isTouching(obstacle6)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle6.x = random(50, 750)
      obstacle6.y = -250
    }
    if (shot[i].isTouching(obstacle5)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle5.x = random(50, 750)
      obstacle5.y = -350
    }
    if (shot[i].isTouching(obstacle4)) {
      shot[i].x = 2000
      shot[i].y = 200
    }
    if (shot[i].isTouching(obstacle3)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle3.x = random(50, 750)
      obstacle3.y = -550
    }
    if (shot[i].isTouching(obstacle2)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle2.x = random(50, 750)
      obstacle2.y = -450
    }
    if (shot[i].isTouching(obstacle1)) {
      shot[i].x = 2000
      shot[i].y = 200
      score = score+1
      obstacle1.x = random(50, 750)
      obstacle1.y = -550
    }
  }
}