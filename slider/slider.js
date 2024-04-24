document.getElementById('emojiSlider').addEventListener('input', function() {
  const emojiDisplay = document.getElementById('emojiDisplay');
  const value = parseInt(this.value);
  switch (value) {
      case 1:
          emojiDisplay.textContent = '😭'; // Crying Emoji
          break;
      case 2:
          emojiDisplay.textContent = '😢'; // Face with Tears of Joy
          break;
      case 3:
          emojiDisplay.textContent = '🫤'; // Smiling Face with Heart-Eyes
          break;
      case 4:
          emojiDisplay.textContent = '😁'; // Smiling Face with Sunglasses
          break;
      case 5:
          emojiDisplay.textContent = '🤣'; // Thinking Face
          break;
      default:
          emojiDisplay.textContent = '🫤';
  }
});

document.getElementById('emojiSlider').addEventListener('input', function() {
  const feelingTxt = document.getElementById('feelingTxt');
  const value = parseInt(this.value);
  const body = document.getElementById('body');
  switch (value) {
      case 1:
          feelingTxt.textContent = 'Devastated'; // Crying Emoji
          changeBackgroundColor('blue');
          break;
      case 2:
          feelingTxt.textContent = 'Sad'; // Face with Sad Tear
          changeBackgroundColor('white');
          break;
      case 3:
          feelingTxt.textContent = 'Indifferent'; // Neutral Face
          changeBackgroundColor('white');
          break;
      case 4:
          feelingTxt.textContent = 'Happy'; // Smiling Face with Teeth
          changeBackgroundColor('white');
          break;
      case 5:
          feelingTxt.textContent = 'Amazing'; // Crying Laughing Face
          startDollarRain();
          changeBackgroundColor('green');
          break;
      default:
          emojiDisplay.textContent = '🫤';
          changeBackgroundColor('white');
  }
});

function startDollarRain() {
    const container = document.getElementById('body');
    
    function createDollar() {
        const dollar = document.createElement('span');
        dollar.innerHTML = '&#x1F4B5;'; // Dollar sign emoji
        dollar.classList.add('dollar');
        dollar.style.left = (Math.random() * window.innerWidth) - 35 + 'px';
        dollar.style.top = 0 + 'px';
        dollar.style.animationDuration = Math.random() * 2 + 1 + 's'; // Random animation duration
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

function changeBackgroundColor(color) {
  const container = document.getElementById('body');
  container.style.backgroundColor = color;
}