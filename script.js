// Typing effect for Hero title
const text = "📄 ISHANOV Paper – Sifatli Svetocopy qog‘ozlari";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();
