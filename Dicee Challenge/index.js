function random() {
  return Math.floor(Math.random() * 6 + 1);
}
var rand1 = random();
var rand2 = random();
document.querySelector(".img1").setAttribute("src", "images/dice" + rand1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + rand2 + ".png");

var output = result(rand1, rand2);

function result(x, y) {
  if (x > y) {
    output = "🚩 Player 1 wins.";
  } else if (x < y) {
    output = "Player 2 wins. 🚩";
  } else {
    output = "Draw!";
  }

  document.querySelector("h1").innerHTML = output;

}
