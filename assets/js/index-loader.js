/**
 * INDEX-LOADER.JS
 * Carrega e renderiza os cards de especialidades na página inicial
 * Baseado no conceito do dynamic-loader.js
 */

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadEspecialidades();
});

// ============================================
// FUNÇÃO PRINCIPAL: CARREGAR ESPECIALIDADES
// ============================================
async function loadEspecialidades() {
    try {
        // Tenta carregar via fetch (funciona em servidor web)
        const response = await fetch('data/especialidades.json');
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Especialidades carregadas via fetch:', data);
        renderEspecialidades(data.especialidades);
        
    } catch (error) {
        console.warn('⚠️ Fetch falhou, tentando fallback offline...', error);

        // Fallback: Tenta carregar de OFFLINE_DATA (funciona localmente sem servidor)
        if (typeof OFFLINE_ESPECIALIDADES !== 'undefined') {
            console.log('✅ Carregando especialidades do cache offline');
            renderEspecialidades(OFFLINE_ESPECIALIDADES);
        } else {
            console.error('❌ Erro fatal: Dados não encontrados');
            showError(error);
        }
    }
}

// ============================================
// RENDERIZAR ESPECIALIDADES NA PÁGINA
// ============================================
function renderEspecialidades(especialidades) {
    const gridContainer = document.querySelector('.gallery-grid');
    
    if (!gridContainer) {
        console.error('❌ Container .gallery-grid não encontrado no HTML');
        return;
    }

    // Limpa conteúdo atual (loading spinner ou cards hardcoded)
    gridContainer.innerHTML = '';

    // Ordena por ordem (campo "ordem" no JSON)
    const especialidadesOrdenadas = [...especialidades].sort((a, b) => a.ordem - b.ordem);

    // Cria card para cada especialidade
    especialidadesOrdenadas.forEach(esp => {
        const cardHTML = createCardHTML(esp);
        gridContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    console.log(`✅ ${especialidades.length} cards renderizados com sucesso!`);

    // Re-inicializar animações e eventos (se existirem no main.js)
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
    if (typeof initKeyboardNavigation === 'function') {
        initKeyboardNavigation();
    }
}

// ============================================
// CRIAR HTML DO CARD
// ============================================
function createCardHTML(especialidade) {
    /*
     * LÓGICA DE RENDERIZAÇÃO:
     * - Se status = "ativo" → card clicável com link
     * - Se status = "em_breve" → card desabilitado, sem link
     */
    
    const isDisabled = especialidade.status === 'em_breve';
    const cardClass = isDisabled ? 'component-card card-disabled' : 'component-card';
    const ariaDisabled = isDisabled ? 'aria-disabled="true"' : '';

    // Gera HTML das tags
    const tagsHTML = especialidade.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    // Card ATIVO (com link)
    if (!isDisabled) {
        return `
        <!-- ============================================
            CARD - ${especialidade.titulo}
            ============================================ -->
        <article class="${cardClass}">
            <a href="${especialidade.link}" class="card-link" aria-label="Acessar conteúdo sobre ${especialidade.titulo}">
                <div class="card-thumbnail">${especialidade.emoji}</div>
                <div class="card-info">
                    <h3 class="card-title">${especialidade.titulo}</h3>
                    <p class="card-description">
                        ${especialidade.descricao}
                    </p>
                    <div class="card-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </a>
        </article>
        `;
    }

    // Card DESABILITADO (sem link, apenas visual)
    return `
    <!-- ============================================
        CARD - ${especialidade.titulo} (EM BREVE)
        ============================================ -->
    <article class="${cardClass}" ${ariaDisabled}>
        <div class="card-thumbnail">${especialidade.emoji}</div>
        <div class="card-info">
            <h3 class="card-title">${especialidade.titulo}</h3>
            <p class="card-description">
                ${especialidade.descricao}
            </p>
            <div class="card-tags">
                ${tagsHTML}
                <span class="tag tag-coming-soon">Em breve</span>
            </div>
        </div>
    </article>
    `;
}

// ============================================
// MOSTRAR ERRO (se falhar tudo)
// ============================================
function showError(error) {
    const gridContainer = document.querySelector('.gallery-grid');
    
    if (gridContainer) {
        gridContainer.innerHTML = `
        <div class="error-message">
            <h2>⚠️ Erro ao carregar especialidades</h2>
            <p>
                Não foi possível carregar o conteúdo. Verifique sua conexão ou tente recarregar a página.
            </p>
            <p>
                Detalhes técnicos: ${error.message}
            </p>
            <button onclick="location.reload()">
                🔄 Recarregar Página
            </button>
        </div>
        `;
    }
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Filtra especialidades por status
 * Útil para criar seções separadas (ativas vs em breve)
 */
function filtrarPorStatus(especialidades, status) {
    return especialidades.filter(esp => esp.status === status);
}

/**
 * Busca especialidade por ID
 */
function buscarPorId(especialidades, id) {
    return especialidades.find(esp => esp.id === id);
}

/**
 * Conta total de especialidades por status
 */
function contarPorStatus(especialidades) {
    return {
        ativas: especialidades.filter(e => e.status === 'ativo').length,
        emBreve: especialidades.filter(e => e.status === 'em_breve').length,
        total: especialidades.length
    };
}

// ============================================
// EXPORTAR PARA USO GLOBAL (se necessário)
// ============================================
// Caso queira acessar essas funções de outros scripts
window.especialidadesAPI = {
    filtrarPorStatus,
    buscarPorId,
    contarPorStatus
};