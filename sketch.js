var tailsImg, tails;
var rocksImg, rocks, rocksGroup;
var missileImg, missile, missilesGroup;
var eggmanImg, eggman;
var IslandImg, Island;

function preload() {
  tailsImg = loadImage("tailsflying.png");
  //rocksImg= loadImage("rock.png");
  missileImg = loadImage("Missile.jpg");
  eggmanImg = loadImage("eggman.webp");
  IslandImg = loadImage("island.png");
}

function setup() {
  createCanvas(600, 600);

  Island = createSprite(200, 150);
  Island.addImage("island", IslandImg);
  Island.scale = 2;
  Island.velocityX = 2;

  tails = createSprite(300, 200);
  tails.addImage(tailsImg);
  tails.scale = 0.3;

  eggman = createSprite(50, 100);
  eggman.addImage(eggmanImg);
  eggman.scale = 0.4;

  missilesGroup = new Group();
  rocksGroup = new Group();
}

function draw() {
  background("white");
  if (Island.x > 500) {
    Island.x = Island.width / 4;
  }

  spawnMissiles();
  drawSprites();
}

function spawnMissiles() {
  if (frameCount % 60 === 0) {
    missile = createSprite(100, 15);
    missile.y = Math.round(random(100, 200));
    missile.x = Math.round(random(500, 600));
    missile.addImage(missileImg);
    missile.scale = 0.2;
    missile.velocityX = -3;
    missile.lifetime = 700;
    missilesGroup.add(missile);
  }
}
