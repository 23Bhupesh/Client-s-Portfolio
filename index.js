
// Select the navbar links that you want to add the scrolling effect to
const navbarLinks = document.querySelectorAll('.navbar a');

// Add click event listeners to the navbar links
navbarLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent the default behavior of the link
    e.preventDefault();

    // Get the target element that the link should scroll to
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Scroll to the target element with a smooth animation
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

$('.nav-item').on("click",function(){
    $(".navbar-collapse").collapse('hide');
});

$('.nav .item.dropdown-submenu').unbind();
