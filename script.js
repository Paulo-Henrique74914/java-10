function transformar(alien) {
    const nome = document.getElementById('alien-nome');
    const desc = document.getElementById('alien-desc');
    const img = document.getElementById('alien-img');
    const body = document.body;

    if (alien === 'Chamas') {
        nome.textContent = 'Chamas';
        desc.textContent = 'Um alien de fogo com poder explosivo!';
        img.src = 'img/chama.png';
        img.style.width = '250px';
        body.style.backgroundColor = '#ff4500';
        efeitoOmnitrix();
    }

    if (alien === 'XLR8') {
        nome.textContent = 'XLR8';
        desc.textContent = 'O alien super veloz que quebra o tempo!';
        img.src = 'img/xlr8-vs.png';
        body.style.backgroundColor = '#0044ff';
        efeitoOmnitrix();
    }

    if (alien === 'Diamante') {
        nome.textContent = 'Diamante';
        desc.textContent = 'Feito de cristal puro e força bruta!';
        img.src = 'img/diamante-cr.png';
        body.style.backgroundColor = '#00e6e6';
        efeitoOmnitrix();
    }

    if (alien === 'Besta') {
        nome.textContent = 'Besta';
        desc.textContent = 'Um alien feroz com garras afiadas!';
        img.src = 'img/Besta.png';
        body.style.backgroundColor = '#8B4513';
        efeitoOmnitrix();
    }

    if (alien === 'Quatro-Braços') {
        nome.textContent = 'Quatro Braços';
        desc.textContent = 'Um alien super forte com quatro braços!';
        img.src = 'img/quatro-bracos.png';
        body.style.backgroundColor = '#720808ff';
        efeitoOmnitrix();
    }

    if (alien === 'Massa-Cinzenta') {
        nome.textContent = 'Massa Cinzenta';
        desc.textContent = 'Um alien com inteligência superior e habilidades estratégicas!';
        img.src = 'img/massa-cinzenta.png';
        body.style.backgroundColor = '#525050ff';
        efeitoOmnitrix();
    }

    if (alien === 'Ultra-T') {
        nome.textContent = 'Ultra T';
        desc.textContent = 'Um alien com habilidades de velocidade e agilidade incríveis!';
        img.src = 'img/ultra-t.png';
        body.style.backgroundColor = '#000000';
        efeitoOmnitrix();
    }

    if (alien === 'Fantasmático') {
        nome.textContent = 'Fantasmático';
        desc.textContent = 'Um alien com habilidades de invisibilidade e assombração!';
        img.src = 'img/fantasmatico.png';
        body.style.backgroundColor = '#4B0082';
        efeitoOmnitrix();
    }
    
    if (alien === 'Aquático') {
        nome.textContent = 'Aquático';
        desc.textContent = 'Um alien adaptado para viver debaixo d\'água com habilidades aquáticas!';
        img.src = 'img/aquatico.png';
        body.style.backgroundColor = '#31534cff';
        efeitoOmnitrix();
    }

    if (alien === 'Insectóide') {
        nome.textContent = 'Insectóide';
        desc.textContent = 'Um alien com habilidades de camuflagem e agilidade!';
        img.src = 'img/insectoide.png';
        body.style.backgroundColor = '#c7eec5ff';
        efeitoOmnitrix();
    }
}

function resetar() {
    const nome = document.getElementById('alien-nome');
    const desc = document.getElementById('alien-desc');
    const img = document.getElementById('alien-img');
    const body = document.body;

    nome.textContent = 'Ben Tennyson';
    desc.textContent = 'O herói que usa o Omnitrix para se transformar em incríveis alienígenas!';
    img.src = 'img/ben12-removebg-preview.png';
    body.style.backgroundColor = '#0b3d0b';
    efeitoOmnitrix();
}

// 🌟 Efeito visual do Omnitrix
function efeitoOmnitrix() {
    const flash = document.createElement('div');
    flash.classList.add('flash');
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
}

// Adiciona o estilo do efeito via JS
const estilo = document.createElement('style');
estilo.textContent = `
.flash {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: radial-gradient(circle, #00ff66 0%, transparent 80%);
    opacity: 0.8;
    animation: flashOmnitrix 0.5s ease-out;
    pointer-events: none;
}
@keyframes flashOmnitrix {
    from { opacity: 1; }
    to { opacity: 0; }
}`;
document.head.appendChild(estilo);
