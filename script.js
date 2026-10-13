const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", opened);
  menuBtn.textContent = opened ? "✕" : "☰";
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

// Simple entrance animation
const sections = document.querySelectorAll(".hero, .section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0.4, transform: "translateY(15px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 600, easing: "ease-out" }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
}

// Contact form demonstration
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }

  status.textContent =
    Thank you, ${name}! The form is working, but sending messages requires an email service.;

  event.target.reset();
});