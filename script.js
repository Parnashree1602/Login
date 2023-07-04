const box = document.querySelector(".box");
const l = document.querySelector(".loginlink");
const r = document.querySelector(".registerlink");
const b = document.querySelector(".bp");
const c = document.querySelector(".close");
const n = document.querySelector(".navigation");
const m = document.querySelector("#menuicon");
const h = document.querySelector("header");
r.addEventListener('click', () => {
  box.classList.add('active');
});
l.addEventListener('click', () => {
  box.classList.remove('active');
});
b.addEventListener('click', function () {
  box.classList.add('active-popup');
  n.classList.add('rem');
  h.classList.add('rem');
});
c.addEventListener('click', function () {
  box.classList.remove('active-popup');
});
m.addEventListener('click', function () {
  m.classList.toggle('bx');
  n.classList.toggle('act');
  h.classList.toggle('ac');
  n.classList.remove('rem');
  h.classList.remove('rem');
});
