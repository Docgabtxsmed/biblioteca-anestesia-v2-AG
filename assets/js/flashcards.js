// js/script-flashcard.js

// --- 1. VARIÁVEIS DE ESTADO (A memória do jogo) ---
let flashcardsData = [];
let currentCardIndex = 0;
let isFlipped = false;

// Objeto para guardar as estatísticas da sessão
let sessionStats = {
    again: 0,
    hard: 0,
    good: 0,
    easy: 0
};

// --- 2. ELEMENTOS DO DOM (Referências para o HTML) ---
const elements = {
    // Cabeçalho e Progresso
    deckTitle: document.getElementById('deck-title'),
    counter: document.getElementById('counter'),
    progressFill: document.getElementById('progress-fill'),

    // Área do Card
    gameArea: document.getElementById('game-area'),
    flashcard: document.getElementById('flashcard'),
    cardFront: document.getElementById('card-front-content'),
    cardBack: document.getElementById('card-back-content'),

    // Botões
    buttonsContainer: document.getElementById('buttons-container'),
    backLink: document.getElementById('back-link'),

    // Estatísticas (Placar)
    statAgain: document.getElementById('stat-again'),
    statHard: document.getElementById('stat-hard'),
    statGood: document.getElementById('stat-good'),
    statEasy: document.getElementById('stat-easy'),

    // Tela Final
    completionScreen: document.getElementById('completion-screen')
};

// --- 3. INICIALIZAÇÃO (Roda assim que a página abre) ---
window.onload = async function () {
    try {
        // Pega o tema da URL (ex: ?tema=toracica)
        const params = new URLSearchParams(window.location.search);
        const tema = params.get('tema');
        const origem = params.get('origem');

        // Atualiza o link de voltar
        updateBackLink(origem);

        if (!tema) {
            elements.deckTitle.innerText = "Nenhum deck selecionado.";
            elements.cardFront.innerText = "Erro: Tema não definido na URL.";
            return;
        }

        // Formata o nome do deck para exibição (Primeira letra maiúscula)
        // Ex: cardiaca -> Cardiaca
        const nomeDisplay = tema.charAt(0).toUpperCase() + tema.slice(1);

        // Constrói o caminho do arquivo JSON dinamicamente
        // Nota: Assumindo que o HTML está em pages/flashcards/ e o JSON em data/flashcards/
        // O caminho relativo correto seria ../../data/flashcards/${tema}.json 
        // mas vamos tentar ser robustos. Se flashcards.html estiver em pages/flashcards, subir 2 niveis é o correto.
        const arquivoJson = `../../data/flashcards/${tema}.json`;

        // Atualiza o título da página
        elements.deckTitle.innerText = "Deck: " + nomeDisplay;

        // Busca os dados (JSON)
        const response = await fetch(arquivoJson);
        if (!response.ok) throw new Error('Arquivo JSON não encontrado');

        flashcardsData = await response.json();

        // Inicia o jogo se houver cartas
        if (flashcardsData.length > 0) {
            shuffleCards();     // Embaralha
            loadCard();         // Carrega a primeira
            updateProgress();   // Atualiza barra
            updateStatsUI();    // Zera o placar visual
        } else {
            elements.cardFront.innerText = "Este baralho está vazio.";
        }

    } catch (erro) {
        console.error(erro);
        elements.deckTitle.innerText = "Erro ao carregar";
        elements.cardFront.innerText = "Erro: " + erro.message;
    }
};

// Função para atualizar o link de voltar
function updateBackLink(origem) {
    if (!elements.backLink) return;

    // Se tiver origem, volta para lá (ex: ../../index.html ou ../../pages/alguma_coisa.html)
    // Se não, volta para o padrão (../../index.html)
    // Nota: Como estamos em pages/flashcards/flashcards.html, precisamos subir 2 níveis para raiz
    // A origem vinda da URL provavelmente será relativa à raiz ou ao arquivo anterior.
    // Vamos assumir que 'origem' pode ser um caminho relativo, e se não vier, vai pro index.

    // Melhor abordagem baseada no padrao questoes.js:
    const backHref = origem ? `../${origem}` : "../index.html";
    elements.backLink.href = backHref;

    // Remove o evento padrão para evitar conflito se houver (embora aqui seja <a>)
    elements.backLink.onclick = null;
}


// --- 4. FUNÇÕES DE LÓGICA DO JOGO ---

// Algoritmo Fisher-Yates para embaralhar
function shuffleCards() {
    for (let i = flashcardsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardsData[i], flashcardsData[j]] = [flashcardsData[j], flashcardsData[i]];
    }
}

// Re-embaralhar manual (botão 🔀)
function shuffleCardsManual() {
    if (confirm("Deseja re-embaralhar e reiniciar a sequência?")) {
        shuffleCards();
        currentCardIndex = 0; // Volta para a primeira carta
        loadCard();
        updateProgress();
        // Reset stats opcional? Por enquanto mantém acumulado ou zera? 
        // O código original não zerava stats explicitamente no manual, vamos manter assim.
    }
}

// Carregar a carta atual na tela
function loadCard() {
    // Verifica se acabaram as cartas
    if (currentCardIndex >= flashcardsData.length) {
        finishSession();
        return;
    }

    const card = flashcardsData[currentCardIndex];

    // Preenche texto da frente e verso
    elements.cardFront.innerText = card.front;
    elements.cardBack.innerText = card.back;

    // Reseta o estado visual (desvirado)
    isFlipped = false;
    elements.flashcard.classList.remove('flipped');

    // Desabilita os botões de resposta (para obrigar a pensar)
    elements.buttonsContainer.classList.add('disabled');
}

// Virar a carta (Flip)
function flipCard() {
    isFlipped = !isFlipped;
    elements.flashcard.classList.toggle('flipped');

    // Se virou para ver a resposta, libera os botões
    if (isFlipped) {
        elements.buttonsContainer.classList.remove('disabled');
    }
}

// Responder a carta (Botões de dificuldade)
function answerCard(difficulty) {
    // Se não estiver virada, impede resposta (exceto se for "pular/next")
    if (difficulty !== 'skip' && !isFlipped) return;

    // Se for uma resposta válida (again, hard, good, easy), atualiza estatística
    if (difficulty !== 'skip' && sessionStats.hasOwnProperty(difficulty)) {
        sessionStats[difficulty]++;
        updateStatsUI(); // Atualiza o placar na tela
    }

    // Avança para a próxima carta
    currentCardIndex++;
    updateProgress();

    // Pequeno delay para a transição ficar suave
    setTimeout(() => {
        loadCard();
    }, 200);
}

// Função específica para o botão "Próximo Card"
function nextCard() {
    answerCard('skip'); // Reutiliza a lógica, mas sem somar pontos
}

// --- 5. ATUALIZAÇÃO DA INTERFACE (UI) ---

// Barra de Progresso e Contador (Ex: 5 / 30)
function updateProgress() {
    const total = flashcardsData.length;
    const current = currentCardIndex;
    // Evita divisão por zero
    const percentage = total > 0 ? (current / total) * 100 : 0;

    elements.counter.innerText = `${current} / ${total}`;
    elements.progressFill.style.width = `${percentage}%`;
}

// Atualiza os números do placar (Stats)
function updateStatsUI() {
    elements.statAgain.innerText = sessionStats.again;
    elements.statHard.innerText = sessionStats.hard;
    elements.statGood.innerText = sessionStats.good;
    elements.statEasy.innerText = sessionStats.easy;
}

// --- 6. FINALIZAÇÃO ---

function finishSession() {
    // Esconde a área do jogo
    elements.gameArea.style.display = 'none';

    // Mostra a tela de parabéns
    elements.completionScreen.classList.add('active');
}

// --- 7. EXPORTAR PARA O HTML ---
// Isso permite que o HTML chame onclick="flipCard()"
window.flipCard = flipCard;
window.answerCard = answerCard;
window.nextCard = nextCard;
window.shuffleCardsManual = shuffleCardsManual;
