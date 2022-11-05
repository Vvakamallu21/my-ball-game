var ball 
var ballimage
var pong 
var velocityNumber 
var edges
var ballTouch = 0 
var score = 0
function preload(){
  ballimage = loadImage("ballImage2.png")
}
function setup() {

  createCanvas(400, 400);

  velocityNumber = Math.round(random(10,15))

  edges = createEdgeSprites()
  console.log(edges)

  createBall()

  pong = createSprite(200,350,80,10)
  pong.shapeColor = "red"

  if(pong.x > 360){
    pong.x = 340
  }
  if(pong.x < 40){
    pong.x = 40
  }
  
}

function draw() {
  background("blue");

  pong.x = mouseX

  fill("black");
  textSize(30);
  text("score" + ": " + score, 10, 30);

  ball.bounceOff(edges[1])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[0])
  ball.bounceOff(pong)

  if(pong.isTouching(ball)){
    ballTouch = ballTouch + 1
    score = score + 1
  }
  if(ballTouch/5 === 0 && ballTouch != 0 ){
    createBall()
  }

  if(pong.x > 360){
    pong.x = 360
  }
  if(pong.x < 40){
    pong.x = 40
  }
  if(ball.y > 375){
    fill("red")
    textSize(65)
    text("gAmE oVeR",25,200)
    ball.velocityX = 0
    ball.velocityY = 0
    pong.x = 200
    score = score
  }

  drawSprites()
}
function createBall(){
  ball = createSprite(Math.round(random(20,400)),Math.round(random(20,150)),10,10);
  ball.addImage(ballimage)
  ball.scale = 0.1
  ball.velocityX = velocityNumber
  ball.velocityY = -velocityNumber
}