  // Get elements for toggle actions
  const burgerIcon = document.getElementById('burger-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');

  
  function toggleMenu() {
    mobileMenu.classList.toggle('-translate-x-full');
    mobileMenu.classList.toggle('translate-x-50');
    burgerIcon.classList.toggle('hidden');
  }

  burgerIcon.addEventListener('click', toggleMenu);

  
  closeMenu.addEventListener('click', toggleMenu);