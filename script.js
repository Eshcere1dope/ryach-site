const names = [
  "Micro Man",
  "Dope",
  "Lego Spider Ninja",
  "Eshkere Dope",
  "Мистер Жопа Кенг",
  "RYACH"
];

let i = 0;
let j = 0;
let currentName = "";
let isDeleting = false;
const typingEl = document.getElementById("typing");

function type() {
  if (i < names.length) {
    currentName = names[i];
    if (!isDeleting) {
      typingEl.textContent = currentName.substring(0, j++);
      if (j > currentName.length) {
        if (currentName !== "RYACH") {
          isDeleting = true;
          setTimeout(type, 800);
        } else {
          return;
        }
      } else {
        setTimeout(type, 100);
      }
    } else {
      typingEl.textContent = currentName.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i++;
        setTimeout(type, 400);
      } else {
        setTimeout(type, 60);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", type);