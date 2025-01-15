let count = 3;
const countElmnt = document.getElementById('countoun');
const wishElmnt = document.getElementById('wishMsg');
const countAlertElmnt = document.getElementById('countAlert');
const popperContainer = document.getElementById('partyPopper');
let countTimer;

function createPartyPopper() {
    const colors = [
        'linear-gradient(45deg, #ff416c, #ff4b2b)',
        'linear-gradient(45deg, #4caf50, #2196f3)',
        'linear-gradient(45deg, #ffeb3b, #ff5722)',
        'linear-gradient(45deg, #673ab7, #3f51b5)',
        'linear-gradient(45deg, #e91e63, #9c27b0)',
    ];
    for (let i = 0; i < 150; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomized properties
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = `${Math.random() * 10 + 5}px`; // Random size between 5px and 15px
        particle.style.height = particle.style.width; // Make it a square for perfect circles
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '20%'; // Random shapes
        particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}, 0 0 20px ${particle.style.backgroundColor}`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `10%`; // Random spread near the center
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Slight transparency
        particle.style.animationDelay = `${Math.random() * 0.5}s`;

        // Randomized transformation for more variety
        particle.style.transform = `translateY(${Math.random() * -200}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`;

        popperContainer.appendChild(particle);

        // Remove the particle after animation
        particle.addEventListener('animationend', () => particle.remove());
    }
}

function createBalloons() {
    const balloonContainer = document.getElementById('balloonContainer');
    const colors = ['#ff416c', '#ff4b2b', '#ffeb3b', '#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#3f51b5']; // Array of colors
    
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Random balloon color
        balloon.style.animationDelay = `${Math.random() * 2}s`; // Staggered animation
        
        balloonContainer.appendChild(balloon);

        // Remove the balloon after animation ends
        balloon.addEventListener('animationend', () => balloon.remove());
    }
}


function updateCount() {
    if (count > 0) {
        wishElmnt.style.display = 'none';
        document.getElementById('notesImg').style.display='none';
        countElmnt.textContent = `${count}`;
        count--;
    } else {
        countElmnt.style.display = 'none';
        countAlertElmnt.style.display = 'none';
        wishElmnt.style.display = 'block';
        document.getElementById('notesImg').style.display='inline-block';
        createBalloons();
        createPartyPopper();
        clearInterval(countTimer);

    }
}
function wishPaper(){

}
function startCountdown() {
    countElmnt.style.display = 'block';
    countAlertElmnt.style.display = 'block';
    wishElmnt.style.display = 'none';
    count = 3;
    countTimer = setInterval(updateCount, 1000);
    updateCount();
}

// Start the countdown initially
startCountdown();

document.getElementById('notesImg').addEventListener('click',notePadWriter);
window.addEventListener('load', () => {
    audio.play().catch(error => {
        console.error("Autoplay failed due to browser policies:", error);
    });
});
function notePadWriter(){
    const audio = document.getElementById('bdaudio');
    if (!audio.paused) {
        audio.pause(); // Stop the audio
        audio.currentTime = 0; // Reset audio to the start (optional)
    }
    
    document.getElementById('outer').style.display='none';
    document.getElementById('paperContent').style.display='flex';
    wishPaper();
}

document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.getElementById("toggleImage");
  
    imgElement.addEventListener("click", function () {
      const staticSrc = imgElement.getAttribute("data-static");
      const gifSrc = imgElement.getAttribute("data-gif");
      const currentSrc = imgElement.getAttribute("src");
  
      // Toggle the source between static image and GIF
      imgElement.setAttribute("src", currentSrc === staticSrc ? gifSrc : staticSrc);
    });
  });
  document.getElementById("toggleImage").addEventListener("click", giftFunction);
  
  
  function giftFunction() {
    const paperId = document.getElementById('paper');
    paperId.style.display = 'none'; 

    document.getElementById("toggleImage").style.display = 'none';

    // Create a container div for the gift section
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.top = '0px';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center'; // Center align content
    container.style.marginTop = '-10px'; // Add spacing at the top

    // Create a paragraph element for the special message
    const mySpclTag = document.createElement('p');
    mySpclTag.innerHTML = `I love You Pondatti😘 <br> Avlo azhaga iruka...🤤`; // Use innerHTML for line breaks
    mySpclTag.style.fontSize = '20px'; // Adjust font size
    mySpclTag.style.color = 'black'; // Set text color
    mySpclTag.style.marginBottom = '10px'; // Spacing between text and image

    // Create an image element
    const newImage = document.createElement('img');
    newImage.id="image-boxes ";
    newImage.src = 'BkGift.jpg'; // Replace with your image path
    newImage.alt = 'Baranikumar';
    newImage.style.width = '200px'; // Set width
    newImage.style.height = 'auto'; // Maintain aspect ratio
    newImage.style.borderRadius = '10px'; // Rounded corners
    newImage.style.overflow = 'hidden'; // Ensure proper overflow behavior
    newImage.style.boxShadow  = '0px 4px 10px rgba(0, 0, 0, 0.2), 0px 6px 15px rgba(0, 0, 0, 0.1)';
    
    // Append the paragraph and image to the container
    container.appendChild(mySpclTag);
    container.appendChild(newImage);

    // Append the container to the body
    document.body.appendChild(container);

    // Create a new popper container for the party poppers
    const popperContainer = document.createElement('div');
    popperContainer.id = 'popperContainer'; // Assign an ID for easy reference
    popperContainer.style.position = 'absolute'; // Absolute positioning for overlay effect
    popperContainer.style.top = '0'; // Position it at the top (adjust if needed)
    popperContainer.style.left = '0'; // Position it at the left (adjust if needed)
    popperContainer.style.width = '100vw'; // Full screen width
    popperContainer.style.height = '100vh'; // Full screen height
    popperContainer.style.zIndex = '1000'; // Ensure it overlays on top of other content
    popperContainer.style.pointerEvents = 'none'; // Allow interaction with elements below

    // Append the popper container to the body
    document.body.appendChild(popperContainer);

    // Call the function to create party poppers inside the popper container
    createPartyPopperss(popperContainer);
}

function createPartyPopperss(container) {
    const colors = [
        'linear-gradient(45deg, #ff416c, #ff4b2b)',
        'linear-gradient(45deg, #4caf50, #2196f3)',
        'linear-gradient(45deg, #ffeb3b, #ff5722)',
        'linear-gradient(45deg, #673ab7, #3f51b5)',
        'linear-gradient(45deg, #e91e63, #9c27b0)',
    ];

    for (let i = 0; i < 150; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomized properties
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = `${Math.random() * 10 + 5}px`; // Random size between 5px and 15px
        particle.style.height = particle.style.width; // Make it a square for perfect circles
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '20%'; // Random shapes
        particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}, 0 0 20px ${particle.style.backgroundColor}`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `10%`; // Random spread near the center
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Slight transparency
        particle.style.animationDelay = `${Math.random() * 0.5}s`;

        // Randomized transformation for more variety
        particle.style.transform = `translateY(${Math.random() * -200}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`;

        container.appendChild(particle);

        // Remove the particle after animation
        particle.addEventListener('animationend', () => particle.remove());
    }
}
