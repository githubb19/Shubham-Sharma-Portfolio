let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

  const typed = new Typed('.multiple-text', {
      strings: ['web developer','FullStack Developer'],
      typeSpeed: 80,
      backSpeed:80,
      backDelay:1200,
      loop:true,
  });

  const readBtn = document.getElementById("read-btn");
const moreText = document.getElementById("more-text");

readBtn.onclick = (e) => {
    e.preventDefault();

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readBtn.textContent = "Read More";
    }
};

const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        let card = this.previousElementSibling;     // p tag
        let moreText = card.querySelector(".more");

        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            this.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            this.textContent = "Read More";
        }
    });
});