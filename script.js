const audio = document.getElementById('meuAudio');

// Função para tocar o áudio
function tocarAudio() {
    audio.play();
}

// Função para pausar o áudio
function pausarAudio() {
    audio.pause();
}

// Função para alterar o volume do áudio
function alterarVolume(valor) {
    audio.volume = valor;
}
