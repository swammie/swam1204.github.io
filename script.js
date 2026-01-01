(function(){
  const navbtn = document.getElementById("navbtn");
  const nav = document.getElementById("nav");

  if(navbtn && nav){
    navbtn.addEventListener("click", ()=>{
      const open = nav.classList.toggle("is-open");
      navbtn.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=>{
        nav.classList.remove("is-open");
        navbtn.setAttribute("aria-expanded","false");
      });
    });
  }

  const copyBtn = document.getElementById("copyEmail");
  const emailText = document.getElementById("emailText");
  if(copyBtn && emailText){
    copyBtn.addEventListener("click", async ()=>{
      try{
        await navigator.clipboard.writeText(emailText.textContent.trim());
        copyBtn.textContent = "Copied";
        setTimeout(()=>copyBtn.textContent="Copy email", 1000);
      }catch{
        copyBtn.textContent = "Copy failed";
        setTimeout(()=>copyBtn.textContent="Copy email", 1200);
      }
    });
  }

  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();
})();
