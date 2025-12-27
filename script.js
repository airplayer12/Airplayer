const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
        if (file) {
                const fileURL = URL.createObjectURL(file);
                        audioPlayer.src = fileURL;
                            }
                            });

                            playButton.addEventListener('click', () => {
                                audioPlayer.play();
                                });

                                stopButton.addEventListener('click', () => {
                                    audioPlayer.pause();
                                        audioPlayer.currentTime = 0; // Reiniciar la canción
                                        });
                                        