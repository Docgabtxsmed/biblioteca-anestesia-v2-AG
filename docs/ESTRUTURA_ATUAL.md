# 📊 Estrutura Atual do Projeto

## Como Está Hoje (Desorganizado)
```
📁 bibliotec_anestesiologia/
│
├── 📄 index.html ✅ (OK na raiz)
├── 📄 style.css ✅ (OK na raiz, mas importa CSS que não existe)
├── 📄 questoes-template.js ❌ (deveria estar em js/)
├── 📄 script-resumo.js ❌ (deveria estar em js/)
├── 📄 script-secondary.js ❌ (deveria estar em js/)
│
├── 📄 cardiaca.html ❌ (deveria estar em pages/resumos/)
├── 📄 transplante.html ❌ (deveria estar em pages/resumos/)
├── 📄 toracica.html ❌ (deveria estar em pages/resumos/)
├── 📄 dor.html ❌ (deveria estar em pages/resumos/)
├── 📄 endocrino.html ❌ (deveria estar em pages/resumos/)
├── 📄 geriatria.html ❌ (deveria estar em pages/resumos/)
├── 📄 hipotermia.html ❌ (deveria estar em pages/resumos/)
├── 📄 plastica.html ❌ (deveria estar em pages/resumos/)
├── 📄 vascular.html ❌ (deveria estar em pages/resumos/)
├── 📄 cdi-marcapasso.html ❌ (deveria estar em pages/resumos/)
│
├── 📄 template-secondary.html ⚠️ (template genérico)
├── 📄 flashcards.html ❌ (deveria estar em pages/flashcards/)
├── 📄 medtech-logo.jpg ❌ (deveria estar em images/)
│
├── 📁 css/ ⚠️ (vazia ou com CSS não usado?)
├── 📁 js/ ⚠️ (vazia ou com JS não usado?)
├── 📁 data/ ✅ (boa estrutura)
│   └── 📁 questoes/
│       └── cardiaca.json ✅
│
├── 📁 imagens/ ⚠️ (duplicado com images?)
├── 📁 Cardiaca/ ❌ (maiúscula inconsistente)
├── 📁 torax/ ❌ (inconsistente)
├── 📁 audio/ ❓
├── 📁 conteudos/ ❓
├── 📁 content/notion/ ❓
├── 📁 dist/ ❓
├── 📁 modelo resumo/ ❓
├── 📁 questoes/ ❓ (duplicado com data/questoes?)
├── 📁 resumos/ ❓ (duplicado?)
└── 📁 scripts/ ❓
```

## 🔴 Problemas Identificados

### 1. Arquivos na Raiz
```
❌ 10+ arquivos HTML na raiz
❌ 3 arquivos JS na raiz
❌ Imagens na raiz
```

### 2. Pastas Vazias/Confusas
```
⚠️ css/ vazia mas style.css importa dela
⚠️ js/ vazia mas scripts na raiz
❓ Múltiplas pastas com propósito desconhecido
```

### 3. Nomenclatura Inconsistente
```
❌ Cardiaca/ (maiúscula) vs torax/ (minúscula)
❌ imagens/ vs images/
❌ conteudos/ vs content/
```

### 4. Duplicação
```
❌ Múltiplas pastas que parecem conter mesmo tipo de coisa
❌ Não está claro o que é "fonte" vs "build" vs "backup"
```

## ✅ O Que Está BOM
```
✅ data/questoes/ - Estrutura clara e funcional
✅ JSON bem estruturado (cardiaca.json)
✅ JavaScript funcional (questoes-template.js)
✅ Sistema de questões funciona
```

## 🎯 O Que Precisa Melhorar

1. **Organização de arquivos por tipo**
2. **Nomenclatura consistente**
3. **Eliminar duplicação**
4. **CSS modular real (não apenas imports vazios)**
5. **JavaScript organizado por funcionalidade**
6. **Documentação clara**