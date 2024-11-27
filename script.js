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





// pop up-------------

  document.addEventListener("DOMContentLoaded", function () {

    const addButtons = document.querySelectorAll("#addPlayer");
    const playerModal = document.getElementById("playerModal");
    const closeModalButton = document.getElementById("closeModal");
    const playerForm = document.getElementById("playerForm");

    
    function openModal(event) {
        event.preventDefault(); 
        playerModal.classList.remove("hidden");
    }

 
    function closeModal() {
        playerModal.classList.add("hidden");
    }


    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener("click", openModal);
    }

   
 
    closeModalButton.addEventListener("click", closeModal);

    
    playerForm.addEventListener("submit", function (event) {

        
        event.preventDefault(); 
        
        
        const playerData = {
            fullName: document.getElementById("fullName").value,
            position: document.getElementById("position").value,
            club: document.getElementById("club").value,
            country: document.getElementById("country").value,
            stats: {
                pac: document.getElementById("pac").value,
                sho: document.getElementById("sho").value,
                pas: document.getElementById("pas").value,
                dri: document.getElementById("dri").value,
                def: document.getElementById("def").value,
                phy: document.getElementById("phy").value,
            }
        };

        closeModal();
    });
});
  


  