var randomNumber1=Math.floor(Math.random()*6)+1;

var randDice1="dice"+randomNumber1+".png";
var randSource1="images/"+randDice1;


document.querySelectorAll("img")[0].setAttribute("src",randSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randDice2="dice"+randomNumber2+".png";
var randSource2="images/"+randDice2;


document.querySelectorAll("img")[1].setAttribute("src",randSource2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player 1 Wins!";
}
else
{
    document.querySelector("h1").textContent="Player 2 Wins!";
}
