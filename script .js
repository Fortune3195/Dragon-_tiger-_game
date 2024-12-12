const dragon = document.getElementById("dragon");
const tiger = document.getElementById("tiger");
const startButton = document.getElementById("start-game");
const result = document.getElementById("result");

startButton.addEventListener("click", () => {
  result.textContent = ""; // Clear previous result

  // Animate dragon and tiger
  dragon.style.transform = "translateX(-50px)";
  tiger.style.transform = "translateX(50px)";

  // Randomly decide the winner
  setTimeout(() => {
    dragon.style.transform = "translateX(0)";
    tiger.style.transform = "translateX(0)";
    const winner = Math.random() > 0.5 ? "Dragon" : "Tiger";
    result.textContent = `${winner} Wins!`;
  }, 2000);
});
