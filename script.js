const text = "Powering Your World With Excellence";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("animated-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}

window.onload = typeEffect;
