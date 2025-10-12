
    const slides = document.querySelectorAll("section.relative img");
    const slideText = document.getElementById("slide-text");

    const texts = [
      "Experience the perfect blend of nature and comfort in the heart of the jungle.",
      "Explore exciting adventures and wildlife nearby.",
      "Relax in our serene river-edge rooms with stunning views.",
      "Enjoy authentic local cuisine amidst tranquil surroundings."
    ];

    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      slideText.textContent = texts[index];
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    showSlide(current); // initial show
    setInterval(nextSlide, 3000); // change slide every 3 seconds

    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
