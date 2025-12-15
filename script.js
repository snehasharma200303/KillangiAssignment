// Tabs interaction
const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Color swatch interaction
document.querySelectorAll(".color-swatches .swatch").forEach(swatch => {
  swatch.addEventListener("click", function() {
    // Remove active class from siblings
    this.parentElement.querySelectorAll(".swatch").forEach(s => {
      s.style.transform = "scale(1)";
      s.style.boxShadow = "0 0 0 1px var(--color-border)";
    });
    // Add active state
    this.style.transform = "scale(1.1)";
    this.style.boxShadow = "0 0 0 2px var(--color-primary)";
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add to cart animation (placeholder)
document.querySelectorAll(".product").forEach(product => {
  product.addEventListener("click", function() {
    console.log("Product clicked - Add to cart functionality can be added here");
  });
});
