/* ============================================
   QUESTOES-TEMPLATE.JS
   Sistema de Quiz Interativo
   Biblioteca de Anestesiologia - Academia MedTech
   ============================================ */

/* ============================================
   SEÇÃO 1: CONFIGURAÇÃO INICIAL
   ============================================ */

// Tema padrão caso não seja especificado na URL
// Ex: se abrir questoes.html sem ?tema=X, usa "transplante"
const DEFAULT_THEME = "transplante";

/* ============================================
   SEÇÃO 2: REFERÊNCIAS AOS ELEMENTOS DO DOM
   Busca elementos HTML que serão manipulados
   ============================================ */

// Container principal onde o quiz será renderizado
// HTML: <div id="quiz-root"></div>
const root = document.getElementById("quiz-root");

// Elemento que mostra total de questões
// HTML: <span id="question-total">0</span>
const totalEl = document.getElementById("question-total");

// Título da página (atualizado via JSON)
// HTML: <h1 id="quiz-title">Título</h1>
const titleEl = document.getElementById("quiz-title");

// Descrição do quiz (atualizada via JSON)
// HTML: <p id="quiz-description">Descrição</p>
const descriptionEl = document.getElementById("quiz-description");

// Logo/título na navbar
// HTML: <span id="quiz-logo">Logo</span>
const logoEl = document.getElementById("quiz-logo");

// Link de voltar (dinâmico baseado na origem)
// HTML: <a id="back-link" href="#">Voltar</a>
const backLinkEl = document.getElementById("back-link");

/* ============================================
   SEÇÃO 3: PARÂMETROS DA URL
   Lê informações passadas pela URL
   ============================================ */

// URLSearchParams: API para ler parâmetros da URL
// Ex: questoes.html?tema=cardiaca&origem=template.html
const params = new URLSearchParams(window.location.search);

// Pega o parâmetro "tema" da URL
// Ex: ?tema=cardiaca → theme = "cardiaca"
// Se não existir, usa DEFAULT_THEME ("transplante")
const theme = params.get("tema") || DEFAULT_THEME;

// Pega o parâmetro "origem" (de onde veio)
// Ex: ?origem=template.html → origin = "template.html"
// Usado para o botão "Voltar" levar ao lugar certo
const origin = params.get("origem");

// Monta o caminho do arquivo JSON a ser carregado
// Ex: theme = "cardiaca" → dataUrl = "../data/questoes/cardiaca.json"
// ../ = sobe um nível (de /pages/questoes/ para /data/questoes/)
const dataUrl = `../../data/questoes/${theme}.json`;

/* ============================================
   SEÇÃO 4: VARIÁVEIS DE ESTADO DO QUIZ
   Armazenam o estado atual do quiz
   ============================================ */

// Array com todas as questões carregadas do JSON
// Ex: [{enunciado: "...", alternativas: [...], explicacao: "..."}, ...]
let quizData = [];

// Índice da questão atual sendo exibida
// Ex: 0 = primeira questão, 1 = segunda, etc
let currentQuestion = 0;

// Array com respostas do usuário
// Ex: [1, null, 3, 0] → respondeu Q1(índice 1), pulou Q2, respondeu Q3(índice 3), etc
// null = não respondida
let userAnswers = [];

// Array controlando se gabarito está visível
// Ex: [true, false, true] → Q1 mostrando gabarito, Q2 oculto, Q3 mostrando
let showingAnswer = [];

/* ============================================
   SEÇÃO 5: FUNÇÕES DE ATUALIZAÇÃO DE INTERFACE
   ============================================ */

/**
 * FUNÇÃO: updateMeta
 * PROPÓSITO: Atualiza título e descrição da página com dados do JSON
 * 
 * @param {Object} data - Objeto com dados do JSON (titulo, descricao)
 * 
 * QUANDO EXECUTA:
 * - Ao carregar o quiz pela primeira vez
 * - Quando o JSON é carregado com sucesso
 * 
 * O QUE FAZ:
 * 1. Extrai título e descrição do JSON (ou usa valores padrão)
 * 2. Atualiza elementos HTML com esses valores
 * 3. Atualiza o <title> da aba do navegador
 */
function updateMeta(data) {
  // Operador ternário: se data.titulo existe, usa ele; senão, usa texto padrão
  // data && data.titulo = verifica se data existe E se tem propriedade titulo
  const title = data && data.titulo ? data.titulo : "Banco de Questoes";
  
  // Mesmo conceito: pega descrição do JSON ou usa padrão
  const description = data && data.descricao
    ? data.descricao
    : "Atualize o arquivo JSON do tema para adicionar novas questoes.";

  // Atualiza título principal da página (se elemento existir)
  // if (titleEl) = proteção: só executa se elemento foi encontrado
  if (titleEl) {
    titleEl.textContent = title;
  }
  
  // Atualiza descrição (se elemento existir)
  if (descriptionEl) {
    descriptionEl.textContent = description;
  }
  
  // Atualiza logo na navbar (se elemento existir)
  if (logoEl) {
    logoEl.textContent = title;
  }

  // Atualiza <title> da aba do navegador
  // Resultado: "Transplante Hepático - Biblioteca de Anestesiologia"
  document.title = `${title} - Biblioteca de Anestesiologia`;
}

/**
 * FUNÇÃO: updateBackLink
 * PROPÓSITO: Atualiza link do botão "Voltar" baseado na origem
 * 
 * QUANDO EXECUTA:
 * - Ao carregar o quiz
 * 
 * COMPORTAMENTO:
 * - Se veio de template.html → volta para template.html
 * - Se não tem origem → volta para index.html
 * 
 * EXEMPLO DE USO:
 * URL: questoes.html?tema=cardiaca&origem=template.html?page=cardiaca
 * Botão "Voltar" vai para: ../template.html?page=cardiaca
 */
function updateBackLink() {
  // Se elemento não existe, não faz nada
  if (!backLinkEl) {
    return;
  }
  
  // Se tem origem, usa ela; senão, volta para index.html
  // Operador ternário: condicao ? se_sim : se_nao
  const backHref = origin ? `../${origin}` : "../index.html";
  
  // Atualiza o href do link
  backLinkEl.href = backHref;
}

/**
 * FUNÇÃO: showError
 * PROPÓSITO: Exibe mensagem de erro quando algo falha
 * 
 * @param {string} message - Mensagem de erro a exibir
 * 
 * QUANDO USA:
 * - JSON não encontrado (404)
 * - Erro ao carregar dados
 * - Nenhuma questão cadastrada
 * 
 * O QUE FAZ:
 * - Limpa o conteúdo do container
 * - Mostra mensagem de erro estilizada
 */
function showError(message) {
  // Proteção: só executa se root existe
  if (!root) {
    return;
  }

  // innerHTML = substitui TODO conteúdo do elemento
  // Template literal (`) = permite quebras de linha e variáveis
  root.innerHTML = `
    <div class="quiz-container empty-state">
      ${message}
    </div>
  `;
}

/* ============================================
   SEÇÃO 6: FUNÇÃO DE RENDERIZAÇÃO DE ALTERNATIVAS
   ============================================ */

/**
 * FUNÇÃO: buildAlternatives
 * PROPÓSITO: Cria HTML de todas as alternativas de uma questão
 * 
 * @param {Object} question - Objeto da questão (com array de alternativas)
 * @param {boolean} answered - Se questão já foi respondida
 * @param {boolean} showing - Se gabarito está visível
 * 
 * @returns {string} HTML com todas as alternativas
 * 
 * LÓGICA DE CLASSES CSS:
 * - .selected = alternativa escolhida pelo usuário
 * - .correct = alternativa correta (quando gabarito visível)
 * - .incorrect = alternativa errada que usuário escolheu
 * - .disabled = desabilita clique (quando gabarito visível)
 * 
 * EXEMPLO DE RETORNO:
 * <li class="alternative-item selected">
 *   <span class="alternative-letter">A.</span>
 *   <span class="alternative-text">Texto da alternativa</span>
 * </li>
 */
function buildAlternatives(question, answered, showing) {
  // .map() = percorre array e transforma cada item
  // Retorna novo array com HTML de cada alternativa
  return question.alternativas
    .map((alt, index) => {
      // Classe base que toda alternativa tem
      let className = "alternative-item";
      
      /* ============================================
         LÓGICA DE CLASSES CONDICIONAIS
         ============================================ */
      
      // Se já respondeu E gabarito está visível
      if (answered && showing) {
        // Adiciona classe 'disabled' (não pode mais clicar)
        className += " disabled";
        
        // Se esta alternativa é a correta
        if (alt.correta) {
          // Adiciona classe 'correct' (fica verde, por exemplo)
          className += " correct";
        } 
        // Se não é correta, mas foi a que usuário escolheu
        else if (userAnswers[currentQuestion] === index) {
          // Adiciona classe 'incorrect' (fica vermelha, por exemplo)
          className += " incorrect";
        }
      } 
      // Se não está mostrando gabarito ainda
      else if (userAnswers[currentQuestion] === index) {
        // Apenas marca como 'selected' (escolhida)
        className += " selected";
      }

      // Template literal: cria HTML da alternativa
      // data-index="${index}" = atributo personalizado para JavaScript
      // Usado depois para saber qual alternativa foi clicada
      return `
        <li class="${className}" data-index="${index}">
          <span class="alternative-letter">${alt.letra}.</span>
          <span class="alternative-text">${alt.texto}</span>
        </li>
      `;
    })
    // .join("") = junta array de strings em uma única string
    // ["<li>A</li>", "<li>B</li>"] → "<li>A</li><li>B</li>"
    .join("");
}

/* ============================================
   SEÇÃO 7: FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO
   ============================================ */

/**
 * FUNÇÃO: renderQuestion
 * PROPÓSITO: Renderiza a questão atual completa
 * 
 * O QUE RENDERIZA:
 * - Cabeçalho (contador, barra de progresso)
 * - Enunciado da questão
 * - Alternativas (via buildAlternatives)
 * - Seção de gabarito (se estiver visível)
 * - Botões de navegação
 * 
 * QUANDO EXECUTA:
 * - Ao carregar quiz
 * - Ao selecionar alternativa
 * - Ao navegar entre questões
 * - Ao mostrar/ocultar gabarito
 */
function renderQuestion() {
  // Proteção: se root não existe, não faz nada
  if (!root) {
    return;
  }

  // CASO ESPECIAL: Nenhuma questão carregada
  if (!quizData.length) {
    root.innerHTML = `
      <div class="quiz-container empty-state">
        Nenhuma questao cadastrada para este tema.
      </div>
    `;
    return; // Para execução aqui
  }

  /* ============================================
     PREPARAÇÃO DE VARIÁVEIS
     ============================================ */
  
  // Questão atual (objeto completo do array quizData)
  const question = quizData[currentQuestion];
  
  // Se questão atual já foi respondida
  // userAnswers[currentQuestion] !== null = tem resposta selecionada
  const answered = userAnswers[currentQuestion] !== null;
  
  // Se gabarito da questão atual está visível
  const showing = showingAnswer[currentQuestion];
  
  // Cálculo do progresso percentual
  // Ex: questão 3 de 10 = (3+1)/10 * 100 = 40%
  // +1 porque currentQuestion começa em 0
  const progress = Math.round(((currentQuestion + 1) / quizData.length) * 100);
  
  // Índice da alternativa selecionada pelo usuário
  // Ex: 0 = A, 1 = B, 2 = C, etc
  const selectedIndex = userAnswers[currentQuestion];
  
  // Objeto da alternativa selecionada (ou null se não respondida)
  // Ex: {letra: "A", texto: "...", correta: true}
  const selectedAlt = answered ? question.alternativas[selectedIndex] : null;
  
  // Se resposta selecionada está correta
  const isCorrect = selectedAlt ? selectedAlt.correta : false;
  
  // Textos e ícones baseados em acerto/erro
  const answerTitle = isCorrect ? "Resposta correta" : "Resposta incorreta";
  const answerIcon = isCorrect ? "OK" : "X";
  
  // Classe CSS adicional para seção de resposta
  // Se errou, adiciona " incorrect" (note o espaço no início)
  const answerClass = isCorrect ? "" : " incorrect";

  /* ============================================
     RENDERIZAÇÃO DO HTML COMPLETO
     ============================================ */
  
  root.innerHTML = `
    <div class="quiz-container">
      
      <!-- ==================== CABEÇALHO ==================== -->
      <div class="quiz-header">
        <!-- Contador: "Questão 1 de 10" -->
        <span class="question-counter">Questao ${currentQuestion + 1} de ${quizData.length}</span>
        
        <!-- Barra de progresso visual -->
        <div class="progress-bar">
          <!-- Barra preenchida dinamicamente com CSS inline -->
          <!-- Ex: style="width: 40%" -->
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        
        <!-- Percentual: "40%" -->
        <span class="question-counter">${progress}%</span>
      </div>

      <!-- ==================== CARD DA QUESTÃO ==================== -->
      <div class="question-card">
        
        <!-- Enunciado da questão -->
        <div class="question-text">${question.enunciado}</div>
        
        <!-- Lista de alternativas -->
        <ul class="alternatives-list">
          ${buildAlternatives(question, answered, showing)}
        </ul>

        <!-- ==================== SEÇÃO DE GABARITO ==================== -->
        <!-- Só aparece se showing = true (operador ternário) -->
        ${showing ? `
          <div class="answer-section${answerClass}">
            
            <!-- Cabeçalho: ícone + título -->
            <div class="answer-header">
              <span class="answer-icon">${answerIcon}</span>
              <span class="answer-title">${answerTitle}</span>
            </div>
            
            <!-- Explicação detalhada da resposta -->
            <div class="answer-explanation">${question.explicacao}</div>
          </div>
        ` : ""}
        <!-- Fim da seção condicional -->
        
      </div>

      <!-- ==================== BOTÕES ==================== -->
      <div class="button-group">
        
        <!-- Botões de navegação (Anterior/Próxima) -->
        <div class="nav-buttons">
          
          <!-- Botão Anterior -->
          <!-- disabled se está na primeira questão (currentQuestion === 0) -->
          <button class="btn btn-secondary" data-action="prev" ${currentQuestion === 0 ? "disabled" : ""}>
            Anterior
          </button>
          
          <!-- Botão Próxima -->
          <!-- disabled se está na última questão -->
          <button class="btn btn-secondary" data-action="next" ${currentQuestion === quizData.length - 1 ? "disabled" : ""}>
            Proxima
          </button>
          
        </div>
        
        <!-- Botão Revelar/Ocultar Gabarito -->
        <!-- disabled se não respondeu ainda -->
        <!-- Texto muda baseado no estado (showing) -->
        <button class="btn btn-primary" data-action="toggle" ${!answered ? "disabled" : ""}>
          ${showing ? "Ocultar gabarito" : "Revelar gabarito"}
        </button>
        
      </div>
    </div>
  `;

  /* ============================================
     ADICIONAR EVENT LISTENERS (EVENTOS DE CLIQUE)
     ============================================ */
  
  // EVENTO: Clique nas alternativas
  // querySelectorAll = busca TODOS elementos com classe .alternative-item
  // forEach = para cada alternativa encontrada
  root.querySelectorAll(".alternative-item").forEach((item) => {
    // Pega o índice armazenado no data-index
    // Ex: <li data-index="0"> → index = 0
    // Number() = converte string para número
    const index = Number(item.dataset.index);
    
    // addEventListener = adiciona evento de clique
    // Arrow function: () => { código }
    item.addEventListener("click", () => {
      // Se gabarito está visível, não faz nada (está disabled)
      if (showing) {
        return;
      }
      // Chama função que registra a resposta
      selectAnswer(index);
    });
  });

  // EVENTO: Botões de navegação e toggle
  // querySelector = busca PRIMEIRO elemento que corresponde
  // [data-action="prev"] = seletor de atributo
  const prevButton = root.querySelector('[data-action="prev"]');
  const nextButton = root.querySelector('[data-action="next"]');
  const toggleButton = root.querySelector('[data-action="toggle"]');

  // Adiciona eventos de clique em cada botão (se existir)
  if (prevButton) {
    prevButton.addEventListener("click", previousQuestion);
  }
  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion);
  }
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleAnswer);
  }
}

/* ============================================
   SEÇÃO 8: FUNÇÕES DE INTERAÇÃO DO USUÁRIO
   ============================================ */

/**
 * FUNÇÃO: selectAnswer
 * PROPÓSITO: Registra resposta do usuário
 * 
 * @param {number} index - Índice da alternativa selecionada (0=A, 1=B, etc)
 * 
 * O QUE FAZ:
 * 1. Armazena resposta no array userAnswers
 * 2. Re-renderiza questão para mostrar alternativa marcada
 * 
 * EXEMPLO:
 * Usuário clica em alternativa B (index 1)
 * → userAnswers[currentQuestion] = 1
 * → renderQuestion() mostra B marcada
 */
function selectAnswer(index) {
  // Armazena índice da alternativa escolhida
  // currentQuestion = índice da questão atual
  // Ex: na questão 0, usuário escolheu alternativa 1 (B)
  userAnswers[currentQuestion] = index;
  
  // Re-renderiza para mostrar alternativa marcada
  renderQuestion();
}

/**
 * FUNÇÃO: toggleAnswer
 * PROPÓSITO: Mostra ou oculta gabarito da questão atual
 * 
 * O QUE FAZ:
 * 1. Verifica se questão foi respondida
 * 2. Inverte estado (mostrando ↔ ocultando)
 * 3. Re-renderiza para atualizar interface
 * 
 * LÓGICA:
 * - Se showingAnswer[0] = false → muda para true (mostra gabarito)
 * - Se showingAnswer[0] = true → muda para false (oculta gabarito)
 */
function toggleAnswer() {
  // Se não respondeu ainda, não faz nada
  // null = não respondida
  if (userAnswers[currentQuestion] === null) {
    return;
  }
  
  // Operador ! = NOT (inverte booleano)
  // Se era false, vira true; se era true, vira false
  showingAnswer[currentQuestion] = !showingAnswer[currentQuestion];
  
  // Re-renderiza para mostrar/ocultar gabarito
  renderQuestion();
}

/**
 * FUNÇÃO: nextQuestion
 * PROPÓSITO: Avança para próxima questão
 * 
 * O QUE FAZ:
 * 1. Verifica se não é a última questão
 * 2. Incrementa currentQuestion
 * 3. Re-renderiza nova questão
 * 
 * PROTEÇÃO:
 * - Não deixa passar da última questão
 */
function nextQuestion() {
  // Se ainda não é a última questão
  // Ex: questão 3, total 10 → pode avançar
  if (currentQuestion < quizData.length - 1) {
    // Incrementa índice (vai para próxima)
    // currentQuestion++ = currentQuestion = currentQuestion + 1
    currentQuestion += 1;
    
    // Re-renderiza nova questão
    renderQuestion();
  }
}

/**
 * FUNÇÃO: previousQuestion
 * PROPÓSITO: Volta para questão anterior
 * 
 * O QUE FAZ:
 * 1. Verifica se não é a primeira questão
 * 2. Decrementa currentQuestion
 * 3. Re-renderiza questão anterior
 * 
 * PROTEÇÃO:
 * - Não deixa voltar antes da primeira questão
 */
function previousQuestion() {
  // Se não é a primeira questão (índice > 0)
  if (currentQuestion > 0) {
    // Decrementa índice (vai para anterior)
    // currentQuestion -= 1 = currentQuestion = currentQuestion - 1
    currentQuestion -= 1;
    
    // Re-renderiza questão anterior
    renderQuestion();
  }
}

/* ============================================
   SEÇÃO 9: FUNÇÃO DE CARREGAMENTO DE DADOS
   ============================================ */

/**
 * FUNÇÃO: loadQuiz
 * PROPÓSITO: Carrega dados do JSON e inicializa o quiz
 * 
 * FLUXO:
 * 1. Atualiza link de voltar
 * 2. Mostra "Carregando..."
 * 3. Faz fetch do JSON
 * 4. Processa dados recebidos
 * 5. Inicializa arrays de estado
 * 6. Renderiza primeira questão
 * 
 * TRATA ERROS:
 * - JSON não encontrado (404)
 * - Erro de rede
 * - JSON malformado
 */
function loadQuiz() {
  // Atualiza href do botão "Voltar"
  updateBackLink();
  
  // Mostra mensagem temporária enquanto carrega
  if (root) {
    root.textContent = "Carregando...";
  }

  /* ============================================
     FETCH: BUSCAR DADOS DO SERVIDOR
     ============================================ */
  
  // fetch() = busca arquivo (assíncrono)
  // Retorna uma Promise (promessa de resposta futura)
  fetch(dataUrl)
    // .then() = "quando resposta chegar, execute isso"
    .then((response) => {
      // response.ok = true se status 200-299 (sucesso)
      // false se 404, 500, etc (erro)
      if (!response.ok) {
        // throw = lança erro (vai para .catch)
        throw new Error("Arquivo JSON nao encontrado");
      }
      
      // .json() = converte resposta para objeto JavaScript
      // Também retorna Promise (é assíncrono)
      return response.json();
    })
    
    // .then() = "quando JSON estiver convertido, execute isso"
    .then((data) => {
      // Atualiza título e descrição com dados do JSON
      updateMeta(data || {});
      
      // Extrai array de questões do JSON
      // Array.isArray() = verifica se é array
      // Se não for array, usa array vazio []
      quizData = Array.isArray(data.questoes) ? data.questoes : [];
      
      // Sempre começa na primeira questão
      currentQuestion = 0;
      
      // Inicializa array de respostas
      // Array(10).fill(null) = [null, null, null, ..., null] (10 vezes)
      // null = nenhuma questão respondida ainda
      userAnswers = Array(quizData.length).fill(null);
      
      // Inicializa array de gabaritos visíveis
      // false = todos gabaritos ocultos inicialmente
      showingAnswer = Array(quizData.length).fill(false);

      // Atualiza contador total de questões
      if (totalEl) {
        // String() = converte número para texto
        totalEl.textContent = String(quizData.length);
      }

      // Renderiza primeira questão
      renderQuestion();
    })
    
    // .catch() = "se der qualquer erro, execute isso"
    .catch(() => {
      // Atualiza meta com valores vazios
      updateMeta({});
      
      // Mostra 0 questões
      if (totalEl) {
        totalEl.textContent = "0";
      }
      
      // Exibe mensagem de erro
      showError("Nao foi possivel carregar o tema. Verifique o nome do arquivo JSON e se esta rodando em um servidor local.");
    });
}

/* ============================================
   SEÇÃO 10: INICIALIZAÇÃO
   Executa automaticamente ao carregar script
   ============================================ */

// Chama loadQuiz() assim que script carrega
// Inicia todo o processo
loadQuiz();