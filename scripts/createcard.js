// Access form input elements
const titleInput = document.getElementById('title');
const subtitleInput = document.getElementById('subtitle');
const toInput = document.getElementById('to');
const fromInput = document.getElementById('from');
const messageInput = document.getElementById('message');

// Access preview area spans
const titleSpan = document.querySelector('.title-text');
const subtitleSpan = document.querySelector('.subtitle-text');
const toSpan = document.querySelector('.to-text');
const fromSpan = document.querySelector('.from-text');
const messageSpan = document.querySelector('.message-text');

// Get the Preview button
const previewBtn = document.getElementById('preview-btn');

previewBtn.addEventListener('click', () => {
  // Update the preview spans with the input values
  titleSpan.textContent = titleInput.value;
  subtitleSpan.textContent = subtitleInput.value;
  toSpan.textContent = toInput.value;
  fromSpan.textContent = fromInput.value;
  messageSpan.textContent = messageInput.value;
});

// Get the Save button
const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  // Load existing cards from localStorage or initialize a new array
  let cards = [];

  if (localStorage.getItem('cards')) {
    cards = JSON.parse(localStorage.getItem('cards'));
  }

  // Create a new card object with the form data
  const newCard = {
    title: titleInput.value,
    subtitle: subtitleInput.value,
    to: toInput.value,
    from: fromInput.value,
    message: messageInput.value,
  };

  // Add the new card to the array
  cards.push(newCard);

  // Save the updated array back to localStorage
  localStorage.setItem('cards', JSON.stringify(cards));
});
