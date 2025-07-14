const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPage = 0;

// Set stacking order
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// Update button states
function updateButtons() {
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length;
}

// Flip forward
function flipNext() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('flipped');
    currentPage++;
    updateButtons();
  }
}

// Flip backward
function flipPrev() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
    updateButtons();
  }
}

prevBtn.addEventListener('click', flipPrev);
nextBtn.addEventListener('click', flipNext);

// Initialize button state
updateButtons();
