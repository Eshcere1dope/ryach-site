
const nicknames = [
  "Micro Man",
  "Dope",
  "Lego Spider Ninja",
  "Eshkere Dope",
  "Мистер жопа кенг",
  "RYACH"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const display = document.getElementById("nickname");

  if (!isDeleting && j <= nicknames[i].length) {
    current = nicknames[i].substring(0, j++);
    display.innerHTML = current;
  } else if (isDeleting && j >= 0) {
    current = nicknames[i].substring(0, j--);
    display.innerHTML = current;
  }

  if (j === nicknames[i].length + 10) {
    isDeleting = true;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    if (i >= nicknames.length) i = nicknames.length - 1;
  }

  setTimeout(type, 100);
}

type();
