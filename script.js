document.addEventListener("DOMContentLoaded", function() {
    // Insert the JavaScript code here
    // Function to animate the counting up
const counters = document.querySelectorAll('.count');
const speed = 200; // Speed of counting

// Function to start counting when the card is in view
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

// Intersection Observer to trigger the counting when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target); // Stop observing once the count is done
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Apply the observer to each counter
counters.forEach((counter) => {
  observer.observe(counter);
});

  });
  