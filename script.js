document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      });
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const service = String(data.get("service") || "").trim();
      const details = String(data.get("details") || "").trim();
      const subject = encodeURIComponent("Project Enquiry - ShreeVisuals");
      const body = encodeURIComponent(
        `Hi ShreeVisuals,\n\nI'd like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nProject details:\n${details}\n\nSent through the ShreeVisuals website.`
      );
      const status = document.getElementById("form-status");
      status.textContent = "Opening your email app. Please review the message and press Send to submit your enquiry.";
      window.location.href = `mailto:shreevisualz@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});