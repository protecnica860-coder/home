const revealItems = document.querySelectorAll(
  '.section-title, .benefits-grid article, .timeline-item, .content-card, .testimonial-grid article, .pricing-card, .faq, .cta'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  hero.style.backgroundPosition = `center ${offset * 0.2}px`;
});
