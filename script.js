
document.addEventListener('DOMContentLoaded', (event) => {
    
    const myLink = document.getElementById('myLink');
   
    const targetText = document.getElementById('targetText');

    myLink.addEventListener('click', function(e) {
        e.preventDefault();
        targetText.textContent = 'The text has been changed!';
        this.textContent = 'Link clicked!';
    });
});

Object.assign(myParagraph.style, styles);

const uploadInput = document.getElementById('audioUpload');
const player = document.getElementById('audioPlayer');

uploadInput.addEventListener('change', function() {
    
    const file = this.files[0];

    if (file) {
        const fileURL = URL.createObjectURL(file);
        player.src = fileURL;

        player.onend = () => URL.revokeObjectURL(fileURL);
    }
});
