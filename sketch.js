//Create variables here
var  dog,happyDog,database,foodS,foodStock;
var dogImg1,dogImg2;

function preload()
{
  //load images here
  dogImg1=loadImage("images/Dog.png");
  dogImg2=loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,400,0,0);
  dog.addImage(dogImg1);
  dog.scale=0.2;
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(dogImg2);
  }text("Note: Press UP_ARROW Key To Feed Drago Milk!",200,40);


  drawSprites();
  //add styles here
  textSize(20);
  fill(red);
  stroke();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}


