# 📅 Plano Detalhado - 7 Dias

## Visão Geral

| Dia | Foco Principal | Tempo | Resultado |
|-----|----------------|-------|-----------|
| 1 | Estrutura + Base | 2h | Fundação completa |
| 2 | CSS Modular | 2h | Estilos organizados |
| 3 | JavaScript | 2h | JS funcional |
| 4 | HTML Questões | 2-3h | Sistema de questões |
| 5 | HTML Resumos | 2-3h | Todos resumos |
| 6 | Dados JSON | 2h | Dados estruturados |
| 7 | Testes + Docs | 2h | Projeto finalizado |

---

## 📅 DIA 1: Estrutura e Fundação

### Objetivos:
- Criar projeto novo vazio
- Estrutura de pastas completa
- Arquivos CSS modulares (vazios)
- index.html base
- Documentação inicial
- Git inicializado

### Etapas:

#### 1.1 Criar Projeto Novo (5 min)
```bash
# Criar pasta
mkdir bibliotec_anestesiologia_v2
cd bibliotec_anestesiologia_v2
```

#### 1.2 Criar Estrutura de Pastas (10 min)
```bash
# Criar todas as pastas
mkdir -p assets/{css,js,images}
mkdir -p pages/{questoes,resumos,flashcards}
mkdir -p data/{questoes,flashcards,resumos}
mkdir -p docs
```

#### 1.3 Arquivos CSS Modulares (15 min)
- Criar base.css (vazio com comentários)
- Criar layout.css (vazio com comentários)
- Criar components.css (vazio com comentários)
- Criar utilities.css (vazio com comentários)

#### 1.4 index.html Base (30 min)
- Estrutura HTML5 moderna
- Semântica correta
- Links preparados
- **DIGITAR, não copiar** (aprendizado ativo)

#### 1.5 Documentação Inicial (30 min)
- README.md
- LICENSE (MIT)
- .gitignore
- CHANGELOG.md

#### 1.6 Git Init (15 min)
```bash
git init
git add .
git commit -m "feat: estrutura inicial do projeto v2"
```

### Checklist do Dia 1:
- [ ] Pasta do projeto criada
- [ ] Estrutura de pastas completa
- [ ] 4 arquivos CSS criados
- [ ] index.html funcional
- [ ] 4 arquivos de documentação
- [ ] Git inicializado
- [ ] Primeiro commit realizado

---

## 📅 DIA 2: CSS Modular

### Objetivos:
- Migrar CSS do projeto antigo
- Organizar em módulos
- Limpar código duplicado
- Adicionar comentários explicativos
- Testar funcionamento

### Etapas:

#### 2.1 Revisar CSS Antigo (20 min)
- Abrir style.css do projeto antigo
- Identificar seções
- Anotar o que vai para cada módulo

#### 2.2 Criar base.css (30 min)
- Copiar/adaptar: reset CSS
- Adicionar variáveis CSS
- Definir tipografia base
- Comentar cada seção

#### 2.3 Criar layout.css (25 min)
- Copiar/adaptar: containers
- Grid system
- Navbar (se houver)
- Responsividade

#### 2.4 Criar components.css (30 min)
- Copiar/adaptar: cards
- Botões
- Formulários
- Componentes específicos

#### 2.5 Criar utilities.css (10 min)
- Classes de espaçamento
- Classes de texto
- Classes de display

#### 2.6 Atualizar style.css (5 min)
- Imports dos módulos
- Testar que está carregando

### Checklist do Dia 2:
- [ ] base.css completo e comentado
- [ ] layout.css completo e comentado
- [ ] components.css completo e comentado
- [ ] utilities.css completo e comentado
- [ ] style.css com imports corretos
- [ ] Testado no navegador
- [ ] Commit: "feat(css): implementa CSS modular"

---

## 📅 DIA 3: JavaScript Organizado

### Objetivos:
- Migrar JS do projeto antigo
- Organizar por funcionalidade
- Melhorar nomes de variáveis
- Adicionar comentários JSDoc
- Modernizar código (ES6+)

### Etapas:

#### 3.1 Revisar JS Antigo (15 min)
- Ler questoes-template.js
- Identificar funções principais
- Anotar melhorias possíveis

#### 3.2 Criar questoes.js (45 min)
- Copiar código do projeto antigo
- Refatorar: var → const/let
- Adicionar JSDoc
- Melhorar nomes de variáveis
- Adicionar tratamento de erros

#### 3.3 Criar resumos.js (se necessário) (30 min)
- Extrair funcionalidades de resumos
- Organizar código
- Comentar

#### 3.4 Criar flashcards.js (se necessário) (30 min)
- Extrair funcionalidades de flashcards
- Organizar código
- Comentar

#### 3.5 Testar (30 min)
- Abrir páginas no navegador
- Testar cada funcionalidade
- DevTools para debug

### Checklist do Dia 3:
- [ ] questoes.js completo e comentado
- [ ] Outros JS organizados
- [ ] Código modernizado (ES6+)
- [ ] JSDoc adicionado
- [ ] Testado e funcionando
- [ ] Commit: "feat(js): organiza JavaScript em módulos"

---

## 📅 DIA 4: Sistema de Questões (HTML)

### Objetivos:
- Migrar página de questões
- Atualizar links para nova estrutura
- Melhorar semântica HTML
- Integrar com JS novo
- Testar completamente

### Etapas:

#### 4.1 Criar pages/questoes/index.html (60 min)
- Copiar estrutura do projeto antigo
- Atualizar links para CSS (../../style.css)
- Atualizar links para JS (../../assets/js/)
- Melhorar semântica
- Adicionar comentários HTML

#### 4.2 Ajustar Caminhos (20 min)
- Verificar todos os caminhos relativos
- Testar que CSS carrega
- Testar que JS carrega

#### 4.3 Integração JS (30 min)
- Verificar que questoes.js funciona
- Testar carregar JSON
- Testar interatividade

#### 4.4 Testes Completos (30 min)
- Testar cada funcionalidade
- Diferentes temas de questões
- Navegação entre questões
- Botões de resposta

### Checklist do Dia 4:
- [ ] pages/questoes/index.html criado
- [ ] Links atualizados corretamente
- [ ] Semântica HTML melhorada
- [ ] Integrado com questoes.js
- [ ] Testado completamente
- [ ] Commit: "feat(questoes): implementa sistema de questões"

---

## 📅 DIA 5: Resumos (HTML)

### Objetivos:
- Migrar todos os resumos
- Padronizar estrutura
- Atualizar links
- Testar todos

### Etapas:

#### 5.1 Criar Template Base (30 min)
- pages/resumos/template.html
- Estrutura padronizada
- Links corretos
- Comentários explicativos

#### 5.2 Migrar Resumo 1 (30 min)
- Copiar cardiaca.html
- Aplicar template
- Atualizar links
- Testar

#### 5.3 Migrar Demais Resumos (60-90 min)
- Seguir mesmo processo para todos
- Manter padrão
- Não apenas copiar/colar - revisar cada um

### Checklist do Dia 5:
- [ ] Template de resumo criado
- [ ] Todos resumos migrados
- [ ] Links funcionando
- [ ] Visual consistente
- [ ] Testado cada resumo
- [ ] Commit: "feat(resumos): migra todos os resumos"

---

## 📅 DIA 6: Dados JSON

### Objetivos:
- Migrar todos os JSON
- Validar estrutura
- Adicionar metadados
- Testar integração

### Etapas:

#### 6.1 Revisar JSONs Atuais (20 min)
- Ver estrutura
- Identificar inconsistências
- Planejar melhorias

#### 6.2 Migrar JSONs (60 min)
- Copiar cada JSON
- Validar estrutura
- Adicionar campos se necessário
- Padronizar

#### 6.3 Testar Integração (40 min)
- Cada JSON carrega corretamente
- Questões aparecem
- Flashcards funcionam

### Checklist do Dia 6:
- [ ] Todos JSONs migrados
- [ ] Estrutura validada
- [ ] Metadados completos
- [ ] Integração testada
- [ ] Commit: "feat(data): migra dados JSON"

---

## 📅 DIA 7: Finalização

### Objetivos:
- Testar TUDO
- Criar documentação completa
- README atualizado
- Preparar para publicar

### Etapas:

#### 7.1 Testes Completos (45 min)
- Testar CADA página
- Cada funcionalidade
- Cada link
- Mobile/Desktop

#### 7.2 Documentação (45 min)
- README completo
- ARCHITECTURE.md
- Comentários finais

#### 7.3 Limpeza (15 min)
- Remover arquivos teste
- Organizar commits

#### 7.4 Publicar (15 min)
- Push para GitHub
- Configurar GitHub Pages

### Checklist do Dia 7:
- [ ] Tudo testado
- [ ] Documentação completa
- [ ] README atualizado
- [ ] Projeto publicado
- [ ] Commit: "docs: finaliza documentação e projeto v2"

---

## 🎯 Resultado Final

Ao final dos 7 dias:
```
✅ Projeto novo completamente organizado
✅ Código revisado e melhorado
✅ Documentação completa
✅ Publicado no GitHub
✅ Você aprendeu MUITO sobre programação web
✅ Base sólida para futuros projetos
```