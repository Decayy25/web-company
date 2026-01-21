// navbar
const toggle_menu = () => {
    document.getElementById('mobile-menu').classList.toggle('hidden')
}

// navbar observer
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("text-blue-500", "font-bold", "underline", "decoration-3", "underline-offset-4"));

      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add("text-blue-500", "font-bold", "underline", "decoration-2", "underline-offset-4");
      }
    }
  });
}, { threshold: 0.6 });


sections.forEach(section => observer.observe(section));