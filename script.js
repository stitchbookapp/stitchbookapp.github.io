// Create the initial individual-stitch-box
const container = document.querySelector('.container');
const newStitchBox = document.createElement('div');
newStitchBox.classList.add('individual-stitch-box');
newStitchBox.innerHTML = `
  <div class="stitch-label">New Stitch:</div>
  <div class="stitch-count">
    <button class="decrement-btn">-</button>
    <span class="number">0</span>
    <button class="increment-btn">+</button>
  </div>
`;
container.appendChild(newStitchBox);

//Event Listener
container.addEventListener('click', (event) => {
  if (event.target.matches('.increment-btn')) {
    const numberEl = event.target.parentNode.querySelector('.number');
    let number = Number(numberEl.textContent);
    number++;
    numberEl.textContent = number;
  } else if (event.target.matches('.decrement-btn')) {
    const numberEl = event.target.parentNode.querySelector('.number');
    let number = Number(numberEl.textContent);
    if (number > 0) {
      number--;
      numberEl.textContent = number;
    }
  } else if (event.target.matches('.stitch-label')) {
    const labelText = prompt('Enter the stitch name:');
    if (labelText) {
      event.target.textContent = labelText;
    }
  }
});

// Get all the add stitch button and add an event listener to it
const addStitchBtn = document.getElementById('add-stitch-btn');

addStitchBtn.addEventListener('click', () => {
  const newStitchBox = document.createElement('div');
  newStitchBox.classList.add('individual-stitch-box');

  // Create the stitch label
  const stitchLabel = document.createElement('div');
  stitchLabel.classList.add('stitch-label');
  stitchLabel.textContent = 'New Stitch';

  // Add the stitch label to the new stitch box
  newStitchBox.appendChild(stitchLabel);

  // Create the stitch count container
  const stitchCount = document.createElement('div');
  stitchCount.classList.add('stitch-count');

  // Add the decrement button
  const decrementBtn = document.createElement('button');
  decrementBtn.classList.add('decrement-btn');
  decrementBtn.textContent = '-';

  // Add the stitch count number
  const stitchCountNumber = document.createElement('span');
  stitchCountNumber.classList.add('number');
  stitchCountNumber.textContent = '0';

  // Add the increment button
  const incrementBtn = document.createElement('button');
  incrementBtn.classList.add('increment-btn');
  incrementBtn.textContent = '+';

  // Add the stitch count elements to the container
  stitchCount.appendChild(decrementBtn);
  stitchCount.appendChild(stitchCountNumber);
  stitchCount.appendChild(incrementBtn);

  // Add the stitch count to the new stitch box
  newStitchBox.appendChild(stitchCount);

  // Add the new stitch box to the container
  container.appendChild(newStitchBox);
});