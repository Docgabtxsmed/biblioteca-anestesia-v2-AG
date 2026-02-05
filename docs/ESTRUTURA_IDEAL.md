# ✨ Estrutura Ideal do Projeto

## Como Vai Ficar (Organizado)
```
📁 bibliotec_anestesiologia_v2/
│
├── 📄 index.html ✅ (Página inicial - RAIZ)
├── 📄 style.css ✅ (CSS orquestrador - RAIZ)
├── 📄 README.md ✅ (Documentação principal)
├── 📄 LICENSE ✅ (Licença MIT)
├── 📄 .gitignore ✅ (O que Git ignora)
│
├── 📁 assets/ (Recursos estáticos)
│   │
│   ├── 📁 css/ (CSS Modular)
│   │   ├── base.css (Reset, variáveis, tipografia)
│   │   ├── layout.css (Grid, containers, navbar)
│   │   ├── components.css (Cards, botões, etc)
│   │   └── utilities.css (Classes utilitárias)
│   │
│   ├── 📁 js/ (JavaScript Organizado)
│   │   ├── main.js (Script principal/comum)
│   │   ├── questoes.js (Sistema de questões)
│   │   ├── resumos.js (Funcionalidades dos resumos)
│   │   └── flashcards.js (Sistema de flashcards)
│   │
│   └── 📁 images/ (Todas as imagens)
│       └── logo.jpg
│
├── 📁 data/ (Dados estruturados)
│   ├── 📁 questoes/ (JSONs de questões)
│   │   ├── cardiaca.json
│   │   ├── transplante.json
│   │   └── ...
│   │
│   ├── 📁 flashcards/ (JSONs de flashcards)
│   └── 📁 resumos/ (JSONs de metadados)
│
├── 📁 pages/ (Páginas HTML)
│   │
│   ├── 📁 questoes/
│   │   └── index.html (Interface de questões)
│   │
│   ├── 📁 resumos/
│   │   ├── template.html (Template base)
│   │   ├── cardiaca.html
│   │   ├── transplante.html
│   │   ├── toracica.html
│   │   └── ...
│   │
│   └── 📁 flashcards/
│       └── index.html (Interface de flashcards)
│
└── 📁 docs/ (Documentação técnica)
    ├── ARCHITECTURE.md (Arquitetura do projeto)
    ├── ROADMAP.md (Plano futuro)
    ├── CONTRIBUTING.md (Guia de contribuição)
    └── CHANGELOG.md (Histórico de mudanças)
```

## 📐 Princípios de Organização

### 1. Separação por Tipo
```
assets/ → Tudo que é "recurso" (CSS, JS, imagens)
data/ → Tudo que é "conteúdo" (JSON)
pages/ → Tudo que é "página" (HTML)
docs/ → Tudo que é "documentação" (MD)
```

### 2. Hierarquia Clara
```
Raiz → Só arquivos essenciais (index, README, LICENSE)
Subpastas → Agrupamento lógico
```

### 3. Nomenclatura Consistente
```
✅ Tudo em minúsculas
✅ Palavras separadas por hífen (kebab-case)
✅ Nomes descritivos
```

### 4. Modularidade
```
CSS → Separado em 4 módulos com responsabilidades únicas
JS → Separado por funcionalidade
HTML → Templates e páginas organizadas
```

## 🎯 Benefícios da Estrutura Ideal

### Para Desenvolvimento:
```
✅ Fácil encontrar qualquer arquivo
✅ Adicionar novo conteúdo é intuitivo
✅ CSS e JS não conflitam
✅ Manutenção simplificada
```

### Para Colaboração:
```
✅ Outros desenvolvedores entendem imediatamente
✅ Estrutura padrão da indústria
✅ README explica tudo
```

### Para Escalabilidade:
```
✅ Adicionar nova funcionalidade = nova pasta em pages/
✅ Adicionar novo tema = novo JSON em data/
✅ Crescimento organizado
```

### Para Aprendizado:
```
✅ Você entende onde cada coisa vai
✅ Padrões claros para seguir
✅ Base sólida para projetos futuros
```