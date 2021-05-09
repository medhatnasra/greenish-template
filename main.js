const bar = document.querySelector(".fa-bars");
const col1 = document.querySelector(".col1");
const links = document.querySelectorAll(".nav-links li");

bar.addEventListener("click", poppup);

function poppup() {
  links.forEach((li) => {
    li.classList.toggle("open");
  });

  col1.classList.toggle("blur");
}

function scrollappear() {
  const card1 = document.querySelector(".card1");
  const cardpos = card1.getBoundingClientRect().top;
  const screenpos = window.innerHeight / 1.1;

  if (cardpos < screenpos) {
    card1.classList.add("card-appear");
  }
}
function scrollappear2() {
  const card2 = document.querySelector(".card2");
  const cardpos = card2.getBoundingClientRect().top;
  const screenpos = window.innerHeight / 1.1;

  if (cardpos < screenpos) {
    card2.classList.add("card-appear");
  }
}
function scrollappear3() {
  const card3 = document.querySelector(".card3");
  const cardpos = card3.getBoundingClientRect().top;
  const screenpos = window.innerHeight / 1.1;

  if (cardpos < screenpos) {
    card3.classList.add("card-appear");
  }
}

window.addEventListener("scroll", scrollappear);
window.addEventListener("scroll", scrollappear2);
window.addEventListener("scroll", scrollappear3);
