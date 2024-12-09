document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const section = document.querySelector(event.target.getAttribute('href'));
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  