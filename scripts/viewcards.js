// scripts/viewcards.js

// Load the array of cards from localStorage
const cardsData = localStorage.getItem('cards');
let cards = [];

if (cardsData) {
  // Parse the JSON string into an array
  cards = JSON.parse(cardsData);
} else {
  // If no cards are saved, initialize an empty array
  cards = [];
}

// Select the template and the container
const template = document.getElementById('card-template');
const cardList = document.getElementById('card-list');

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  // Clone the template content
  const cardView = template.content.cloneNode(true);

  // Populate the card with data
  const titleSpan = cardView.querySelector('.title-text');
  const subtitleSpan = cardView.querySelector('.subtitle-text');
  const toSpan = cardView.querySelector('.to-text');
  const fromSpan = cardView.querySelector('.from-text');
  const messageSpan = cardView.querySelector('.message-text');

  titleSpan.textContent = card.title;
  subtitleSpan.textContent = card.subtitle;
  toSpan.textContent = card.to;
  fromSpan.textContent = card.from;
  messageSpan.textContent = card.message;

  // Add delete functionality
  const deleteBtn = cardView.querySelector('.delete-btn');

  deleteBtn.addEventListener('click', () => {
    // Remove the card from the array
    cards.splice(i, 1);

    // Save the updated array back to localStorage
    localStorage.setItem('cards', JSON.stringify(cards));

    // Reload the page to update the displayed cards
    location.reload();
  });

  // Append the card to the list
  cardList.appendChild(cardView);
}
