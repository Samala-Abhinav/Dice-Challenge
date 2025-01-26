
var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var src1="./images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",src1);


var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var src2="./images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",src2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 Wins 🚩";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
