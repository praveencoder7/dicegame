var player1 = document.querySelectorAll("img")[0];
var randomValue1 = Math.floor(Math.random()*6)+1;
player1.setAttribute("src","./images/dice"+randomValue1+".png");

var player2 = document.querySelectorAll("img")[1];
randomValue2 = Math.floor(Math.random()*6)+1;
player2.setAttribute("src","./images/dice"+randomValue2+".png");

if(randomValue1 > randomValue2)
{
    document.querySelector("h1").innerHTML="🚩Play 1 wins!";
}
else if(randomValue1 < randomValue2)
{
    document.querySelector("h1").innerHTML="Play 2 wins!🚩"
}
else
{
    document.querySelector("h1").innerHTML="It's a Tier🤭";
}