/* ============================================
   MAIN.JS - JavaScript Principal
   Biblioteca de Anestesiologia - Academia MedTech
   ============================================
   
   Este arquivo contém:
   1. Navegação entre seções (Galeria ↔ Sobre)
   2. Animação de entrada dos cards
   3. Scroll suave
   4. Acessibilidade
   
   AUTOR: Gabriel Tavares (Médico Residente)
   NÍVEL: Iniciante em JavaScript
   ============================================ */

/* ==================== CONCEITOS IMPORTANTES ==================== */

/* 
   💡 ANTES DE COMEÇAR - CONCEITOS BÁSICOS:
   
   1️⃣ const vs let:
      const = NÃO pode mudar (constante)
      let = PODE mudar (variável)
      
   2️⃣ Arrow Functions (=>):
      function nome() { }  ➜  const nome = () => { }
      Forma moderna e mais curta
      
   3️⃣ querySelector:
      "Busca" elementos no HTML
      Analogia: Como procurar paciente no prontuário
      
   4️⃣ addEventListener:
      "Escuta" eventos (cliques, scroll, etc)
      Analogia: Como monitor cardíaco que avisa mudanças
      
   5️⃣ classList:
      .add() = adiciona classe CSS
      .remove() = remove classe CSS
      .toggle() = alterna (se tem remove, se não tem adiciona)
*/

/* ==================== ESPERAR DOM CARREGAR ==================== */

/* 
   🔄 DOMContentLoaded
   
   O QUE É: Evento que dispara quando HTML termina de carregar
   
   ANALOGIA MÉDICA:
   Como esperar paciente entrar na sala antes de iniciar exame
   
   POR QUÊ USAR:
   - JavaScript só funciona depois que HTML existe
   - Evita erros de "elemento não encontrado"
   
   SEM ISSO: JS tenta mexer em elementos que não existem ainda
   COM ISSO: Garante que tudo está pronto
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 JavaScript iniciado!');
    
    // Inicializa cada funcionalidade
    initNavigation();
    initCardAnimations();
    initSmoothScroll();
    initAccessibility();
    
    console.log('✅ Todas funcionalidades carregadas!');
});

/* ==================== 1. NAVEGAÇÃO ENTRE SEÇÕES ==================== */

/* 
   📱 NAVEGAÇÃO (Galeria ↔ Sobre)
   
   O QUE FAZ:
   1. Detecta clique em "Galeria" ou "Sobre"
   2. Esconde seção atual
   3. Mostra seção clicada
   4. Atualiza visual do menu
   
   HTML CORRESPONDENTE:
   <a href="#gallery-section" class="nav-link" data-section="gallery">Galeria</a>
   <a href="#about-section" class="nav-link" data-section="about">Sobre</a>
*/

function initNavigation() {
    console.log('🧭 Configurando navegação...');
    
    /* 
       querySelectorAll('.nav-link')
       
       O QUE FAZ: Busca TODOS elementos com classe "nav-link"
       RETORNA: NodeList (tipo de array)
       
       DIFERENÇA de querySelector (sem All):
       - querySelector: Pega só o PRIMEIRO
       - querySelectorAll: Pega TODOS
    */
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log(`   ↳ ${navLinks.length} links encontrados`);
    
    /* 
       forEach
       
       O QUE FAZ: Loop (repetição) em cada item
       ANALOGIA: Como passar visita em cada leito
       
       SINTAXE: array.forEach(item => { código })
    */
    navLinks.forEach(link => {
        /* 
           addEventListener('click', função)
           
           O QUE FAZ: "Escuta" cliques neste elemento
           QUANDO: Ao clicar no link
           EXECUTA: A função que você passa
        */
        link.addEventListener('click', function(event) {
            /* 
               preventDefault()
               
               O QUE FAZ: Cancela comportamento padrão
               POR QUÊ: Links normalmente pulam para #section
               AQUI: Queremos controlar isso com JavaScript
            */
            event.preventDefault();
            
            /* 
               getAttribute('data-section')
               
               O QUE FAZ: Pega valor do atributo data-section
               
               HTML: <a data-section="gallery">
               JS: link.getAttribute('data-section') = "gallery"
            */
            const sectionName = this.getAttribute('data-section');
            
            console.log(`   ↳ Clicou em: ${sectionName}`);
            
            // Mostra seção correspondente
            showSection(sectionName);
            
            // Atualiza menu (visual)
            updateActiveNav(this);
        });
    });
    
    console.log('   ✅ Navegação configurada!');
}

/* 
   🎯 MOSTRAR SEÇÃO
   
   O QUE FAZ: Esconde todas, mostra só a escolhida
   
   COMO FUNCIONA:
   1. Remove classe "active" de TODAS as seções
   2. Adiciona classe "active" na seção escolhida
   
   CSS CORRESPONDENTE:
   .section { display: none; }
   .section.active { display: block; }
*/

function showSection(sectionName) {
    /* 
       PASSO 1: Esconder todas as seções
       
       querySelectorAll('.section') = todas as seções
       forEach = para cada uma
       classList.remove('active') = remove classe
    */
    const allSections = document.querySelectorAll('.section');
    
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    /* 
       PASSO 2: Mostrar seção escolhida
       
       Template literal: `${variavel}`
       Monta string dinamicamente
       
       Ex: sectionName = "gallery"
       `${sectionName}-section` = "gallery-section"
    */
    const targetSection = document.getElementById(`${sectionName}-section`);
    
    /* 
       Verificação de segurança
       
       O QUE É: if (elemento existe)
       POR QUÊ: Evita erro se ID não existir
    */
    if (targetSection) {
        // Adiciona classe 'active' = mostra seção
        targetSection.classList.add('active');
        
        console.log(`   ✅ Mostrando: ${sectionName}`);
        
        // Se for galeria, anima cards novamente
        if (sectionName === 'gallery') {
            animateCards();
        }
    } else {
        // Se não achou, avisa no console
        console.error(`   ❌ Seção não existe: ${sectionName}-section`);
    }
}

/* 
   🎨 ATUALIZAR MENU ATIVO
   
   O QUE FAZ: Marca visualmente qual link está ativo
   
   VISUAL:
   - Link ativo: cor azul + mais destaque
   - Links inativos: cor cinza
*/

function updateActiveNav(clickedLink) {
    /* 
       PASSO 1: Remove "active" de TODOS
    */
    const allLinks = document.querySelectorAll('.nav-link');
    
    allLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    /* 
       PASSO 2: Adiciona "active" APENAS no clicado
    */
    clickedLink.classList.add('active');
    
    console.log('   ✅ Menu atualizado!');
}

/* ==================== 2. ANIMAÇÃO DOS CARDS ==================== */

/* 
   ✨ ANIMAÇÃO DE ENTRADA
   
   O QUE FAZ: Cards aparecem suavemente de baixo pra cima
   
   EFEITO VISUAL:
   - Inicialmente: invisível + abaixo da posição
   - Depois: visível + posição normal
   - Transição: suave (0.6s)
   
   POR QUÊ: Design moderno e profissional
*/

function initCardAnimations() {
    console.log('🎨 Preparando animações...');
    
    // Anima cards ao carregar página
    animateCards();
}

function animateCards() {
    /* 
       Busca TODOS os cards
    */
    const cards = document.querySelectorAll('.component-card');
    
    console.log(`   ↳ Animando ${cards.length} cards...`);
    
    /* 
       forEach com index
       
       SINTAXE: array.forEach((item, index) => {})
       
       item: Card atual
       index: Posição (0, 1, 2, 3...)
       
       POR QUÊ index: Para criar delay diferente em cada card
    */
    cards.forEach((card, index) => {
        /* 
           ESTADO INICIAL: Invisível
           
           style.opacity = '0' ➜ Totalmente transparente
           style.transform = 'translateY(20px)' ➜ 20px abaixo
        */
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        /* 
           DELAY PROGRESSIVO
           
           index * 80:
           - Card 0: 0ms (imediato)
           - Card 1: 80ms
           - Card 2: 160ms
           - Card 3: 240ms
           
           EFEITO: Aparecem em cascata (um após o outro)
        */
        const delay = index * 80;
        
        /* 
           setTimeout
           
           O QUE FAZ: Executa código após X milissegundos
           SINTAXE: setTimeout(() => { código }, delay)
           
           ANALOGIA: Como timer de medicação
           Aguarda X tempo, depois executa
        */
        setTimeout(() => {
            /* 
               Adiciona transição CSS
               
               Faz mudanças serem suaves (animadas)
            */
            card.style.transition = 'all 0.6s ease';
            
            /* 
               ESTADO FINAL: Visível
            */
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
        }, delay);
    });
    
    console.log('   ✅ Cards animados!');
}

/* ==================== 3. SCROLL SUAVE ==================== */

/* 
   📜 ROLAGEM SUAVE
   
   O QUE FAZ: Ao clicar em links âncora (#), rola suavemente
   
   EXEMPLO:
   - Clica "Sobre"
   - Página rola suavemente até seção Sobre
   
   SEM ISSO: Página pula instantaneamente
   COM ISSO: Rolagem suave e profissional
*/

function initSmoothScroll() {
    console.log('📜 Configurando scroll suave...');
    
    /* 
       Busca links que começam com # (âncoras)
       
       a[href^="#"] = <a href="#algo">
    */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            /* 
               Pega destino do link
               
               Ex: <a href="#gallery-section">
               targetId = "#gallery-section"
            */
            const targetId = this.getAttribute('href');
            
            /* 
               Se não for apenas "#" vazio
            */
            if (targetId !== '#' && targetId !== '') {
                /* 
                   Busca elemento de destino
                */
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    /* 
                       scrollIntoView
                       
                       O QUE FAZ: Rola página até elemento
                       
                       OPÇÕES:
                       - behavior: 'smooth' = rolagem suave
                       - block: 'start' = alinha no topo
                    */
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    console.log(`   ↳ Rolou até: ${targetId}`);
                }
            }
        });
    });
    
    console.log('   ✅ Scroll suave ativo!');
}

/* ==================== 4. ACESSIBILIDADE ==================== */

/* 
   ♿ ACESSIBILIDADE (A11Y)
   
   O QUE FAZ: Melhora navegação por teclado
   
   FUNCIONALIDADES:
   1. Cards funcionam com Enter/Space
   2. Skip link funciona
   3. Foco visível
   
   POR QUÊ: Inclusão e boas práticas web
*/

function initAccessibility() {
    console.log('♿ Configurando acessibilidade...');
    
    /* 
       CARDS NAVEGÁVEIS POR TECLADO
       
       :not(.card-disabled) = exceto desabilitados
    */
    const cards = document.querySelectorAll('.component-card:not(.card-disabled)');
    
    cards.forEach(card => {
        /* 
           tabindex
           
           O QUE FAZ: Torna elemento focável por Tab
           VALOR: 0 = ordem natural do HTML
        */
        if (!card.hasAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
        }
        
        /* 
           Evento de teclado
           
           keydown: tecla foi pressionada
           event.key: qual tecla
        */
        card.addEventListener('keydown', function(event) {
            /* 
               Se pressionou Enter OU Space
            */
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                
                /* 
                   Simula clique no link do card
                */
                const link = this.querySelector('.card-link');
                if (link) {
                    link.click();
                    console.log('   ↳ Card ativado por teclado');
                }
            }
        });
    });
    
    console.log('   ✅ Acessibilidade configurada!');
}

/* ==================== FUNÇÕES UTILITÁRIAS ==================== */

/* 
   🛠️ UTILITÁRIOS
   
   Funções auxiliares que podem ser úteis
   Estão aqui como exemplos didáticos
*/

/* 
   ⏱️ DEBOUNCE
   
   O QUE FAZ: Evita executar função muitas vezes seguidas
   
   USO COMUM:
   - Scroll
   - Resize de janela
   - Input de busca
   
   ANALOGIA MÉDICA:
   Como "esperar paciente terminar de falar antes de anotar"
   
   SEM DEBOUNCE: Função executa 100x por segundo
   COM DEBOUNCE: Função executa apenas quando parar
*/

function debounce(func, wait) {
    let timeout;
    
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* 
   EXEMPLO DE USO:
   
   // Sem debounce (pesado)
   window.addEventListener('scroll', myFunction);
   
   // Com debounce (otimizado)
   window.addEventListener('scroll', debounce(myFunction, 250));
*/

/* ==================== TRATAMENTO DE ERROS ==================== */

/* 
   ⚠️ CAPTURA DE ERROS GLOBAIS
   
   O QUE FAZ: Captura erros não tratados
   POR QUÊ: Debug e manutenção
   
   ÚTIL: Durante desenvolvimento
*/

window.addEventListener('error', function(event) {
    console.error('❌ Erro JavaScript:', event.error);
    console.error('   ↳ Arquivo:', event.filename);
    console.error('   ↳ Linha:', event.lineno);
    
    // Aqui poderíamos enviar para sistema de log
});

/* ==================== DEBUG (OPCIONAL) ==================== */

/* 
   🔍 LOGS DE DEBUG
   
   Descomente para ver informações úteis
   
   ÚTIL PARA APRENDER: Ver o que acontece ao clicar
*/

/*
// Mostra TODOS os cliques
document.addEventListener('click', function(event) {
    console.log('🖱️ Clicou em:', event.target);
    console.log('   ↳ Classes:', event.target.className);
    console.log('   ↳ ID:', event.target.id);
});

// Mostra quando rola página
window.addEventListener('scroll', debounce(function() {
    console.log('📜 Scroll:', window.scrollY + 'px');
}, 250));
*/

/* ==================== INFORMAÇÕES DO SISTEMA ==================== */

/* 
   📊 LOGS ÚTEIS
   
   Informações sobre navegador e dispositivo
   Útil para debug
*/

console.log('╔════════════════════════════════════════╗');
console.log('║  📚 Biblioteca de Anestesiologia       ║');
console.log('║  🚀 JavaScript v2.0                    ║');
console.log('╚════════════════════════════════════════╝');
console.log('');
console.log('🌐 Navegador:', navigator.userAgent.split(' ').pop());
console.log('📱 Dispositivo:', /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop');
console.log('📏 Largura:', window.innerWidth + 'px');
console.log('🎨 Cores:', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark Mode' : 'Light Mode');
console.log('');

/* ==================== FIM ==================== */

/* 
   🎓 PRÓXIMOS PASSOS PARA APRENDER:
   
   1. LocalStorage (guardar preferências do usuário)
   2. Fetch API (buscar dados externos)
   3. Promises e Async/Await
   4. Manipulação de formulários
   5. Eventos de drag and drop
   6. Web Components
   
   📖 RECURSOS RECOMENDADOS:
   
   - MDN Web Docs (developer.mozilla.org)
   - JavaScript.info (tutorial completo)
   - FreeCodeCamp (exercícios práticos)
   - Eloquent JavaScript (livro grátis)
   
   💡 DICAS:
   
   - Sempre console.log() para entender o que está acontecendo
   - Use DevTools (F12) para inspecionar elementos
   - Teste cada função isoladamente
   - Leia código de outros projetos open source
*/

console.log('🎉 JavaScript totalmente carregado e funcionando!');
console.log('');

/* ==================== ESTATÍSTICAS ==================== */

/* 
   📊 ESTE ARQUIVO:
   
   - ~550 linhas (incluindo comentários)
   - ~200 linhas de código
   - ~350 linhas de comentários didáticos
   - 4 funcionalidades principais
   - 100% comentado para aprendizado
   
   📝 COMMITS SUGERIDOS:
   
   git add assets/js/main.js
   git commit -m "feat(js): adiciona navegação, animações e acessibilidade"
*/
