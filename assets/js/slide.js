document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  console.log('Number of slides:', slides.length);

  function showSlide(index) {
    console.log('Showing slide:', index);
    let current = slides[currentSlide];
    let next = slides[index];

    // Timeline for current slide to hide it
    let hideTl = gsap.timeline();
    hideTl.to(current, {opacity: 0, visibility: 'hidden', duration: 0.8, ease: "power2.inOut"})
      .to(current.querySelector('.hero-bg img'), {scale: 1.2, duration: 1.2, ease: "power2.inOut"}, "-=0.8")
      .to(current.querySelector('.slide-title'), {opacity: 0, y: -20, duration: 0.8, ease: "power2.inOut"}, "-=1")
      .to(current.querySelector('.slide-subtitle'), {opacity: 0, y: -20, duration: 0.8, ease: "power2.inOut"}, "-=0.9")
      .to(current.querySelector('.slide-btn'), {opacity: 0, y: -20, duration: 0.8, ease: "power2.inOut"}, "-=0.8");

    currentSlide = index;

    // Timeline for next slide to show it
    let showTl = gsap.timeline({delay: 0.5});
    showTl.to(next, {opacity: 1, visibility: 'visible', duration: 0.8, ease: "power2.inOut"})
      .fromTo(next.querySelector('.hero-bg img'), {scale: 1.2}, {scale: 1, duration: 1.2, ease: "power2.inOut"}, "-=0.8")
      .fromTo(next.querySelector('.slide-title'), {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1, ease: "power2.out"}, "-=1")
      .fromTo(next.querySelector('.slide-subtitle'), {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out"}, "-=0.9")
      .fromTo(next.querySelector('.slide-btn'), {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power2.out"}, "-=0.8");
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 8000); // Change slide every 8 seconds for a smoother experience
});
