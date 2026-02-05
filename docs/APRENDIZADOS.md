# 🎓 Aprendizados por Dia

## O Que Você Vai Revisar Cada Dia

### 📅 DIA 1: HTML5 + Git

#### HTML5 Básico:
```html
<!DOCTYPE html> - Declaração HTML5
<html lang="pt-BR"> - Idioma do site
<meta charset="UTF-8"> - Encoding (acentos)
<meta name="viewport"> - Responsivo mobile

Tags semânticas:
<header> - Cabeçalho
<nav> - Navegação
<main> - Conteúdo principal
<section> - Seção
<article> - Artigo independente
<footer> - Rodapé
```

#### Git Básico:
```bash
git init - Inicializar repositório
git add . - Adicionar todos arquivos
git commit -m "mensagem" - Salvar mudanças
git status - Ver status
git log - Ver histórico
```

### 📅 DIA 2: CSS Modular

#### Variáveis CSS:
```css
:root {
  --cor-primaria: #2563eb;
  --espacamento: 1rem;
}

.botao {
  background: var(--cor-primaria);
  padding: var(--espacamento);
}
```

#### @import:
```css
@import url('modulo.css');
```

#### Flexbox:
```css
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
```

#### Grid:
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
```

### 📅 DIA 3: JavaScript ES6+

#### const vs let:
```javascript
const nome = "Gabriel"; // Não muda
let idade = 28; // Pode mudar
```

#### Arrow Functions:
```javascript
// Antes (ES5):
function somar(a, b) {
  return a + b;
}

// Depois (ES6):
const somar = (a, b) => a + b;
```

#### Template Literals:
```javascript
const nome = "Gabriel";
const mensagem = `Olá, ${nome}!`; // Interpolação
```

#### Async/Await:
```javascript
// Antes (Promises):
fetch(url)
  .then(r => r.json())
  .then(data => console.log(data));

// Depois (Async/Await):
async function carregar() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
```

#### Destructuring:
```javascript
const pessoa = { nome: "Gabriel", idade: 28 };
const { nome, idade } = pessoa;
```

### 📅 DIA 4: DOM + Eventos

#### Selecionar Elementos:
```javascript
document.getElementById('id');
document.querySelector('.classe');
document.querySelectorAll('.classe');
```

#### Manipular DOM:
```javascript
elemento.textContent = "Texto";
elemento.innerHTML = "<strong>HTML</strong>";
elemento.classList.add('classe');
elemento.classList.remove('classe');
elemento.style.color = "red";
```

#### Eventos:
```javascript
button.addEventListener('click', () => {
  console.log('Clicou!');
});
```

### 📅 DIA 5: HTML Semântico

#### Estrutura Semântica:
```html
<article>
  <header>
    <h1>Título</h1>
    <time datetime="2025-01-10">10 de Janeiro</time>
  </header>
  <section>
    <h2>Seção 1</h2>
    <p>Conteúdo...</p>
  </section>
  <footer>
    <p>Autor: Dr. Gabriel</p>
  </footer>
</article>
```

#### Atributos Importantes:
```html
<img src="..." alt="Descrição"> - Acessibilidade
<a href="..." title="Tooltip"> - Tooltip
<input type="..." placeholder="..."> - Placeholder
```

### 📅 DIA 6: JSON

#### Estrutura:
```json
{
  "titulo": "String",
  "numero": 123,
  "booleano": true,
  "array": [1, 2, 3],
  "objeto": {
    "chave": "valor"
  },
  "nulo": null
}
```

#### JavaScript + JSON:
```javascript
// Parse (string → objeto)
const obj = JSON.parse(stringJson);

// Stringify (objeto → string)
const str = JSON.stringify(obj);

// Carregar de arquivo
const response = await fetch('data.json');
const data = await response.json();
```

### 📅 DIA 7: DevTools + Debug

#### Console:
```javascript
console.log('Mensagem');
console.error('Erro');
console.table(array);
```

#### Debugger:
```javascript
debugger; // Pausa execução
```

#### DevTools:
- F12 - Abrir DevTools
- Elements - Ver HTML/CSS
- Console - Ver logs/erros
- Network - Ver requisições
- Sources - Debug JavaScript

## 📚 Recursos de Referência

### Durante a Semana, Consulte:

- **MDN Web Docs:** developer.mozilla.org
- **Can I Use:** caniuse.com (compatibilidade)
- **CSS Tricks:** css-tricks.com
- **JavaScript.info:** javascript.info

### Quando Tiver Dúvida:

1. Releia os arquivos de documentação
2. Consulte MDN
3. Pergunte no chat do dia específico
4. Não copie código sem entender!