let continueButton = document.getElementById('continue');
let continueButton2 = document.getElementById('continue2');
let backBtn = document.getElementById('back');
let musicBtn = document.getElementById('music');
let timer = document.getElementById('timer');
let note = document.getElementById('note');
const sound = new Audio('./song.mp3');
sound.loop = true; // Enable looping

let music = true;

musicBtn.onclick = function () {
    if (music) {
        music = false;
        sound.muted = true;
        this.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    } else {
        music = true;
        sound.muted = false;
        this.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;

    }

}

continueButton.onclick = function () {
    timer.style.opacity = '0';

    sound.currentTime += 2;

    // Play the sound
    sound.play();

    // Use setTimeout to wait for the transition to finish before hiding it completely
    setTimeout(function () {
        timer.style.display = 'none'; // Hide the element completely
    }, 1000);

}

continueButton2.onclick = function () {
    note.style.opacity = '0';


    setTimeout(function () {
        note.style.display = 'none';
    }, 1200);

}


backBtn.onclick = function () {
    timer.style.opacity = '1';

    sound.pause();
    sound.currentTime = 0; // Reset to the beginning

    timer.style.display = '';

}

function updateTime() {
    const now = new Date();

    // Set the target date (January 8 at 00:00:00)
    const targetDate = new Date(now.getFullYear() + 1, 0, 8, 0, 0, 0); // year/month/hour/minutes/seconds

    // Calculate the difference in milliseconds
    const diff = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Format the output
    const timeString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left until January 8.`;


    // Display the time

    time.textContent = timeString;
}

// Update time immediately on page load
updateTime();
// Update the time every second
setInterval(updateTime, 1000);