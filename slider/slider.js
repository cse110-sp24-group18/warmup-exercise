/*
    addInputListener():

    This function adds an event listener to the 'emojiSlider' element. When the slider's value changes,
    it updates the emoji and feeling text based on the value and changes the background color accordingly.
*/
document.getElementById('emojiSlider').addEventListener('input', function() {

  // Retrieve the span elements for emoji and text display
  const emojiDisplay = document.getElementById('emojiDisplay');
  
  const feelingTxt = document.getElementById('feelingTxt');

  // Convert the value of the input (this.value) to an integer
  const value = parseInt(this.value);
  
  // Switch case to update the emoji and text content based on the slider's value
  switch (value) {
      case 1:
          emojiDisplay.textContent = '😭'; // Crying Emoji
          feelingTxt.textContent = 'Devastated';
          changeBackgroundColor('blue'); // Call function to change background color to blue
          break;
      case 2:
          emojiDisplay.textContent = '😢'; // Face with Sad Tear
          feelingTxt.textContent = 'Sad'; 
          changeBackgroundColor('white'); // Call function to change background color to white
          break;
      case 3:
          emojiDisplay.textContent = '🫤'; // Neutral Face
          feelingTxt.textContent = 'Indifferent'; 
          changeBackgroundColor('white'); // Call function to change background color to white
          break;
      case 4:
          emojiDisplay.textContent = '😁'; // Smiling Face with Teeth
          feelingTxt.textContent = 'Happy'; 
          changeBackgroundColor('white'); // Call function to change background color to white
          break;
      case 5:
          emojiDisplay.textContent = '🤣'; // Crying Laughing Face
          feelingTxt.textContent = 'Amazing'; 
          startDollarRain(); // Call function to start the dollar rain animation
          changeBackgroundColor('green'); // Change background color to green
          break;
      default:
        emojiDisplay.textContent = '🫤'; // Default to neutral face if no case matches or webpage is just opened
        changeBackgroundColor('white'); // Default background color to white if no case matches or webpage is just opened
  }
});

/*
    startDollarRain():

    This function triggers a 'rain' of dollar sign emojis within the 'body' element.
    Dollar signs start from the top and fall to the bottom, disappearing when animation ends.
    The function sets a continuous interval to generate dollar signs every 100 milliseconds
    and stops after 5 seconds.
*/
function startDollarRain() {

    // Retrieve the body element to append child elements to it
    const container = document.getElementById('body');
    
    // Retrieve the body element to append child elements to it
    function createDollar() {
        const dollar = document.createElement('span');
        dollar.innerHTML = '&#x1F4B5;'; // Dollar sign emoji
        dollar.classList.add('dollar'); // Add 'dollar' class for styling and animation
        dollar.style.left = (Math.random() * window.innerWidth) - 35 + 'px'; // Randomize the horizontal starting position of the dollar sign

        dollar.style.top = 0 + 'px';   // Set the top position to 0 (start from the top of the viewport)
        dollar.style.animationDuration = Math.random() * 2 + 1 + 's'; // Assign a random animation duration for each dollar sign
        container.appendChild(dollar);

        // Remove the dollar sign once it reaches the bottom
        dollar.addEventListener('animationend', function() {
            container.removeChild(this);
        });
    }

    // Create a dollar sign every 100 milliseconds
    const rainInterval = setInterval(createDollar, 100);

    // Stop the dollar rain after 10 seconds
    setTimeout(() => {
        clearInterval(rainInterval);
    }, 1000);
}

/*
    changeBackgroundColor(color):
    color - a string parameter that represents the color value to be set as the background.

    This function receives a color value as a string and sets it as the background color
    of the 'body' element. It reflects different moods with different background colors based upon
    users input of the slider.
*/
function changeBackgroundColor(color) {
  const container = document.getElementById('body'); // Retrieve the body element
  container.style.backgroundColor = color;   // Set the background color style to the specified color

}