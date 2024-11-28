    const playersData =
        [
        {
            Name: "Lionel Messi",
            photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
           position: "RW",
            nationality: "Argentina",
            flag: "https://cdn.sofifa.net/flags/ar.png",
            club: "Inter Miami",
            logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
            rating: 93,
            pace: 85,
            shooting: 92,
            passing: 91,
            dribbling: 95,
            defending: 35,
            physical: 65
        },
        {
            Name: "Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
           position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77
        },
        {
            Name: "Kevin De Bruyne",
            photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
           position: "CM",
            nationality: "Belgium",
            flag: "https://cdn.sofifa.net/flags/be.png",
            club: "Manchester City",
            logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
            rating: 91,
            pace: 74,
            shooting: 86,
            passing: 93,
            dribbling: 88,
            defending: 64,
            physical: 78
        },
        {
            Name: "Kylian Mbappé",
            photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
           position: "ST",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "Real Madrid",
            logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
            rating: 92,
            pace: 97,
            shooting: 89,
            passing: 80,
            dribbling: 92,
            defending: 39,
            physical: 77
        },
        {
            Name: "Virgil van Dijk",
            photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
           position: "CB",
            nationality: "Netherlands",
            flag: "https://cdn.sofifa.net/flags/nl.png",
            club: "Liverpool",
            logo: "https://cdn.sofifa.net/meta/team/8/120.png",
            rating: 90,
            pace: 75,
            shooting: 60,
            passing: 70,
            dribbling: 72,
            defending: 92,
            physical: 86
        },
        {
            Name: "Antonio Rudiger",
            photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
           position: "CB",
            nationality: "Germany",
            flag: "https://cdn.sofifa.net/flags/de.png",
            club: "Real Madrid",
            logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
            rating: 88,
            pace: 82,
            shooting: 55,
            passing: 73,
            dribbling: 70,
            defending: 86,
            physical: 86
        },
        {
            Name: "Neymar Jr",
            photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
           position: "LW",
            nationality: "Brazil",
            flag: "https://cdn.sofifa.net/flags/br.png",
            club: "Al-Hilal",
            logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
            rating: 90,
            pace: 91,
            shooting: 83,
            passing: 86,
            dribbling: 94,
            defending: 37,
            physical: 61
        },
        {
            Name: "Mohamed Salah",
            photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
           position: "RW",
            nationality: "Egypt",
            flag: "https://cdn.sofifa.net/flags/eg.png",
            club: "Liverpool",
            logo: "https://cdn.sofifa.net/meta/team/8/120.png",
            rating: 89,
            pace: 93,
            shooting: 87,
            passing: 81,
            dribbling: 90,
            defending: 45,
            physical: 75
        },
        {
            Name: "Joshua Kimmich",
            photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
           position: "CM",
            nationality: "Germany",
            flag: "https://cdn.sofifa.net/flags/de.png",
            club: "Bayern Munich",
            logo: "https://cdn.sofifa.net/meta/team/503/120.png",
            rating: 89,
            pace: 70,
            shooting: 75,
            passing: 88,
            dribbling: 84,
            defending: 84,
            physical: 81
        },
        {
            Name: "Jan Oblak",
            photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
           position: "GK",
            nationality: "Slovenia",
            flag: "https://cdn.sofifa.net/flags/si.png",
            club: "Atletico Madrid",
            logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
            rating: 91,
            "diving": 89,
            "handling": 90,
            "kicking": 78,
            "reflexes": 92,
            "speed": 50,
            "positioning": 88
        },
        {
            Name: "Luka Modrić",
            photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
           position: "CM",
            nationality: "Croatia",
            flag: "https://cdn.sofifa.net/flags/hr.png",
            club: "Real Madrid",
            logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
            rating: 88,
            pace: 74,
            shooting: 78,
            passing: 89,
            dribbling: 90,
            defending: 72,
            physical: 65
        },
        {
            Name: "Vinicius Junior",
            photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
           position: "LW",
            nationality: "Brazil",
            flag: "https://cdn.sofifa.net/flags/br.png",
            club: "Real Madrid",
            logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
            rating: 89,
            pace: 91,
            shooting: 88,
            passing: 85,
            dribbling: 94,
            defending: 39,
            physical: 61
        },
        {
            Name: "Brahim Diáz",
            photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
           position: "LW",
            nationality: "Morocco",
            flag: "https://cdn.sofifa.net/flags/ma.png",
            club: "Real Madrid",
            logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
            rating: 82,
            pace: 85,
            shooting: 74,
            passing: 78,
            dribbling: 85,
            defending: 31,
            physical: 56
        },
        {
            Name: "Karim Benzema",
            photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
           position: "ST",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "Al-Ittihad",
            logo :"https://cdn.sofifa.net/meta/team/476/120.png",
            rating: 90,
            pace: 77,
            shooting: 90,
            passing: 83,
            dribbling: 88,
            defending: 40,
            physical: 78
        },
        {
            Name: "Erling Haaland",
            photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
           position: "ST",
            nationality: "Norway",
            flag: "https://cdn.sofifa.net/flags/no.png",
            club: "Manchester City",
            logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
            rating: 91,
            pace: 89,
            shooting: 94,
            passing: 65,
            dribbling: 80,
            defending: 45,
            physical: 88
        },
        {
            Name: "N'Golo Kanté",
            photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
           position: "CDM",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "Al-Ittihad",
            logo: "https://cdn.sofifa.net/meta/team/476/120.png",
            rating: 87,
            pace: 77,
            shooting: 66,
            passing: 75,
            dribbling: 82,
            defending: 88,
            physical: 82
        },
        {
            Name: "Alphonso Davies",
            photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
           position: "LB",
            nationality: "Canada",
            flag: "https://cdn.sofifa.net/flags/ca.png",
            club: "Bayern Munich",
            logo: "https://cdn.sofifa.net/meta/team/503/120.png",
            rating: 84,
            pace: 96,
            shooting: 68,
            passing: 77,
            dribbling: 82,
            defending: 76,
            physical: 77
        },
        {
            Name: "Yassine Bounou",
            photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
           position: "GK",
            nationality: "Morocco",
            flag: "https://cdn.sofifa.net/flags/ma.png",
            club: "Al-Hilal",
            logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
            rating: 84,
            "diving": 81,
            "handling": 82,
            "kicking": 77,
            "reflexes": 86,
            "speed": 38,
            "positioning": 83
        },
        {
            Name: "Bruno Fernandes",
            photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
           position: "CM",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Manchester United",
            logo: "https://cdn.sofifa.net/meta/team/14/120.png",
            rating: 88,
            pace: 75,
            shooting: 85,
            passing: 89,
            dribbling: 84,
            defending: 69,
            physical: 77
        },
        {
            Name: "Jadon Sancho",
            photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
           position: "LW",
            nationality: "England",
            flag: "https://cdn.sofifa.net/flags/gb-eng.png",
            club: "Manchester United",
            logo: "https://cdn.sofifa.net/meta/team/14/120.png",
            rating: 84,
            pace: 85,
            shooting: 74,
            passing: 78,
            dribbling: 88,
            defending: 34,
            physical: 63
        },
        {
            Name: "A.Arnold",
            photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
           position: "RB",
            nationality: "England",
            flag: "https://cdn.sofifa.net/flags/gb-eng.png",
            club: "Liverpool",
            rating: 87,
            pace: 76,
            shooting: 66,
            passing: 89,
            dribbling: 80,
            defending: 79,
            physical: 71
        },
        {
            Name: "Achraf Hakimi",
            photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
           position: "RB",
            nationality: "Morocco",
            flag: "https://cdn.sofifa.net/flags/ma.png",
            club: "Paris Saint-Germain",
            logo: "https://cdn.sofifa.net/meta/team/591/120.png",
            rating: 84,
            pace: 91,
            shooting: 76,
            passing: 80,
            dribbling: 80,
            defending: 75,
            physical: 78
        },
        {
            Name: "En-Nesyri",
            photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
           position: "ST",
            nationality: "Morocco",
            flag: "https://cdn.sofifa.net/flags/ma.png",
            club: "Fenerbahçe",
            logo: "https://cdn.sofifa.net/meta/team/88/120.png",
            rating: 83,
            pace: 82,
            shooting: 82,
            passing: 63,
            dribbling: 77,
            defending: 36,
            physical: 80
        },
        {
            Name: "Mazraoui",
            photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
           position: "LB",
            nationality: "Morocco",
            flag: "https://cdn.sofifa.net/flags/ma.png",
            club: "Manchester United",
            logo: "https://cdn.sofifa.net/meta/team/14/120.png",
            rating: 81,
            pace: 78,
            shooting: 66,
            passing: 77,
            dribbling: 83,
            defending: 77,
            physical: 71
        },
        {
            Name: "Ismael Saibari",
            photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
           position: "CM",
            nationality: "Morocco",
            flag: "https://cdn.sofifa.net/flags/ma.png",
            club: "PSV",
            logo: "https://cdn.sofifa.net/meta/team/682/120.png",
            rating: 83,
            pace: 89,
            shooting: 78,
            passing: 80,
            dribbling: 86,
            defending: 55,
            physical: 84
        },
        {
            Name: "Donnarumma",
            photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
           position: "GK",
            nationality: "Italy",
            flag: "https://cdn.sofifa.net/flags/it.png",
            club: "Paris Saint-Germain",
            logo: "https://cdn.sofifa.net/meta/team/591/120.png",
            rating: 89,
            "diving": 88,
            "handling": 84,
            "kicking": 75,
            "reflexes": 90,
            "speed": 50,
            "positioning": 85
        }
        ]
    
    
    
    
    
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
            resetForm()
            event.preventDefault(); 
            formValidation();
            
            
            const playerData = {
                fullName: document.getElementById("fullName").value,
                position: document.getElementById("position").value,
                club: document.getElementById(club).value,
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
    

    function resetForm() {

        document.getElementById("fullName").value = "";
        document.getElementById("position").value = "";
        document.getElementById("club").value = "";
        document.getElementById("country").value = "";  
        document.getElementById("pac").value = "";
        document.getElementById("sho").value = "";
        document.getElementById("pas").value = "";
        document.getElementById("dri").value = "";
        document.getElementById("def").value = "";
        document.getElementById("phy").value = "";
    }


    function renderPlayers(post){
        // Use filter to get the players with the specified position
        const arr = playersData.filter(player => player.position === post);
      
        const playersContainer = document.querySelector(".modal-content > .flex.gap-2.flex-wrap");
        
        // Clear existing players
        playersContainer.innerHTML = "";
      
        // Loop through the filtered players and add them to the DOM
        arr.forEach(player => {
            const playerCard = `
                <div class="flex gap-2">
                    <div class="relative w-[110px] hover:scale-110 duration-300 cursor-pointer">
                        <img class="w-full" src="./img/Player-card.png" alt="player card">
                        <p class="absolute bottom-2 left-1/2 -translate-x-[30px] -translate-y-[94px] text-gray-300 font-bold text-xs">${player.rating}</p>
                        <p class="absolute bottom-2 left-1/2 -translate-x-[28px] -translate-y-[81px] text-gray-300 font-light text-[8px]">${player.position}</p>
                        <img class="w-[11px] absolute bottom-2 left-1/2 -translate-x-[29px] -translate-y-[66px]" src="${player.logo}" alt="${player.club} logo">
                        <img class="w-[11px] absolute bottom-2 left-1/2 -translate-x-[29px] -translate-y-[55px]" src="${player.flag}" alt="${player.nationality} flag">
                        <img class="w-[58px] absolute bottom-2 left-1/2 -translate-x-[19px] -translate-y-[57px]" src="${player.photo}" alt="${player.Name} photo">
                        <p class="absolute bottom-2 left-1/2 -translate-x-[13px] -translate-y-[46px] text-gray-300 font-normal text-[7px]">${player.Name}</p>
                        <p class="absolute bottom-2 left-1/2 -translate-x-[31px] -translate-y-[32px] text-gray-400 font-light text-[8px]">${player.pace}</p>
                        <p class="absolute bottom-2 left-1/2 -translate-x-[31px] -translate-y-[22px] text-gray-400 font-light text-[8px]">${player.shooting}</p>
                        <p class="absolute bottom-2 left-1/2 -translate-x-[31px] -translate-y-[12px] text-gray-400 font-light text-[8px]">${player.passing}</p>
                        <p class="absolute bottom-2 left-1/2 translate-x-[7px] -translate-y-[32px] text-gray-400 font-light text-[8px]">${player.dribbling}</p>
                        <p class="absolute bottom-2 left-1/2 translate-x-[7px] -translate-y-[22px] text-gray-400 font-light text-[8px]">${player.defending}</p>
                        <p class="absolute bottom-2 left-1/2 translate-x-[7px] -translate-y-[12px] text-gray-400 font-light text-[8px]">${player.physical}</p>
                    </div>
                </div>
            `;
            playersContainer.innerHTML += playerCard;
        });
    };
    
    
  
    renderPlayers(playersData);






    



    