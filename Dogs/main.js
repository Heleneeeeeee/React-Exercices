// Je lie mon élément html dans mon JS
const dogCards = document.querySelectorAll(".card")

// J'ajoute un Event Listener à chaque "DogCard" de mon tableau
dogCards.forEach((dogCard) => {
    dogCard.addEventListener('click', () => {
// Je lie chaque élément "button" à  sa "DogCard" pour qu'il s'affiche lorsque l'image auquel il appartient est cliquée
    const button = dogCard.querySelector(".button")

// Il s'affiche ensuite en "display block"
    button.style.display = "block";
    })
    
})