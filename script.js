// DARK MODE
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// SMOOTH SCROLL
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// EMAILJS INIT
(function(){
  emailjs.init("1x3A7Nzbu_UOKX9vl");
})();

const form = document.getElementById("contact-form");
const btn = document.getElementById("submit-btn");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  btn.classList.add("loading");
  status.innerText = "";

  emailjs.sendForm("service_46eo82e", "template_0svzwnr", this)
    .then(() => {
      status.innerText = "✅ Message sent successfully!";
      status.className = "success";

      btn.classList.remove("loading");
      form.reset();
    })
    .catch(() => {
      status.innerText = "❌ Failed to send message.";
      status.className = "error";

      btn.classList.remove("loading");
    });
});
