const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const service = card.dataset.name;

        if(service.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});