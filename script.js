// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the link element by its ID
    const myLink = document.getElementById('myLink');
    // Select the paragraph element by its ID
    const targetText = document.getElementById('targetText');

    // Add a 'click' event listener to the link
    myLink.addEventListener('click', function(e) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        e.preventDefault();

        // Change the text content of the target element
        targetText.textContent = 'The text has been changed!';

        // Optional: Change the link's text as well
        this.textContent = 'Link clicked!';
    });
});

// 3. Apply the styles using Object.assign()
Object.assign(myParagraph.style, styles);

const uploadInput = document.getElementById('audioUpload');
const player = document.getElementById('audioPlayer');

uploadInput.addEventListener('change', function() {
    // Get the first file from the selected list
    const file = this.files[0];

    if (file) {
        // Create a temporary URL for the selected file
        const fileURL = URL.createObjectURL(file);

        // Set the audio player's source to this URL
        player.src = fileURL;

        // Optional: Clean up memory when the player is no longer needed
        player.onend = () => URL.revokeObjectURL(fileURL);
    }
});
