document.addEventListener("DOMContentLoaded", function () {
  // Initialize Hover Cards
  const components = document.querySelectorAll(".hover-cards.component");

  if (!components.length) return;

  components.forEach((component) => {
    initAccordion(component);
  });

  initDesktopHover();
});

/**
 * Initialize accordion functionality for mobile view
 */
function initAccordion(element) {
  const headers = element.querySelectorAll(".accordion-header");
  const items = element.querySelectorAll(".accordion-item");
  const accordions = element.querySelectorAll(".accordion");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      // Remove active classes from all items
      items.forEach((item) => item.classList.remove("open"));
      accordions.forEach((accordion) => accordion.classList.remove("expand"));

      // Add active class to clicked item
      const parentAccordion = this.closest(".accordion");
      const item = parentAccordion.querySelector(".accordion-item");

      item.classList.add("open");
      parentAccordion.classList.add("expand");
    });
  });

  // Activate the first accordion by default
  if (headers.length > 0) {
    const firstAccordion = headers[0].closest(".accordion");
    const firstItem = firstAccordion.querySelector(".accordion-item");

    firstItem.classList.add("open");
    firstAccordion.classList.add("expand");
  }
}

/**
 * Initialize hover functionality for desktop view
 */
function initDesktopHover() {
  const cards = document.querySelectorAll(".on-desktop-block .hover-card");

  if (!cards.length) return;

  // Set first card as active by default
  cards[0].classList.add("active");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Remove active class from all cards
      cards.forEach((c) => c.classList.remove("active"));

      // Add active class to hovered card
      this.classList.add("active");
    });
  });
}
