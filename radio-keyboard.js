document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('radio-player');

    if (!audio) {
        console.error("Elemento de áudio não encontrado!");
        return;
    }

    document.addEventListener('keydown', (event) => {
        // Ignora a ação das setas se a tecla Alt estiver pressionada
        if (event.altKey) {
            return;
        }

        switch (event.key.toLowerCase()) { // Convertendo a tecla para minúscula
            case 'p': // Reproduzir/Pausar
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
                break;

            case 'arrowleft': // Retroceder
                event.preventDefault(); // Evitar o comportamento padrão
                audio.currentTime = Math.max(0, audio.currentTime - 5);
                break;

            case 'arrowright': // Avançar
                event.preventDefault(); // Evitar o comportamento padrão
                audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
                break;

            case 'arrowup': // Aumentar volume
                event.preventDefault(); // Evitar o comportamento padrão
                audio.volume = Math.min(1, audio.volume + 0.1);
                break;

            case 'arrowdown': // Diminuir volume
                event.preventDefault(); // Evitar o comportamento padrão
                audio.volume = Math.max(0, audio.volume - 0.1);
                break;

            case 'a': // Ativar/Desativar áudio
                audio.muted = !audio.muted;
                break;

            default:
                // Comando não reconhecido
                break;
        }
    });
});
