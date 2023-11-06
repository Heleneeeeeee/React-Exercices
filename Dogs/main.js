const dogCards = document.querySelectorAll(".card")

dogCards.forEach((dogCard) => {
    dogCard.addEventListener('click', () => {
    
    const button = dogCard.querySelector(".button")
    button.style.display = "block";
    })
    
})