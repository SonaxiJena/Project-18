var alien, alienimg
var apple, appleimg
var boy, boyimg
var diamonds, diamondsimg
var gardenimg
function preload(){
  alienimg = loadAnimation("alien1.png","alien2.png")
  appleimg = loadImage("apple.png")
  boyimg = loadAnimation("boy1.png","boy2.png")
  diamondsimg = loadImage("diamonds.png")
  gardenimg = loadImage("garden.png")
}

function setup() {
  createCanvas(400, 400);
  alien = createSprite(200,300);
  alien.addAnimation("aaa",alienimg)
  apple = createSprite(100,200);
  apple.addImage("bbb",appleimg)
  apple.scale = 0.05
  boy = createSprite(150,300);
  boy.addAnimation("ccc",boyimg)
  boy.scale = 0.10
  diamonds = createSprite(100,100)
  diamonds.addImage("ddd",diamondsimg)
  diamonds.scale = 0.05
}

function draw() {
  background(gardenimg);
  drawSprites();
}