//addStitchBtn.addEventListener('click', () => {
function createNewStitchBox() {
  // Create the individual stitch box
  const newStitchBox = document.createElement('div');
  newStitchBox.classList.add('individual-stitch-box');

  // Create the stitch label
  const stitchLabel = document.createElement('div');
  stitchLabel.classList.add('stitch-label');
  stitchLabel.textContent = 'New Stitch:';

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
  const container = document.querySelector('.container');
  container.appendChild(newStitchBox);

  // Return the new stitch box
  return newStitchBox;
}

// on load; Create the initial individual-stitch-box
const container = document.querySelector('.container');
// call the function and store the returned value
const newStitchBox = createNewStitchBox(); 
container.appendChild(newStitchBox);

//Stitch-boxes' Event Listeners
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

//Add-Stitch event listener
const addStitchBtn = document.getElementById('add-stitch-btn');
addStitchBtn.addEventListener('click', () => {
  // call the function and store the returned value
  const newStitchBox = createNewStitchBox();
  container.appendChild(newStitchBox);
});