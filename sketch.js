const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;

var bg, bgImg;
var theif, theifImg
var spiderman, spidermanImg;
var tower, towerImg;
var spiderman1
var car
var carImage
var bamImg

function preload() {
  bamImg = loadImage("assets/bam2.png")
  carImage = loadImage("assets/car.png")
  bgImg = loadImage("assets/background2.jpg")
  theifImg = loadImage("assets/theif6.png")
  spidermanImg = loadImage("assets/spiderman2.png")
  towerImg = loadImage("assets/tower.gif")
}

function setup() {


  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();

  world = engine.world;
  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 2
  /* var options = {
     fricton: 1,
     density: 0.8
   }
   spiderman2 = Bodies.rectangle(75, height - 200, 100, 100,options)
   World.add(world, spiderman2)
 */
  //creating the player sprite
  theif = createSprite(width - 150, height - 100, 50, 50);
  theif.addImage(theifImg)
  theif.scale = 0.5

  spiderman = createSprite(75, height - 200, 50, 50);
  spiderman.addImage(spidermanImg)
  spiderman.scale = 0.4
  car = createSprite(200, height - 20, 20, 20)
  car.addImage(carImage)
  car.scale = 0.8
}

function draw() {
  background(0);
  //imageMode(CENTER)
  //image(spidermanImg, spiderman2.position.x, spiderman2.position.y, 50, 50)
  Engine.update(engine);


  if (keyDown(RIGHT_ARROW)) {
    spiderman.x += 5
  }
  if (keyDown(UP_ARROW)) {
    spiderman.y -= 5
  }
  if (keyDown(DOWN_ARROW)) {
    spiderman.y += 5
  }
  if (keyDown(LEFT_ARROW)) {
    spiderman.x -= 5
  }
  if(spiderman.isTouching(theif)){
    theif.addImage(bamImg);
  }

  drawSprites();

}
