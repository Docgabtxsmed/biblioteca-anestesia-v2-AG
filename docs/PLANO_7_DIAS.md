# 📅 Plano Detalhado - 7 Dias (ATUALIZADO)

## 🎯 Princípio: Cada dia = 1 funcionalidade COMPLETA

**Metodologia:** Sistema funcional do início ao fim (HTML + CSS + JS + dados)

---

## 📊 Visão Geral

| Dia | Foco Principal | Tempo | Resultado |
|-----|----------------|-------|-----------|
| 1 | ✅ Estrutura + Página Principal | 2h | Index funcional + CSS modular |
| 2 | 📍 Páginas Secundárias + Resumos | 2-3h | Sistema de resumos COMPLETO |
| 3 | Sistema de Questões | 2-3h | Questões COMPLETAS (2 temas) |
| 4 | Sistema de Flashcards | 2-3h | Flashcards COMPLETOS (2 temas) |
| 5 | Expansão de Conteúdo | 2-3h | +4 especialidades em todos sistemas |
| 6 | JSONs + Revisão JS | 3-4h | Dados completos + JS dominado ⭐ |
| 7 | Testes + Docs + Deploy | 2h | Projeto finalizado |

---

## ✅ **DIA 1 - CONCLUÍDO**

### Foco: Página Principal + Estrutura Base

**O que foi feito:**
```
✅ Estrutura de pastas organizada
✅ index.html (página principal)
✅ CSS modular (base.css, layout.css, components.css, utilities.css)
✅ main.js
✅ Documentação inicial
✅ Git inicializado e commitado
```

**Resultado:**
- Página principal 100% funcional
- Base sólida para continuar
- CSS modular pronto para reutilizar

---

## 📍 **DIA 2 - HOJE**

### Foco: Páginas Secundárias + Sistema de Resumos COMPLETO

### 🎯 Objetivo do Dia:
```
Sistema de RESUMOS 100% funcional:
✅ Template base reutilizável
✅ CSS específico (style-resumos.css)
✅ JS específico (script-resumos.js)
✅ 2 especialidades funcionando (Cardiaca + Transplante)
```

### 📋 Tarefas (2-3h):

#### **ETAPA 1: Template Base (45 min)**
**Arquivo:** `pages/template.html`

**O que vai ter:**
```html
- Header com logo clicável
- Estrutura semântica
- Seções organizadas
- Footer
- Links para CSS/JS corretos
- Comentários explicativos
```

**Por quê:** Base reutilizável para TODAS as páginas secundárias

---

#### **ETAPA 2: CSS de Resumos (30 min)**
**Arquivo:** `assets/css/style-resumos.css`

**O que vai ter:**
```css
- Layout de 2 colunas (sidebar + conteúdo)
- Sidebar fixa com navegação
- Estilos de seções e subseções
- Highlight boxes (info, warning, success, danger)
- Responsividade mobile
```

**Por quê:** Estilos específicos para páginas de resumo científico

---

#### **ETAPA 3: JS de Resumos (30 min)**
**Arquivo:** `assets/js/script-resumos.js`

**O que vai ter:**
```javascript
- Navegação suave ao clicar
- Scroll tracking (atualiza menu)
- Highlight da seção ativa
- Smooth scroll
```

**Por quê:** Interatividade e navegação fluida nos resumos

---

#### **ETAPA 4: Página Cardiaca (30 min)**
**Arquivo:** `pages/resumos/cardiaca.html`

**O que fazer:**
```
1. Copiar template.html
2. Adicionar conteúdo de cirurgia cardíaca
3. Ajustar links relativos (../../)
4. Testar no navegador
```

---

#### **ETAPA 5: Página Transplante (30 min)**
**Arquivo:** `pages/resumos/transplante.html`

**O que fazer:**
```
1. Copiar template.html
2. Adicionar conteúdo de transplante hepático
3. Ajustar links relativos
4. Testar no navegador
```

---

#### **ETAPA 6: Atualizar Links no Index (15 min)**

**O que fazer:**
```
1. Abrir index.html
2. Atualizar href dos cards:
   - Cardiaca → pages/resumos/cardiaca.html
   - Transplante → pages/resumos/transplante.html
3. Testar navegação
```

---

### ✅ Checklist do Dia 2:
```
[ ] template.html criado e comentado
[ ] style-resumos.css completo
[ ] script-resumos.js funcional
[ ] cardiaca.html funcionando
[ ] transplante.html funcionando
[ ] Links no index.html atualizados
[ ] Testado navegação completa
[ ] Commit: "feat(resumos): implementa sistema completo de resumos"
```

---

## 📅 **DIA 3 - Sistema de Questões**

### Foco: Sistema de Questões Comentadas COMPLETO

### 🎯 Objetivo:
```
Sistema de QUESTÕES 100% funcional:
✅ Interface HTML (questoes/index.html)
✅ CSS específico (style-questoes.css)
✅ JS com lógica de questões (script-questoes.js)
✅ JSON de dados (cardiaca.json + transplante.json)
✅ 2 especialidades funcionando
```

### 📋 Estrutura Final:
```
pages/questoes/
└── index.html (interface de questões)

data/questoes/
├── cardiaca.json (questões de cardiaca)
└── transplante.json (questões de transplante)

assets/css/
└── style-questoes.css (estilos específicos)

assets/js/
└── script-questoes.js (lógica de questões)
```

### 📋 Tarefas (2-3h):

#### **ETAPA 1: Interface HTML (45 min)**
```
- Criar pages/questoes/index.html
- Header + contador de progresso
- Área de exibição da questão
- Alternativas clicáveis
- Botões de navegação (anterior/próximo)
- Área de feedback (resposta correta/incorreta)
- Explicação detalhada
```

#### **ETAPA 2: CSS (30 min)**
```
- Layout responsivo
- Estilos de alternativas
- Feedback visual (verde = correto, vermelho = errado)
- Transições suaves
- Progress bar
```

#### **ETAPA 3: JavaScript (60 min)**
```
- Carregar JSON do tema
- Renderizar questão
- Detectar clique em alternativa
- Mostrar feedback
- Navegação entre questões
- Contador de progresso
- Persistir respostas do usuário
```

#### **ETAPA 4: JSON de Dados (30 min)**
```
- Criar data/questoes/cardiaca.json
- Criar data/questoes/transplante.json
- Estrutura:
  {
    "titulo": "Cirurgia Cardíaca",
    "questoes": [
      {
        "enunciado": "Pergunta...",
        "alternativas": [...],
        "correta": 2,
        "explicacao": "..."
      }
    ]
  }
```

### ✅ Checklist do Dia 3:
```
[ ] pages/questoes/index.html criado
[ ] style-questoes.css completo
[ ] script-questoes.js funcional
[ ] cardiaca.json criado (mínimo 5 questões)
[ ] transplante.json criado (mínimo 5 questões)
[ ] Testado: carregar tema, responder, navegar
[ ] Links no index.html atualizados
[ ] Commit: "feat(questoes): implementa sistema completo de questões"
```

---

## 📅 **DIA 4 - Sistema de Flashcards**

### Foco: Sistema de Flashcards COMPLETO

### 🎯 Objetivo:
```
Sistema de FLASHCARDS 100% funcional:
✅ Interface HTML (flashcards/index.html)
✅ CSS específico (style-flashcards.css)
✅ JS com lógica de flashcards (script-flashcards.js)
✅ JSON de dados (cardiaca.json + transplante.json)
✅ 2 especialidades funcionando
```

### 📋 Estrutura Final:
```
pages/flashcards/
└── index.html (interface de flashcards)

data/flashcards/
├── cardiaca.json
└── transplante.json

assets/css/
└── style-flashcards.css

assets/js/
└── script-flashcards.js
```

### 📋 Tarefas (2-3h):

#### **ETAPA 1: Interface HTML (45 min)**
```
- Criar pages/flashcards/index.html
- Header + contador
- Card (frente/verso)
- Botões de dificuldade (Fácil/Médio/Difícil/Repetir)
- Progress bar
- Estatísticas da sessão
```

#### **ETAPA 2: CSS (30 min)**
```
- Efeito de flip (frente → verso)
- Animações suaves
- Cores por dificuldade
- Responsividade
```

#### **ETAPA 3: JavaScript (60 min)**
```
- Carregar JSON do tema
- Renderizar card
- Flip ao clicar
- Embaralhar cards
- Algoritmo de repetição espaçada (básico)
- Estatísticas
- Finalização da sessão
```

#### **ETAPA 4: JSON de Dados (30 min)**
```
- Criar data/flashcards/cardiaca.json
- Criar data/flashcards/transplante.json
- Estrutura:
  [
    {
      "front": "Pergunta/conceito",
      "back": "Resposta/explicação"
    }
  ]
```

### ✅ Checklist do Dia 4:
```
[ ] pages/flashcards/index.html criado
[ ] style-flashcards.css completo
[ ] script-flashcards.js funcional
[ ] cardiaca.json criado (mínimo 10 cards)
[ ] transplante.json criado (mínimo 10 cards)
[ ] Testado: flip, navegação, estatísticas
[ ] Links no index.html atualizados
[ ] Commit: "feat(flashcards): implementa sistema completo de flashcards"
```

---

## 📅 **DIA 5 - Expansão de Conteúdo**

### Foco: Adicionar +4 Especialidades em TODOS os Sistemas

### 🎯 Objetivo:
```
Expandir conteúdo para 6 especialidades totais:
✅ Cardiaca (já feito)
✅ Transplante (já feito)
✅ Cirurgia Torácica
✅ Sistema Endócrino
✅ Anestesia Geriátrica
✅ Dor e Analgesia
```

### 📋 Tarefas (2-3h):

#### **Para cada especialidade (30-40 min cada):**

**1. Resumo:**
```
- Copiar template.html
- Adicionar conteúdo
- Salvar em pages/resumos/[especialidade].html
```

**2. Questões:**
```
- Criar data/questoes/[especialidade].json
- Adicionar mínimo 5 questões
```

**3. Flashcards:**
```
- Criar data/flashcards/[especialidade].json
- Adicionar mínimo 10 cards
```

**4. Atualizar Links:**
```
- Atualizar index.html (href dos cards)
```

### ✅ Checklist do Dia 5:
```
[ ] Torácica: resumo + questões + flashcards
[ ] Endócrino: resumo + questões + flashcards
[ ] Geriátrica: resumo + questões + flashcards
[ ] Dor: resumo + questões + flashcards
[ ] Todos os links atualizados no index.html
[ ] Testado navegação completa
[ ] Commit: "feat(conteudo): adiciona 4 novas especialidades"
```

---

## ⭐ **DIA 6 - JSONs Finais + REVISÃO PROFUNDA DE JAVASCRIPT**

### 🎯 Objetivo Duplo:
```
1. Completar todos os JSONs restantes (2 especialidades)
2. REVISAR e DOMINAR JavaScript (foco especial) ⭐
```

### 📋 PARTE 1: JSONs Finais (1h)

#### Especialidades Restantes:
```
✅ Cirurgia Plástica
✅ Marcapasso/CDI
```

**Tarefas:**
```
Para cada especialidade:
[ ] Criar resumo HTML
[ ] Criar questoes JSON (5 questões)
[ ] Criar flashcards JSON (10 cards)
[ ] Testar integração
```

---

### 📋 PARTE 2: REVISÃO PROFUNDA DE JAVASCRIPT (2-3h) ⭐

#### 🎓 **Por que este dia é especial:**
```
JavaScript é sua principal deficiência
Este dia vai CONSOLIDAR todo o JS usado no projeto
Você vai ENTENDER cada linha de código
```

---

#### **MÓDULO 1: Fundamentos ES6+ (30 min)**

##### **1.1 Variáveis (const vs let vs var)**
```javascript
// ❌ EVITAR (var é antigo)
var idade = 28;

// ✅ USAR (const para valores que não mudam)
const nome = "Gabriel";

// ✅ USAR (let para valores que mudam)
let contador = 0;
contador++; // OK com let
```

**Analogia médica:**
- `const` = Tipo sanguíneo (não muda)
- `let` = Pressão arterial (varia)
- `var` = Método antigo (não usar mais)

---

##### **1.2 Arrow Functions**
```javascript
// ❌ Função antiga (ES5)
function somar(a, b) {
  return a + b;
}

// ✅ Arrow function (ES6)
const somar = (a, b) => a + b;

// ✅ Com corpo de função
const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
};
```

**Analogia médica:**
```javascript
// Como calcular dose de medicação
const calcularDose = (peso, mgPorKg) => peso * mgPorKg;
```

---

##### **1.3 Template Literals (interpolação)**
```javascript
// ❌ Concatenação antiga
const mensagem = "Olá, " + nome + "!";

// ✅ Template literal
const mensagem = `Olá, ${nome}!`;
const relatorio = `Paciente: ${nome}, Idade: ${idade} anos`;
```

---

##### **1.4 Destructuring**
```javascript
// Array
const [primeiro, segundo] = [1, 2, 3];

// Objeto
const paciente = { nome: "João", idade: 45 };
const { nome, idade } = paciente;

// Útil em funções
const exibirPaciente = ({ nome, idade }) => {
  console.log(`${nome} tem ${idade} anos`);
};
```

---

#### **MÓDULO 2: DOM Manipulation (45 min)**

##### **2.1 Selecionar Elementos**
```javascript
// Por ID (retorna 1 elemento)
const card = document.getElementById('card-1');

// Por classe (retorna NodeList)
const cards = document.querySelectorAll('.component-card');

// Por seletor CSS (retorna primeiro)
const primeiroCard = document.querySelector('.component-card');
```

---

##### **2.2 Manipular Conteúdo**
```javascript
// Alterar texto
elemento.textContent = "Novo texto";

// Alterar HTML
elemento.innerHTML = "<strong>Texto em negrito</strong>";

// Alterar atributo
elemento.setAttribute('href', 'nova-pagina.html');

// Adicionar/remover classes
elemento.classList.add('ativo');
elemento.classList.remove('inativo');
elemento.classList.toggle('expandido');
```

---

##### **2.3 Criar Elementos**
```javascript
// Criar elemento
const novoCard = document.createElement('div');
novoCard.className = 'component-card';
novoCard.textContent = 'Novo card';

// Adicionar ao DOM
const container = document.querySelector('.gallery-grid');
container.appendChild(novoCard);
```

---

#### **MÓDULO 3: Eventos (30 min)**

##### **3.1 Event Listeners**
```javascript
// Adicionar listener
botao.addEventListener('click', () => {
  console.log('Clicou!');
});

// Com função nomeada
const handleClick = (event) => {
  console.log('Elemento clicado:', event.target);
};
botao.addEventListener('click', handleClick);

// Remover listener
botao.removeEventListener('click', handleClick);
```

---

##### **3.2 Tipos de Eventos Comuns**
```javascript
// Click
elemento.addEventListener('click', handleClick);

// Mouse
elemento.addEventListener('mouseenter', handleMouseEnter);
elemento.addEventListener('mouseleave', handleMouseLeave);

// Teclado
document.addEventListener('keydown', handleKeyPress);

// Formulário
form.addEventListener('submit', handleSubmit);

// Scroll
window.addEventListener('scroll', handleScroll);
```

---

#### **MÓDULO 4: Async/Await e Fetch (45 min)**

##### **4.1 Promises (promessas)**
```javascript
// Promise = promessa de algo que vai acontecer
const promessa = fetch('dados.json');

// .then() quando der certo
promessa.then(resposta => console.log(resposta));

// .catch() quando der erro
promessa.catch(erro => console.error(erro));
```

**Analogia médica:**
```
Promise = solicitar exame de sangue
.then() = resultado chegou (sucesso)
.catch() = laboratório fechou (erro)
```

---

##### **4.2 Async/Await (forma moderna)**
```javascript
// ❌ Forma antiga (Promises)
fetch('dados.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// ✅ Forma moderna (Async/Await)
const carregarDados = async () => {
  try {
    const response = await fetch('dados.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
  }
};
```

---

##### **4.3 Exemplo Real do Projeto**
```javascript
// Carregar questões de um tema
const carregarQuestoes = async (tema) => {
  try {
    // 1. Buscar arquivo JSON
    const response = await fetch(`data/questoes/${tema}.json`);
    
    // 2. Verificar se deu certo
    if (!response.ok) {
      throw new Error('Arquivo não encontrado');
    }
    
    // 3. Converter para objeto JavaScript
    const dados = await response.json();
    
    // 4. Retornar dados
    return dados;
    
  } catch (erro) {
    console.error('Erro ao carregar questões:', erro);
    return null;
  }
};

// Usar a função
const questoes = await carregarQuestoes('cardiaca');
console.log(questoes);
```

---

#### **MÓDULO 5: Revisar JavaScript do Projeto (60 min)**

##### **5.1 script-questoes.js**
```javascript
// Abrir arquivo e revisar linha por linha:

// Variáveis globais
let questoesData = [];  // Array de questões
let indexAtual = 0;     // Qual questão estamos vendo
let respostasUsuario = []; // Respostas que o usuário deu

// Função para carregar dados
const carregarDados = async (tema) => {
  // [revisar código]
};

// Função para renderizar questão
const renderizarQuestao = (index) => {
  // [revisar código]
};

// Função para verificar resposta
const verificarResposta = (alternativa) => {
  // [revisar código]
};
```

**Tarefa:**
```
[ ] Abrir script-questoes.js
[ ] Adicionar comentários em CADA função
[ ] Explicar o que cada bloco faz
[ ] Testar modificando valores
```

---

##### **5.2 script-flashcards.js**
```javascript
// Revisar:
[ ] Estrutura de dados (como cards são armazenados)
[ ] Lógica de flip (virar card)
[ ] Algoritmo de embaralhamento
[ ] Controle de progresso
```

---

##### **5.3 script-resumos.js**
```javascript
// Revisar:
[ ] Navegação suave (smooth scroll)
[ ] Detectar scroll e atualizar menu
[ ] Event listeners
```

---

#### **EXERCÍCIOS PRÁTICOS (30 min)**

##### **Exercício 1: Modificar Cor ao Clicar**
```javascript
// Criar arquivo: assets/js/exercicio1.js

// Tarefa: Ao clicar em um card, mude sua cor de fundo

const cards = document.querySelectorAll('.component-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Seu código aqui
  });
});
```

---

##### **Exercício 2: Contador de Cliques**
```javascript
// Tarefa: Mostrar quantas vezes um botão foi clicado

let contador = 0;
const botao = document.querySelector('#meu-botao');
const display = document.querySelector('#contador-display');

botao.addEventListener('click', () => {
  // Seu código aqui
});
```

---

##### **Exercício 3: Carregar e Exibir JSON**
```javascript
// Tarefa: Carregar um JSON e exibir na tela

const carregarEExibir = async () => {
  // 1. Carregar JSON
  // 2. Iterar pelos dados
  // 3. Criar elementos no DOM
  // 4. Exibir
};
```

---

### ✅ Checklist do Dia 6:
```
PARTE 1: JSONs
[ ] Cirurgia Plástica: resumo + questões + flashcards
[ ] Marcapasso/CDI: resumo + questões + flashcards

PARTE 2: JavaScript
[ ] Revisado fundamentos ES6+ (const, let, arrow functions, template literals)
[ ] Revisado DOM manipulation (querySelector, innerHTML, classList)
[ ] Revisado eventos (addEventListener)
[ ] Revisado async/await e fetch
[ ] Revisado script-questoes.js (linha por linha)
[ ] Revisado script-flashcards.js (linha por linha)
[ ] Revisado script-resumos.js (linha por linha)
[ ] Feito 3 exercícios práticos
[ ] Adicionado comentários em TODOS os arquivos JS

[ ] Commit 1: "feat(conteudo): adiciona especialidades finais"
[ ] Commit 2: "docs(js): adiciona comentários explicativos em todo JavaScript"
```

---

## 📅 **DIA 7 - Finalização**

### Foco: Testes + Documentação + Deploy

### 🎯 Objetivo:
```
✅ Projeto 100% funcional
✅ Documentação completa
✅ Publicado online (GitHub Pages)
```

### 📋 Tarefas (2h):

#### **ETAPA 1: Testes Completos (45 min)**
```
[ ] Testar TODAS as páginas
[ ] Testar navegação (todos os links)
[ ] Testar sistemas (resumos, questões, flashcards)
[ ] Testar em diferentes navegadores (Chrome, Firefox)
[ ] Testar responsividade (mobile)
[ ] Listar bugs encontrados
[ ] Corrigir bugs
```

#### **ETAPA 2: Documentação (45 min)**

**README.md:**
```markdown
# 📚 Biblioteca de Anestesiologia

## 🎯 Sobre
Plataforma educacional com:
- Resumos científicos
- Questões comentadas
- Flashcards

## 🚀 Como usar
[instruções]

## 📁 Estrutura
[explicar estrutura de pastas]

## 🛠️ Tecnologias
- HTML5
- CSS3 (modular)
- JavaScript ES6+

## 📄 Licença
MIT
```

**ARCHITECTURE.md:**
```markdown
# Arquitetura do Projeto

## Estrutura de Pastas
[explicar cada pasta]

## CSS Modular
[explicar módulos]

## JavaScript
[explicar cada arquivo JS]
```

#### **ETAPA 3: Deploy GitHub Pages (30 min)**

**Passos:**
```bash
# 1. Garantir que está tudo commitado
git status
git add .
git commit -m "docs: finaliza documentação"

# 2. Push para GitHub
git push origin main

# 3. Configurar GitHub Pages
# (via interface do GitHub: Settings > Pages > Source: main branch)

# 4. Aguardar deploy (2-5 min)

# 5. Acessar site online!
```

### ✅ Checklist do Dia 7:
```
[ ] Todos os sistemas testados
[ ] Bugs corrigidos
[ ] README.md completo
[ ] ARCHITECTURE.md criado
[ ] CHANGELOG.md atualizado
[ ] Push para GitHub
[ ] GitHub Pages configurado
[ ] Site acessível online
[ ] Commit final: "docs: finaliza projeto v2"
```

---

## 🎯 Resultado Final

### Ao final dos 7 dias você terá:

**📚 Conteúdo:**
```
✅ 8 especialidades completas
✅ Sistema de resumos científicos
✅ Sistema de questões comentadas
✅ Sistema de flashcards
✅ Navegação fluida
```

**💻 Código:**
```
✅ HTML5 semântico
✅ CSS modular (fácil manutenção)
✅ JavaScript ES6+ (comentado e compreendido)
✅ Estrutura escalável
```

**📖 Conhecimento:**
```
✅ Domínio de HTML5
✅ CSS avançado (Grid, Flexbox, variáveis)
✅ JavaScript ES6+ (DOMINADO) ⭐
✅ Git workflow
✅ Boas práticas de código
```

**🌐 Online:**
```
✅ Projeto publicado (GitHub Pages)
✅ Acessível de qualquer lugar
✅ Compartilhável com colegas
✅ Portfólio de desenvolvedor
```

---

## 🎓 Lições Aprendidas

### Por que essa estrutura funciona?

**1. Foco em Funcionalidades:**
```
Cada dia = algo 100% PRONTO
Você vê resultado imediato
Motivação aumenta
```

**2. Aprendizado Ativo:**
```
Não apenas copiar código
ENTENDER cada linha
Modificar e experimentar
```

**3. Revisão de JS (Dia 6):**
```
Consolida TODO o JavaScript usado
Você domina, não apenas usa
Base para projetos futuros
```

**4. Analogias Médicas:**
```
Conceitos de programação explicados
com termos que você já conhece
Aprendizado mais rápido e eficaz
```

---

## 📌 Dicas Importantes

### Durante a Semana:

✅ **Não pule etapas** - Cada dia tem propósito
✅ **Teste constantemente** - Pequenos testes evitam grandes problemas
✅ **Commit frequente** - Salve progresso regularmente
✅ **Peça ajuda** - Dúvidas são normais e bem-vindas
✅ **Celebre vitórias** - Cada funcionalidade completa é uma conquista

### Se der erro:

1. **Não desista** - Erros são parte do aprendizado
2. **Leia a mensagem** - Console.log é seu amigo
3. **Google o erro** - Provavelmente alguém já teve
4. **DevTools** - F12 é essencial
5. **Peça ajuda** - Com a mensagem de erro exata

---

## 🚀 Bora começar!

**Hoje é DIA 2!**

Foco: **Páginas Secundárias + Sistema de Resumos COMPLETO**

Pronto para a **ETAPA 1** (Template Base)?

Vou te guiar passo a passo! 💪