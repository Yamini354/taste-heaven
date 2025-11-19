document.addEventListener("DOMContentLoaded", () => {

  // ===== Menu Filter =====
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;

      menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ===== Booking Form Handler =====
  const bookingForm = document.getElementById("bookingForm");
  bookingForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your table has been booked successfully!");
    e.target.reset();
  });

  // ===== Contact Form Handler =====
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Taste Haven! We’ll get back to you soon.");
    e.target.reset();
  });

});
