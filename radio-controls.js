function setupTouchControls() {
    const audio = document.getElementById('radio-player');
    let initialTouches = [];

    document.addEventListener('touchstart', (e) => {
        initialTouches = [...e.touches];
    });

    document.addEventListener('touchmove', (e) => {
        if (initialTouches.length === 1) {
            const touchStart = initialTouches[0];
            const touchMove = e.touches[0];

            const diffX = touchMove.clientX - touchStart.clientX;
            const diffY = touchMove.clientY - touchStart.clientY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 50) {
                    // Ativar áudio
                    audio.muted = false;
                } else if (diffX < -50) {
                    // Desativar áudio (mutar)
                    audio.muted = true;
                }
            } else {
                if (diffY > 50) {
                    // Diminuir volume de 5%
                    audio.volume = Math.max(0, audio.volume - 0.05);
                } else if (diffY < -50) {
                    // Aumentar volume de 5%
                    audio.volume = Math.min(1, audio.volume + 0.05);
                }
            }
        }
    });

    document.addEventListener('touchend', () => {
        initialTouches = [];
    });
}

// Função para tentar iniciar o áudio
function startAudio() {
    const audio = document.getElementById('radio-player');
    const playButton = document.getElementById('play-button');

    audio.play().then(() => {
        // Esconder o botão de ativação
        playButton.style.display = 'none';
        audio.muted = false; // Desativa o mudo
    }).catch(() => {
        console.log("Interação do usuário necessária para iniciar o áudio.");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('radio-player');

    // Ao clicar no botão, inicia o áudio
    document.getElementById('play-button').addEventListener('click', startAudio);

    setupTouchControls();
});
