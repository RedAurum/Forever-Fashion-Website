/*

["Forever Fashion Project" for Edinburgh College, 2023]

- Project:              Forever Fashion
- Members of the team:  Laura Balestrieri, Amanda Gonzalez-Santana, Morgan Waugh
- About.html JS

*/

// JS for Clicking on the cards about.html page

// Get all flip cards
const flip_cards = document.querySelectorAll('.flip-card')

// Add a click event listener to each flip card
flip_cards.forEach(flipCard => {
  flipCard.addEventListener('click', () => {
    // Toggle the 'flipped' class on the flip card inner element to trigger the flip animation
    flipCard.querySelector('.flip-card-inner').classList.toggle('flipped')
  })
})
