// Background slideshow with images and video
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const mediaFiles = [
  "img/background/IMG_0542.MOV",
  "img/background/photo_1_2025-07-24_06-25-18.jpg",
  "img/background/photo_1_2025-07-24_06-25-45.jpg",
  "img/background/photo_2_2025-07-24_06-25-18.jpg",
  "img/background/photo_2_2025-07-24_06-25-45.jpg",
  "img/background/photo_3_2025-07-24_06-25-18.jpg",
  "img/background/photo_3_2025-07-24_06-25-45.jpg",
  "img/background/photo_4_2025-07-24_06-25-18.jpg",
  "img/background/photo_4_2025-07-24_06-25-45.jpg",
  "img/background/photo_5_2025-07-24_06-25-18.jpg",
  "img/background/photo_5_2025-07-24_06-25-45.jpg",
  "img/background/photo_6_2025-07-24_06-25-18.jpg",
  "img/background/photo_6_2025-07-24_06-25-45.jpg",
  "img/background/photo_7_2025-07-24_06-25-18.jpg",
  "img/background/photo_7_2025-07-24_06-25-45.jpg",
  "img/background/photo_8_2025-07-24_06-25-18.jpg",
  "img/background/photo_8_2025-07-24_06-25-45.jpg",
  "img/background/photo_9_2025-07-24_06-25-18.jpg",
  "img/background/photo_9_2025-07-24_06-25-45.jpg",
  "img/background/photo_10_2025-07-24_06-25-18.jpg",
  "img/background/photo_10_2025-07-24_06-25-45.jpg",
  "img/background/photo_11_2025-07-24_06-25-18.jpg",
  "img/background/photo_11_2025-07-24_06-25-45.jpg",
  "img/background/photo_12_2025-07-24_06-25-18.jpg",
  "img/background/photo_12_2025-07-24_06-25-45.jpg",
  "img/background/photo_13_2025-07-24_06-25-18.jpg",
  "img/background/photo_13_2025-07-24_06-25-45.jpg",
  "img/background/photo_14_2025-07-24_06-25-18.jpg",
  "img/background/photo_14_2025-07-24_06-25-45.jpg",
  "img/background/photo_15_2025-07-24_06-25-18.jpg",
  "img/background/photo_15_2025-07-24_06-25-45.jpg",
  "img/background/photo_16_2025-07-24_06-25-18.jpg",
  "img/background/photo_16_2025-07-24_06-25-45.jpg",
  "img/background/photo_17_2025-07-24_06-25-18.jpg",
  "img/background/photo_17_2025-07-24_06-25-45.jpg",
  "img/background/photo_18_2025-07-24_06-25-18.jpg",
  "img/background/photo_18_2025-07-24_06-25-45.jpg",
  "img/background/photo_19_2025-07-24_06-25-18.jpg",
  "img/background/photo_19_2025-07-24_06-25-45.jpg",
  "img/background/photo_20_2025-07-24_06-25-18.jpg",
  "img/background/photo_20_2025-07-24_06-25-45.jpg",
  "img/background/photo_21_2025-07-24_06-25-18.jpg",
  "img/background/photo_21_2025-07-24_06-25-45.jpg",
  "img/background/photo_22_2025-07-24_06-25-18.jpg",
  "img/background/photo_22_2025-07-24_06-25-45.jpg",
  "img/background/photo_23_2025-07-24_06-25-18.jpg",
  "img/background/photo_23_2025-07-24_06-25-45.jpg",
  "img/background/photo_24_2025-07-24_06-25-18.jpg",
  "img/background/photo_24_2025-07-24_06-25-45.jpg",
  "img/background/photo_25_2025-07-24_06-25-18.jpg",
  "img/background/photo_25_2025-07-24_06-25-45.jpg",
  "img/background/photo_26_2025-07-24_06-25-18.jpg",
  "img/background/photo_26_2025-07-24_06-25-45.jpg",
  "img/background/photo_27_2025-07-24_06-25-18.jpg",
  "img/background/photo_27_2025-07-24_06-25-45.jpg",
  "img/background/photo_28_2025-07-24_06-25-18.jpg",
  "img/background/photo_28_2025-07-24_06-25-45.jpg",
  "img/background/photo_29_2025-07-24_06-25-18.jpg",
  "img/background/photo_29_2025-07-24_06-25-45.jpg",
  "img/background/photo_30_2025-07-24_06-25-45.jpg",
  "img/background/photo_31_2025-07-24_06-25-45.jpg",
  "img/background/photo_32_2025-07-24_06-25-45.jpg",
  "img/background/photo_33_2025-07-24_06-25-45.jpg",
  "img/background/photo_34_2025-07-24_06-25-45.jpg",
  "img/background/photo_35_2025-07-24_06-25-45.jpg",
  "img/background/photo_36_2025-07-24_06-25-45.jpg",
  "img/background/photo_37_2025-07-24_06-25-45.jpg",
  "img/background/photo_38_2025-07-24_06-25-45.jpg",
  "img/background/photo_39_2025-07-24_06-25-45.jpg",
  "img/background/photo_40_2025-07-24_06-25-45.jpg"
];

let currentMedia = 0;
const slideshowDiv = document.querySelector('.background-slideshow');

function showMedia(index) {
  const file = mediaFiles[index];
  if (!slideshowDiv) return;
  if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp')) {
    slideshowDiv.innerHTML = '';
    slideshowDiv.style.backgroundImage = `url('${file}')`;
    slideshowDiv.style.backgroundSize = 'cover';
    slideshowDiv.style.backgroundPosition = 'center';
  } else if (file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.webm')) {
    slideshowDiv.style.backgroundImage = '';
    slideshowDiv.innerHTML = `<video src="${file}" autoplay loop muted playsinline style="width:100vw;height:100vh;object-fit:cover;position:absolute;top:0;left:0;"></video>`;
  }
}

function nextMedia() {
  currentMedia = (currentMedia + 1) % mediaFiles.length;
  showMedia(currentMedia);
}

function nextMedia() {
  currentMedia = (currentMedia + 1) % mediaFiles.length;
  showMedia(currentMedia);
}

// Shuffle media files for random order
shuffle(mediaFiles);
// Start slideshow
showMedia(currentMedia);
setInterval(nextMedia, 10000);

// Real-time counter: days, hours, minutes, seconds since 02/FEB/2025
function updateCounter() {
    const startDate = new Date('2025-02-02T00:00:00');
    const now = new Date();
    let diff = Math.max(0, now - startDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    document.getElementById('days-together').textContent =
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    setInterval(updateCounter, 1000);
});
// This script handles the functionality of a simple web application
