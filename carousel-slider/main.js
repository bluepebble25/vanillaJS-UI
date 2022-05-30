window.onload = function() {
  // Elements
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');

  // Buttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  // Numbers
  let counter = 1;
  const IMAGE_SIZE = carouselImages[0].clientWidth;
  const TRANSITION_TIME = 0.4;

  // Functions
  function next() {
    carouselSlide.style.transition = `transform ${TRANSITION_TIME}s ease-in-out`;
    counter++;
    carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;

    if(counter == carouselImages.length - 1) {
      setTimeout(() => {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;
      }, 400);
    }
  }
  function prev() {
    carouselSlide.style.transition = `transform ${TRANSITION_TIME}s ease-in-out`;
    counter--;
    carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;

    if(counter == 0) {
      setTimeout(() => {
        carouselSlide.style.transition = 'none';
        counter = 5;
        carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;
      }, 400);
    }
  }

  // Main
  carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;  // '-' means go left
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  const isAuto = document.querySelector('.carousel-container').classList.contains('autoSlide');
  if(isAuto) {
    setInterval(next, 3000);
  }
}