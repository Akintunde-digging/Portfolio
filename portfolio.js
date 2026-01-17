const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('fa-bars');
            hamburger.classList.add('fa-times');
        } else {
            hamburger.classList.remove('fa-times');
            hamburger.classList.add('fa-bars');
        }
    });

    const navLinks = document.querySelectorAll('.home-contact a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('fa-times');
            hamburger.classList.add('fa-bars');
        });
    });



    document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://formspree.io/f/xnjjjway", {
    method: "POST",
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert("Thanks for your message, Akintunde will get back to you shortly");
      this.reset();
    } else {
      alert("Something went wrong");
    }
  });
});
