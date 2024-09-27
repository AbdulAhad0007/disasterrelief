document.addEventListener("DOMContentLoaded", function() {
const counters = document.querySelectorAll('.count');
const speed = 200;
const startCounting = (counter) => {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const increment = Math.ceil(target / speed);

  const updateCount = () => {
    const currentValue = +counter.innerText;
    if (currentValue < target) {
      counter.innerText = currentValue + increment > target ? target : currentValue + increment;
      setTimeout(updateCount, 10);
    }
  };

  updateCount();
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); 
 
counters.forEach((counter) => {
  observer.observe(counter);
});

  });
  