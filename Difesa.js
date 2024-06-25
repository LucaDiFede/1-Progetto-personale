// <-- Carosello -->
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector('[data-slides]')
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})









// <-- Barra di Ricerca -->
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = [];

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible);
    })
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
   users = data.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent = user.name
    body.textContent = user.email
    userCardContainer.append(card)
    return { name: user.name, email: user.email, element: card }
    });
});

//Scrivi un programma che prenda l età di una persona e stampi sulla console se può guidare.
/*const foo = ['1', '2', '3'];
foo.push('5');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");*/
