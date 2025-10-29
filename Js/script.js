const audio = new Audio('songs/Aasecond-hand-149907.mp3');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const progress = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-container');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    // Play button
    playBtn.addEventListener('click', () => {
      audio.play();
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'inline-block';
    });

    // Pause button
    pauseBtn.addEventListener('click', () => {
      audio.pause();
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'inline-block';
    });

    // Update progress bar
    audio.addEventListener('timeupdate', updateProgress);
    function updateProgress() {
      const { currentTime, duration } = audio;
      const percent = (currentTime / duration) * 100;
      progress.style.width = `${percent}%`;
      currentTimeEl.textContent = formatTime(currentTime);
      durationEl.textContent = formatTime(duration);
    }

    // Seek functionality
    progressContainer.addEventListener('click', (e) => {
      const width = progressContainer.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    });

    // Format time (seconds → mm:ss)
    function formatTime(time) {
      if (isNaN(time)) return '0:00';
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Reset when song ends
    audio.addEventListener('ended', () => {
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'inline-block';
      progress.style.width = '0%';
    });// Create an Audio object
    const song = new Audio('songs/Aasecond-hand-149907.mp3');

    // Play the song
    document.getElementById('playBtn').addEventListener('click', () => {
      song.play();
    });

    // Pause the song
    document.getElementById('pauseBtn').addEventListener('click', () => {
      song.pause();
    });