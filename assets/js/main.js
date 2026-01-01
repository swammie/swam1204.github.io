// Set active nav link based on current path
(function(){
  const path = location.pathname.replace(/\/+$/, "");
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(!href) return;
    const normalized = new URL(href, location.href).pathname.replace(/\/+$/, "");
    if(normalized === path) a.classList.add("active");
  });

  // Contact form -> mailto (works on GitHub Pages without backend)
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const name = form.querySelector("[name=name]").value.trim();
      const email = form.querySelector("[name=email]").value.trim();
      const subject = form.querySelector("[name=subject]").value.trim();
      const message = form.querySelector("[name=message]").value.trim();

      const to = "swamhtetwintyee@gmail.com";
      const fullSubject = subject ? subject : "Portfolio message";
      const body =
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;

      const mailto = `mailto:${to}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
})();
