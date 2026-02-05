// ========================================
// NAVEGAÇÃO SUAVE E ATUALIZAÇÃO DO MENU
// Biblioteca de Anestesiologia
// ========================================

/**
 * FUNÇÃO 1: NAVEGAÇÃO SUAVE AO CLICAR
 * 
 * O QUE FAZ:
 * Quando você clica em um link da sidebar, rola suavemente até a seção
 * 
 * COMO FUNCIONA:
 * 1. Detecta clique no link
 * 2. Previne pulo instantâneo
 * 3. Rola suavemente até a seção
 * 4. Marca link como ativo
 */
document.querySelectorAll('.sidebar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão (pular instantaneamente)
        e.preventDefault();
        
        // Pega o ID da seção alvo (ex: "#primeira-secao")
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Se a seção existe, rola até ela
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',  // Rolagem suave
                block: 'start'       // Alinha no início
            });
            
            // Remove a classe 'active' de todos os links
            document.querySelectorAll('.sidebar-nav a').forEach(a => {
                a.classList.remove('active');
            });
            
            // Adiciona 'active' ao link clicado
            this.classList.add('active');
        }
    });
});

/**
 * FUNÇÃO 2: ATUALIZA MENU CONFORME VOCÊ ROLA (SCROLL SPY)
 * 
 * O QUE FAZ:
 * Detecta qual seção está visível e marca o link correspondente
 * 
 * MELHORIAS:
 * - Adiciona throttle para performance
 * - Funciona melhor em telas diferentes
 */

// Variável para controlar throttle (evita executar em todo pixel)
let ticking = false;

window.addEventListener('scroll', () => {
    // Se já está processando, aguarda
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveSection();
            ticking = false;
        });
        
        ticking = true;
    }
});

/**
 * FUNÇÃO AUXILIAR: updateActiveSection()
 * 
 * Atualiza o link ativo baseado na posição do scroll
 */
function updateActiveSection() {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    // Para cada seção, verifica se está visível
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Se você rolou até essa seção (com margem de 200px)
        // 200px = espaço para navbar + tolerância
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    // Atualiza os links da sidebar
    document.querySelectorAll('.sidebar-nav a').forEach(a => {
        a.classList.remove('active');
        
        // Se o link aponta para a seção atual, marca como active
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
}

/**
 * FUNÇÃO 3: INICIALIZAÇÃO
 * 
 * Executa quando a página carrega
 */
document.addEventListener('DOMContentLoaded', () => {
    // Atualiza os links na posição inicial
    updateActiveSection();
    
    // Log para debug (opcional - pode remover)
    console.log('✅ Script de navegação carregado!');
    console.log(`📊 ${document.querySelectorAll('.section').length} seções detectadas`);
    console.log(`🔗 ${document.querySelectorAll('.sidebar-nav a').length} links na sidebar`);
});

// ========================================
// FIM DO SCRIPT
// ========================================