
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const targetId = '#' + section.getAttribute('id');
      navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        }
      });
    }
  });
});

$('.nav-item').on("click",function(){
    $(".navbar-collapse").collapse('hide');
});

$('.nav .item.dropdown-submenu').unbind();
