const greeting = document.getElementById("greeting");
greeting.style.fontSize = "4rem";
greeting.style.color = "coral";

const secondHeader = document.querySelector("h3");
secondHeader.style.color = "lightcoral";

greeting.addEventListener('click', function() {
  greeting.style.color = "darkred";
});