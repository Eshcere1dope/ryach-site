
const typingElement = document.getElementById("typing");
const nicknames = ["Micro Man", "Dope", "Lego Spider Ninja", "Eshkere Dope", "Мистер Жопа Кенг", "RYACH"];
let index = 0;
let textIndex = 0;
let isDeleting = false;

function type() {
  const current = nicknames[index];
  typingElement.innerHTML = isDeleting
    ? current.substring(0, textIndex) + "|"
    : current.substring(0, textIndex + 1) + "|";

  if (!isDeleting && textIndex < current.length) {
    textIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && textIndex > 0) {
    textIndex--;
    setTimeout(type, 100);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      isDeleting = false;
      index++;
      if (index >= nicknames.length) {
        typingElement.innerHTML = "RYACH";
        return;
      }
      setTimeout(type, 500);
    }
  }
}

type();
