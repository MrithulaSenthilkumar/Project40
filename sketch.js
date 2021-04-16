var database,backgroundImg,fruit1Img,fruit2Img,fruit3Img,fruit4Img,fruit5Img;
var player,form,game;
var player1,player2,playerImg;
var allPlayer;
var fruits,fruitsGroup;
var gameState=0;
var playerCount=0;
var score=0;
var player1Score=0;
var player2Score=0;

function preload(){
  backgroundImg=loadImage("images/jungle.jpg");
  fruit1Img=loadImage("images/apple2.png");
  fruit2Img=loadImage("images/banana2.png");
  fruit3Img=loadImage("images/melon2.png");
  fruit4Img=loadImage("images/orange2.png");
  fruit5Img=loadImage("images/pineapple2.png");
  playerImg=loadImage("images/basket2.png");
}

function setup(){
   createCanvas(1000,400);
   //Intailze the database
   database= firebase.database();
}

function draw(){
    background(0);
}