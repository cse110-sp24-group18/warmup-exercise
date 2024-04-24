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
