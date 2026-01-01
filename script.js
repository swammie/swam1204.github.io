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

  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));

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
