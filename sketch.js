var canvas;
var player,skeleton,monster,ghost;
var playerImg,backgroundImg,skeletonImg,monsterImg,ghostImg;


function preload(){
    playerImg = loadImage()
    backgroundImg = loadImage()
    skeletonImg = loadImage()
    monsterImg = loadImage()
    ghostImg = loadImage()
}


function setup(){
    canvas = createCanvas(windowWidth, windowHeight)
    
    //criando o player 
    player = createSprite(windowWidth/4,windowHeight-50,50,50)
}


function draw(){
    background('red');
    
    drawSprites();
}


