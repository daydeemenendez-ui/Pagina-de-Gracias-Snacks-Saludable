// Animate steps on load
document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.step');

  steps.forEach(function (step, i) {
    step.style.opacity = '0';
    step.style.transform = 'translateY(16px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    setTimeout(function () {
      step.style.opacity = '1';
      step.style.transform = 'translateY(0)';
    }, 400 + i * 150);
  });

  // Animate card on load
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  requestAnimationFrame(function () {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });
});
