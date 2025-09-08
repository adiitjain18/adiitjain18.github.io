// small utilities: typing effect + year
const phrases = [
  "Software Developer",
  "Problem Solver",
  "Full-stack JavaScript",
  "Open Source Enthusiast"
];
const typedEl = document.getElementById('typed');
const cursorEl = document.querySelector('.cursor');
let i = 0, j = 0, forward = true;

function tick(){
  const word = phrases[i];
  if(forward){
    j++;
    typedEl.textContent = word.slice(0,j);
    if(j === word.length){ forward = false; setTimeout(tick, 900); return }
  } else {
    j--;
    typedEl.textContent = word.slice(0,j);
    if(j === 0){ forward = true; i = (i+1) % phrases.length }
  }
  setTimeout(tick, forward ? 80 : 45);
}
tick();
setInterval(()=>{ cursorEl.style.opacity = cursorEl.style.opacity === '0' ? '1' : '0' }, 500);

// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scrolling for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = a.getAttribute('href');
    if(target.length>1){
      e.preventDefault();
      document.querySelector(target).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
