// // small utilities: typing effect + year
// const phrases = [
//   "Software Developer",
//   "Problem Solver",
//   "Full-stack JavaScript",
//   "Open Source Enthusiast"
// ];
// const typedEl = document.getElementById('typed');
// const cursorEl = document.querySelector('.cursor');
// let i = 0, j = 0, forward = true;

// function tick(){
//   const word = phrases[i];
//   if(forward){
//     j++;
//     typedEl.textContent = word.slice(0,j);
//     if(j === word.length){ forward = false; setTimeout(tick, 900); return }
//   } else {
//     j--;
//     typedEl.textContent = word.slice(0,j);
//     if(j === 0){ forward = true; i = (i+1) % phrases.length }
//   }
//   setTimeout(tick, forward ? 80 : 45);
// }
// tick();
// setInterval(()=>{ cursorEl.style.opacity = cursorEl.style.opacity === '0' ? '1' : '0' }, 500);

// // set current year
// document.getElementById('year').textContent = new Date().getFullYear();

// // smooth scrolling for same-page links
// document.querySelectorAll('a[href^="#"]').forEach(a=>{
//   a.addEventListener('click', e=>{
//     const target = a.getAttribute('href');
//     if(target.length>1){
//       e.preventDefault();
//       document.querySelector(target).scrollIntoView({behavior:'smooth', block:'start'});
//     }
//   });
// });


// Typewriter effect for tagline
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi there, I’m Arjun – a curious technologist with a multi-domain mindset."; // ✨ Your tagline
  let i = 0;
  const speed = 100; // typing speed in ms

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("tagline").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
// Scroll Reveal - Added 2025-09-08
function revealSections() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealSections);
revealSections(); // run on page load
// Dark/Light Mode Toggle - Added 2025-09-08
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
  
  // Change icon
  if (document.body.classList.contains("light-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});
// Contact Form Validation - Added 2025-09-08
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault(); // prevent form submission
    alert("Please fill in all fields before submitting.");
  }
});
