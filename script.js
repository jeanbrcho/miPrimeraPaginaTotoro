function showAlert() {
    alert("¡Hola, esta es una alerta desde JavaScript!");
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").classList.toggle("nav-links-responsive")});

function mostrarOcultarAudio() {
  let audio = document.getElementById("audio");
  if (audio.style.visibility == "hidden") {
    audio.style.visibility = "visible";
  } else {
    audio.style.visibility = "hidden";
  }
}

// Carrusel
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentIndex = 0;
let startX;
let isDragging = false;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  updateSlider();
});

slider.addEventListener('mousedown', (e) => {
  if (e.button === 2) return; // Ignore right-click
  isDragging = true;
  startX = e.clientX;
});

slider.addEventListener('mousemove', (e) => {
  if (isDragging) {
    e.preventDefault();
    const currentX = e.clientX;
    const diffX = currentX - startX;
    const moveRatio = diffX / slider.offsetWidth;
    const moveThreshold = 0.1;

    if (Math.abs(moveRatio) >= moveThreshold) {
      if (moveRatio < 0) {
        currentIndex = (currentIndex + 1) % slider.children.length;
      } else {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
      }
      updateSlider();
      isDragging = false;
    }
  }
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

// Eventos para pantallas táctiles
slider.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  startX = touch.clientX;
});

slider.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const currentX = touch.clientX;
  const diffX = currentX - startX;
  const moveRatio = diffX / slider.offsetWidth;
  const moveThreshold = 0.1;

  if (Math.abs(moveRatio) >= moveThreshold) {
    if (moveRatio < 0) {
      currentIndex = (currentIndex + 1) % slider.children.length;
    } else {
      currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    }
    updateSlider();
  }
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}