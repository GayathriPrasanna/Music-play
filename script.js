const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    seekBar.value = (currentTime / duration) * 100;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    currentTimeDisplay.textContent = currentMinutes + ":" +(currentSeconds < 10 ? '0' + currentSeconds : currentSeconds);

    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    durationDisplay.textContent = durationMinutes + ":" +(durationSeconds < 10 ? '0' + durationSeconds : durationSeconds);
});

seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});