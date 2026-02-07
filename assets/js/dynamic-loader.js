/**
 * DYNAMIC-LOADER.JS
 * Carrega conteúdo das páginas secundárias via JSON
 */

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const pageId = params.get('page');

    if (pageId) {
        loadPageData(pageId);
    } else {
        console.error('Nenhum ID de página fornecido na URL.');
        // Opcional: Redirecionar para home ou mostrar erro
    }
});

async function loadPageData(pageId) {
    try {
        // Tenta carregar via fetch (Funciona em servidor web)
        const response = await fetch(`../data/pages/${pageId}.json`);
        if (!response.ok) throw new Error(`Erro HTTP! status: ${response.status}`);

        const data = await response.json();
        renderPage(data);
    } catch (error) {
        console.warn('Fetch falhou, tentando fallback offline...', error);

        // Fallback: Tenta carregar de OFFLINE_DATA (Funciona localmente sem server)
        if (typeof OFFLINE_DATA !== 'undefined' && OFFLINE_DATA[pageId]) {
            console.log('Carregando dados do cache offline for:', pageId);
            renderPage(OFFLINE_DATA[pageId]);
        } else {
            console.error('Erro fatal: Dados não encontrados nem via fetch nem offline.');
            document.querySelector('main').innerHTML = `
                <div class="container" style="text-align: center; padding: 50px;">
                    <h1>Ops!</h1>
                    <p>Não foi possível carregar o conteúdo solicitado.</p>
                    <p style="font-size: 0.9em; color: #666;">Erro: ${error.message}</p>
                    <a href="../index.html" class="back-link">Voltar ao início</a>
                </div>
            `;
        }
    }
}

function renderPage(data) {
    // 1. SEO & Head
    document.title = data.seo.title;
    updateMeta('description', data.seo.description);
    updateMeta('keywords', data.seo.keywords);

    // Schema.org update (opcional, mais complexo, mas boa prática)
    updateSchema(data.seo.schema);

    // 2. Header & Navbar
    const navLogoText = document.querySelector('#nav-logo-text');
    if (navLogoText) navLogoText.textContent = data.header.navbarTitle;

    const pageTitle = document.querySelector('#page-title');
    if (pageTitle) pageTitle.textContent = data.header.pageTitle;

    const pageSubtitle = document.querySelector('#page-subtitle');
    if (pageSubtitle) pageSubtitle.textContent = data.header.pageSubtitle;

    // 3. Cards Grid
    const gridContainer = document.querySelector('.gallery-grid');
    if (gridContainer) {
        gridContainer.innerHTML = ''; // Limpa conteúdo atual

        data.cards.forEach(card => {
            const cardHTML = createCardHTML(card, data.id);
            gridContainer.insertAdjacentHTML('beforeend', cardHTML);
        });

        // Re-inicializar animações e eventos se necessário (do script-secondary.js)
        if (typeof initScrollAnimations === 'function') initScrollAnimations();
        if (typeof initKeyboardNavigation === 'function') initKeyboardNavigation();
        if (typeof initDisabledCards === 'function') initDisabledCards();
    }
}

function updateMeta(name, content) {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

function updateSchema(schemaData) {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
        try {
            const json = JSON.parse(script.textContent);
            json.name = schemaData.name;
            json.description = schemaData.description;
            script.textContent = JSON.stringify(json, null, 2);
        } catch (e) {
            console.error("Erro ao atualizar schema:", e);
        }
    }
}

function createCardHTML(card, pageId) {
    const isDisabled = card.disabled ? 'card-disabled' : '';
    const ariaDisabled = card.disabled ? 'aria-disabled="true"' : '';
    
    let linkHref = card.disabled ? '#' : card.link;

    // Auto-gera link para questões E flashcards
    if (!card.disabled && card.link === 'auto') {
        if (card.type === 'questoes') {
            linkHref = `questoes/questoes.html?tema=${pageId}`;
        } else if (card.type === 'flashcard') {
            linkHref = `flashcards/flashcards.html?tema=${pageId}`;
        }
    }

    // Adiciona origem automaticamente
    if (!card.disabled && (card.type === 'questoes' || card.type === 'flashcard')) {
        const currentPage = window.location.href.split('/').pop();
        const separator = linkHref.includes('?') ? '&' : '?';
        linkHref = `${linkHref}${separator}origem=${encodeURIComponent(currentPage)}`;
    }
    
    const linkLabel = `Acessar ${card.title}`;
    const tagsHTML = card.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    return `
    <article class="component-card ${isDisabled}" ${ariaDisabled}>
        <a href="${linkHref}" class="card-link" aria-label="${linkLabel}">
            <div class="card-thumbnail">${card.thumbnail}</div>
            <div class="card-info">
                <h3 class="card-title">${card.title}</h3>
                <p class="card-description">${card.description}</p>
                <div class="card-tags">
                    ${tagsHTML}
                </div>
            </div>
        </a>
    </article>
    `;
}
