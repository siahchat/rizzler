document.querySelectorAll('.carousel').forEach(carousel => {
  const items = carousel.querySelector('.carousel-items');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');

  let scrollAmount = 0;

  nextBtn.addEventListener('click', () => {
    scrollAmount += 300;
    items.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener('click', () => {
    scrollAmount -= 300;
    if (scrollAmount < 0) scrollAmount = 0;
    items.style.transform = `translateX(-${scrollAmount}px)`;
  });
});