window.onload = function() {
  // Elements
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');

  // Buttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  // Variables
  let counter = 1;
  let intervalId;
  const IMAGE_SIZE = carouselImages[0].clientWidth;
  const TRANSITION_TIME = 400;
  const INTERVAL_TIME = 3000;

  // Functions
  function next() {
    carouselSlide.style.transition = `transform ${TRANSITION_TIME}ms ease-in-out`;
    counter++;
    carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;

    if(counter == carouselImages.length - 1) {
      setTimeout(() => {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;
      }, TRANSITION_TIME);
    }
  }
  function prev() {
    carouselSlide.style.transition = `transform ${TRANSITION_TIME}ms ease-in-out`;
    counter--;
    carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;

    if(counter == 0) {
      setTimeout(() => {
        carouselSlide.style.transition = 'none';
        counter = 5;
        carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;
      }, TRANSITION_TIME);
    }
  }
  function setAutoSlide() {
    intervalId = setInterval(next, INTERVAL_TIME);
    prevBtn.addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = setInterval(next, INTERVAL_TIME);
    });

    nextBtn.addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = setInterval(next, INTERVAL_TIME);
    });
  }

  // Main
  carouselSlide.style.transform = `translateX(${-IMAGE_SIZE * counter}px)`;  // '-' means go left
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Auto slide
  const isAuto = document.querySelector('.carousel-container').classList.contains('autoSlide');
  if(isAuto) {
    setAutoSlide();
  }
}