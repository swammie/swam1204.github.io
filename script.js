(function () {
  const navbtn = document.getElementById("navbtn");
  const nav = document.getElementById("nav");

  if (navbtn && nav) {
    navbtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navbtn.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a.nav__link").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navbtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const themeSelect = document.getElementById("themeSelect");
  const savedTheme = localStorage.getItem("theme") || "lilac";
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (themeSelect) themeSelect.value = savedTheme;

  if (themeSelect) {
    themeSelect.addEventListener("change", () => {
      const val = themeSelect.value;
      document.documentElement.setAttribute("data-theme", val);
      localStorage.setItem("theme", val);
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-in");
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));

  // Scrollspy
  const sections = ["education", "skills", "projects", "experience", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const navLinks = Array.from(document.querySelectorAll(".nav__link"));

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
  );

  sections.forEach((sec) => spy.observe(sec));

  // Copy email
  const copyBtn = document.getElementById("copyEmail");
  const emailText = document.getElementById("emailText");
  if (copyBtn && emailText) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailText.textContent.trim());
        copyBtn.textContent = "Copied";
        setTimeout(() => (copyBtn.textContent = "Copy email"), 1000);
      } catch {
        copyBtn.textContent = "Copy failed";
        setTimeout(() => (copyBtn.textContent = "Copy email"), 1200);
      }
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
