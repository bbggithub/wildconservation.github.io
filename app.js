// Function to fetch pets from the backend and display them
async function fetchPets() {
    const response = await fetch('/api/pets');
    const data = await response.json();
    const petsContainer = document.getElementById('pets-container');
    petsContainer.innerHTML = '';
  
    data.pets.forEach((pet) => {
      const petElement = document.createElement('div');
      petElement.classList.add('pet');
      petElement.textContent = `${pet.name} - ${pet.species}`;
      petsContainer.appendChild(petElement);
    });
  }
  // Function to submit details
async function createPet(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name-input');
    const numberInput = document.getElementById('number-input');
    const pet = {
      name: nameInput.value,
      number: numberInput.value
    };
  
    await fetch('/api/pets'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'}
    } }