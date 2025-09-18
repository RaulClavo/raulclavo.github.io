const fadeSections = document.querySelectorAll('.fade-section');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => {
  section.classList.remove('visible');
  fadeObserver.observe(section);
});
