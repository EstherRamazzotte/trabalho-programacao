/* ═══════════════════════════════════════════════════════════
   JavaScript na Prática — script.js
   Renderiza os exemplos, faz o realce de sintaxe e executa
   o código de cada card num console próprio. Sem bibliotecas.
   ═══════════════════════════════════════════════════════════ */

"use strict";

/* ── 1. Os exemplos, divididos em três níveis ──────────────
   NÍVEL 1 · Básico        — HTML e CSS (a estrutura e o visual)
   NÍVEL 2 · Intermediário — JavaScript (a lógica)
   NÍVEL 3 · Avançado      — recursos modernos que geram movimento

   Cada exemplo tem um "tipo":
     tipo: "html" → o resultado aparece como uma página de verdade
     tipo: "js"   → o resultado aparece num console (e no palco)
   ───────────────────────────────────────────────────────── */

const NIVEL_BASICO = [
  {
    tipo: "html",
    titulo: "Sua primeira página",
    arquivo: "pagina.html",
    descricao:
      "O HTML é o esqueleto da página. Cada etiqueta (tag) tem um papel: h1 é um título, p é um parágrafo, strong dá destaque. O navegador lê essas marcas e desenha o conteúdo.",
    codigo: `<h1>Diário de Programação</h1>

<p>Olá! Esta é a <strong>minha primeira página</strong>.</p>

<p>
  Hoje aprendi que o HTML organiza o conteúdo
  com <em>etiquetas</em> — e que elas quase sempre
  vêm em par: abre e fecha.
</p>

<hr>

<p>Feito na aula de programação. 🙂</p>`,
  },
  {
    tipo: "html",
    titulo: "Listas e links",
    arquivo: "conteudo.html",
    descricao:
      "Com ul montamos listas de itens soltos e com ol listas numeradas; com a criamos links para outras páginas. São as etiquetas que aparecem em praticamente todo site.",
    codigo: `<h2>O que já estudamos</h2>

<!-- ul = lista sem ordem (bolinhas) -->
<ul>
  <li>Estrutura com HTML</li>
  <li>Visual com CSS</li>
  <li>Interatividade com JavaScript</li>
</ul>

<h2>Nossa rotina na aula</h2>

<!-- ol = lista ordenada (números) -->
<ol>
  <li>O professor explica o conceito</li>
  <li>A gente escreve o código</li>
  <li>Testamos no navegador</li>
</ol>

<p>
  Referência que usamos:
  <a href="https://developer.mozilla.org/pt-BR/">MDN Web Docs</a>
</p>`,
  },
  {
    tipo: "html",
    titulo: "CSS: cores, fontes e tamanhos",
    arquivo: "estilo.html",
    descricao:
      "O CSS cuida da aparência. Dentro de <style> escrevemos regras: primeiro o seletor (a quem a regra se aplica) e depois as propriedades entre chaves.",
    codigo: `<style>
  body {
    background: #fdf6e3;
    font-family: Georgia, serif;
    color: #40372c;
  }

  h1 {
    color: #c1651b;
    font-size: 34px;
    text-align: center;
  }

  /* .destaque é uma classe: vale para quem tiver class="destaque" */
  .destaque {
    background: #ffe8b0;
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: bold;
  }
</style>

<h1>Aula de CSS</h1>

<p>
  Trocamos a cor, a fonte e o tamanho do texto
  <span class="destaque">sem mexer no HTML</span>.
</p>

<p>É o mesmo conteúdo — só que bem mais bonito.</p>`,
  },
  {
    tipo: "html",
    titulo: "A caixa: margem, borda e recheio",
    arquivo: "caixa.html",
    descricao:
      "Todo elemento do HTML é uma caixa retangular. O padding é o espaço por dentro, a border é a moldura e a margin é o espaço por fora. Entender isso resolve metade dos problemas de layout.",
    codigo: `<style>
  .cartao {
    /* espaço POR DENTRO da caixa */
    padding: 20px;

    /* a moldura da caixa */
    border: 3px solid #2f6f4f;
    border-radius: 12px;

    /* espaço POR FORA, empurrando os vizinhos */
    margin: 16px 0;

    max-width: 320px;
    background: #eaf7ef;
    font-family: system-ui, sans-serif;
  }

  .cartao h3 { margin: 0 0 8px; color: #2f6f4f; }
  .cartao p  { margin: 0; }
</style>

<div class="cartao">
  <h3>Caixa nº 1</h3>
  <p>Repare no espaço entre o texto e a borda: isso é o padding.</p>
</div>

<div class="cartao">
  <h3>Caixa nº 2</h3>
  <p>E o espaço entre as duas caixas é a margin.</p>
</div>`,
  },
  {
    tipo: "html",
    titulo: "Layout com Flexbox",
    arquivo: "layout.html",
    descricao:
      "O Flexbox alinha vários elementos em linha ou em coluna com poucas linhas de CSS. É como os sites de hoje organizam menus, cartões e galerias.",
    codigo: `<style>
  .fila {
    display: flex;           /* liga o Flexbox */
    gap: 12px;               /* espaço entre os itens */
    flex-wrap: wrap;         /* quebra a linha se faltar espaço */
    justify-content: center; /* centraliza na horizontal */
  }

  .item {
    flex: 1 1 120px;         /* cresce, encolhe, base de 120px */
    background: #1f6feb;
    color: white;
    font-family: system-ui, sans-serif;
    text-align: center;
    padding: 24px 12px;
    border-radius: 10px;
  }

  .item:nth-child(2) { background: #a371f7; }
  .item:nth-child(3) { background: #db6d28; }
</style>

<div class="fila">
  <div class="item">HTML</div>
  <div class="item">CSS</div>
  <div class="item">JavaScript</div>
</div>

<p style="font-family: system-ui; text-align: center;">
  Estreite a janela: os blocos se reorganizam sozinhos.
</p>`,
  },
];

const NIVEL_INTERMEDIARIO = [
  {
    titulo: "Variáveis e tipos",
    arquivo: "variaveis.js",
    descricao:
      "Variáveis guardam informações. Com const o valor não muda; com let ele pode mudar. O operador typeof revela o tipo do dado.",
    codigo: `// 'const' cria uma constante, 'let' uma variável
const nome = "Ada Lovelace";
let ano = 1843;
let programadora = true;

console.log("Nome:", nome, "| tipo:", typeof nome);
console.log("Ano:", ano, "| tipo:", typeof ano);
console.log("Programadora?", programadora, "| tipo:", typeof programadora);`,
  },
  {
    titulo: "Funções",
    arquivo: "funcoes.js",
    descricao:
      "Funções são blocos de código reutilizáveis: recebem valores, processam e devolvem um resultado. As arrow functions são a forma moderna e curta de escrevê-las.",
    codigo: `// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function: a forma moderna
const dobrar = n => n * 2;

console.log("3 + 4 =", somar(3, 4));
console.log("O dobro de 21 é", dobrar(21));
console.log("Combinadas:", dobrar(somar(1, 4)));`,
  },
  {
    titulo: "Condicionais",
    arquivo: "condicionais.js",
    descricao:
      "Com if e else, o programa toma decisões. Este exemplo olha o relógio do seu computador — o resultado muda conforme a hora do dia!",
    codigo: `const hora = new Date().getHours();
console.log("Agora são", hora, "horas.");

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}

// Operador ternário: uma decisão em uma linha
const paridade = 7 % 2 === 0 ? "par" : "ímpar";
console.log("O número 7 é", paridade);`,
  },
  {
    titulo: "Laços de repetição",
    arquivo: "lacos.js",
    descricao:
      "Laços repetem uma tarefa várias vezes sem copiar e colar código. O for clássico conta; o for...of percorre listas item por item.",
    codigo: `// Laço 'for' clássico: conta de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log("Contando:", i);
}

// 'for...of' percorre uma lista
const planetas = ["Mercúrio", "Vênus", "Terra", "Marte"];
for (const planeta of planetas) {
  console.log("Planeta:", planeta);
}`,
  },
  {
    titulo: "Arrays e seus métodos",
    arquivo: "arrays.js",
    descricao:
      "Arrays são listas de valores. Os métodos map, filter e reduce transformam, filtram e resumem listas — o coração do JavaScript moderno.",
    codigo: `const notas = [8.5, 6.0, 9.2, 7.8, 5.5];

// map: transforma cada item
const comBonus = notas.map(n => n + 0.5);

// filter: seleciona só o que passa no teste
const aprovadas = notas.filter(n => n >= 7);

// reduce: resume a lista em um único valor
const soma = notas.reduce((total, n) => total + n, 0);
const media = soma / notas.length;

console.log("Notas com bônus:", comBonus);
console.log("Notas >= 7:", aprovadas);
console.log("Média da turma:", media.toFixed(1));`,
  },
  {
    titulo: "Objetos",
    arquivo: "objetos.js",
    descricao:
      "Objetos agrupam dados relacionados em pares de chave e valor — e também podem ter funções próprias, chamadas de métodos.",
    codigo: `const linguagem = {
  nome: "JavaScript",
  criadaEm: 1995,
  criador: "Brendan Eich",
  saudacao() {
    return \`Olá, eu sou \${this.nome}!\`;
  }
};

console.log(linguagem.saudacao());
console.log("Criada em:", linguagem.criadaEm);
console.log("Por:", linguagem.criador);
console.log("Chaves do objeto:", Object.keys(linguagem));`,
  },
  {
    titulo: "Manipulando o DOM",
    arquivo: "dom.js",
    descricao:
      "O DOM é a página vista pelo JavaScript. Alterando elementos, o código muda o que aparece na tela. Aqui, a variável palco é um pedaço real desta página — execute mais de uma vez!",
    codigo: `// 'palco' é um elemento real desta página
palco.innerHTML = "<h3>Olá, DOM! 👋</h3>";

const cores = ["#E8B84B", "#5EC6A2", "#E06C55", "#7FA7E0"];
const sorteada = cores[Math.floor(Math.random() * cores.length)];

palco.style.background = sorteada;
palco.style.padding = "24px";
palco.style.borderRadius = "10px";

console.log("Cor sorteada:", sorteada);`,
  },
  {
    titulo: "Eventos",
    arquivo: "eventos.js",
    descricao:
      "Eventos deixam a página reagir ao usuário: cliques, teclas, rolagem. Este código cria um botão de verdade e escuta cada clique nele.",
    codigo: `let cliques = 0;

const botao = document.createElement("button");
botao.textContent = "Clique em mim!";

botao.addEventListener("click", () => {
  cliques++;
  botao.textContent = \`Você clicou \${cliques}x 🎉\`;
  console.log("Clique número", cliques);
});

palco.innerHTML = "";
palco.appendChild(botao);
console.log("Botão criado — experimente clicar nele!");`,
  },
];


const NIVEL_AVANCADO = [
  {
    tipo: "html",
    titulo: "Transições e transformações",
    arquivo: "movimento.html",
    descricao:
      "transform move, gira e redimensiona um elemento sem bagunçar o resto da página. Com transition, o navegador desenha sozinho todos os quadros entre o antes e o depois. Passe o mouse nos cartões.",
    codigo: `<style>
  body { font-family: system-ui, sans-serif; }

  .peca {
    display: inline-block;
    width: 120px;
    padding: 28px 0;
    margin: 8px;
    text-align: center;
    border-radius: 12px;
    background: #1f6feb;
    color: white;

    /* a mágica: anime estas propriedades em 0,35s */
    transition: transform 0.35s ease, background 0.35s ease;
  }

  .peca:hover { transform: translateY(-12px) scale(1.08); }
  .girar:hover { transform: rotate(12deg) scale(1.08); }
  .peca:hover { background: #a371f7; }
</style>

<p>Passe o mouse por cima:</p>

<div class="peca">Subir</div>
<div class="peca girar">Girar</div>`,
  },
  {
    tipo: "html",
    titulo: "Animações com @keyframes",
    arquivo: "keyframes.html",
    descricao:
      "Enquanto a transição vai de um estado a outro, o @keyframes descreve uma animação inteira: o que acontece no começo, no meio e no fim. Ela roda sozinha, sem precisar de JavaScript.",
    codigo: `<style>
  body { font-family: system-ui, sans-serif; }

  @keyframes flutuar {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-26px); }
    100% { transform: translateY(0); }
  }

  @keyframes pulsar {
    from { box-shadow: 0 0 0 0 rgba(219, 109, 40, 0.6); }
    to   { box-shadow: 0 0 0 28px rgba(219, 109, 40, 0); }
  }

  .bola {
    width: 84px;
    height: 84px;
    margin: 40px auto;
    border-radius: 50%;
    background: #db6d28;

    /* nome  duração  ritmo             repetições */
    animation: flutuar 1.6s ease-in-out infinite,
               pulsar  1.6s ease-out    infinite;
  }
</style>

<div class="bola"></div>
<p style="text-align:center">Duas animações rodando ao mesmo tempo.</p>`,
  },
  {
    tipo: "js",
    titulo: "Animar pelo JavaScript: element.animate()",
    arquivo: "web-animations.js",
    descricao:
      "A Web Animations API deixa o JavaScript comandar a animação: o método animate() recebe os quadros e as opções, e devolve um objeto que dá para pausar, inverter e esperar terminar com await.",
    codigo: `palco.innerHTML = "<div id='alvo'>🚀</div>";

const alvo = palco.querySelector("#alvo");
alvo.style.fontSize = "44px";
alvo.style.display = "inline-block";

// Quadros da animação: começo, meio e fim
const quadros = [
  { transform: "translateX(0) rotate(0deg)" },
  { transform: "translateX(120px) rotate(200deg)" },
  { transform: "translateX(0) rotate(360deg)" },
];

const animacao = alvo.animate(quadros, {
  duration: 1800,
  iterations: 2,
  easing: "ease-in-out",
});

console.log("Animação iniciada pelo JavaScript!");

// A animação avisa quando termina (é uma Promise)
animacao.finished.then(() => {
  console.log("Terminou — foram 2 voltas.");
});`,
  },
  {
    tipo: "js",
    titulo: "Quadro a quadro com requestAnimationFrame",
    arquivo: "raf.js",
    descricao:
      "requestAnimationFrame pede ao navegador para chamar a nossa função antes de cada quadro da tela — cerca de 60 vezes por segundo. É assim que se faz animação sob medida, como em jogos.",
    codigo: `palco.innerHTML = "<div id='nave'>🛸</div>";

const nave = palco.querySelector("#nave");
nave.style.fontSize = "40px";
nave.style.display = "inline-block";

let inicio = null;

function quadro(agora) {
  if (inicio === null) inicio = agora;
  const t = (agora - inicio) / 1000; // segundos desde o início

  // Vai e volta suavemente usando seno
  const x = Math.sin(t * 2) * 90;
  const y = Math.cos(t * 3) * 22;

  nave.style.transform = "translate(" + x + "px," + y + "px)";

  if (t < 6) {
    requestAnimationFrame(quadro); // pede o próximo quadro
  } else {
    console.log("Fim: 6 segundos de voo.");
  }
}

requestAnimationFrame(quadro);
console.log("Voando por 6 segundos...");`,
  },
  {
    tipo: "html",
    titulo: "Animação guiada pela rolagem",
    arquivo: "scroll.html",
    descricao:
      "Um dos recursos mais novos do CSS: com animation-timeline a animação não é comandada pelo relógio, e sim pela rolagem da página. Role a caixa abaixo para ver os cartões entrarem.",
    codigo: `<style>
  body { font-family: system-ui, sans-serif; }

  @keyframes entrar {
    from { opacity: 0; transform: translateY(40px) scale(0.9); }
    to   { opacity: 1; transform: translateY(0)    scale(1);   }
  }

  .cartao {
    margin: 40px 10px;
    padding: 28px;
    border-radius: 12px;
    background: #1f6feb;
    color: white;

    animation: entrar linear both;

    /* a animação acompanha a entrada do elemento na tela */
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  .cartao:nth-child(even) { background: #2f6f4f; }
</style>

<p>↓ role aqui dentro ↓</p>

<div class="cartao">Cartão 1</div>
<div class="cartao">Cartão 2</div>
<div class="cartao">Cartão 3</div>
<div class="cartao">Cartão 4</div>
<div class="cartao">Cartão 5</div>`,
  },
];

/* Os três níveis, na ordem em que aparecem na página */

const NIVEIS = [
  {
    id: "basico",
    etiqueta: "Nível 1",
    nome: "Básico",
    resumo: "HTML e CSS",
    descricao:
      "O ponto de partida: o HTML dá a estrutura do conteúdo e o CSS cuida da aparência. Aqui o resultado aparece como uma página de verdade, do lado do código.",
    exemplos: NIVEL_BASICO,
  },
  {
    id: "intermediario",
    etiqueta: "Nível 2",
    nome: "Intermediário",
    resumo: "JavaScript",
    descricao:
      "Agora a página passa a pensar. O JavaScript guarda dados, toma decisões, repete tarefas e reage ao usuário. O resultado de cada exemplo sai num console próprio.",
    exemplos: NIVEL_INTERMEDIARIO,
  },
  {
    id: "avancado",
    etiqueta: "Nível 3",
    nome: "Avançado",
    resumo: "Movimento e recursos modernos",
    descricao:
      "Os recursos mais recentes da web, todos ligados a movimento: transições, @keyframes, a Web Animations API, requestAnimationFrame e animações guiadas pela rolagem.",
    exemplos: NIVEL_AVANCADO,
  },
];

/* ── 2. Realce de sintaxe (mini-highlighter) ───────────── */

const PADRAO_TOKENS = new RegExp(
  [
    "(\\/\\/[^\\n]*)",                                     // 1 comentário
    "(`(?:\\\\.|[^`\\\\])*`|'(?:\\\\.|[^'\\\\])*'|\"(?:\\\\.|[^\"\\\\])*\")", // 2 string
    "\\b(const|let|var|function|return|if|else|for|while|do|of|in|new|typeof|class|this)\\b", // 3 palavra-chave
    "\\b(true|false|null|undefined)\\b",                   // 4 literal
    "\\b(\\d+(?:\\.\\d+)?)\\b",                            // 5 número
    "([A-Za-z_$][\\w$]*)(?=\\s*\\()",                      // 6 chamada de função
  ].join("|"),
  "g"
);

const CLASSES_TOKENS = ["tok-com", "tok-str", "tok-kw", "tok-lit", "tok-num", "tok-fn"];

function escaparHTML(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function destacar(codigo) {
  let html = "";
  let ultimo = 0;
  for (const m of codigo.matchAll(PADRAO_TOKENS)) {
    html += escaparHTML(codigo.slice(ultimo, m.index));
    const grupo = CLASSES_TOKENS.findIndex((_, i) => m[i + 1] !== undefined);
    html += `<span class="${CLASSES_TOKENS[grupo]}">${escaparHTML(m[0])}</span>`;
    ultimo = m.index + m[0].length;
  }
  html += escaparHTML(codigo.slice(ultimo));
  return html;
}


/* Realce para HTML e CSS (usado nos níveis básico e avançado) */

const PADRAO_MARCACAO = new RegExp(
  [
    "(<!--[\\s\\S]*?-->|\\/\\*[\\s\\S]*?\\*\\/)",   // 1 comentário
    "(\"[^\"]*\"|'[^']*')",                          // 2 string
    "(<\\/?[A-Za-z][\\w-]*)",                        // 3 nome da etiqueta
    "([A-Za-z-]+)(?=\\s*=)",                         // 4 atributo do HTML
    "([A-Za-z-]+)(?=\\s*:)",                         // 5 propriedade do CSS
    "(#[0-9a-fA-F]{3,8}\\b|\\b\\d+(?:\\.\\d+)?(?:px|rem|em|%|s|ms|deg|vh|vw)?\\b)", // 6 valor
  ].join("|"),
  "g"
);

const CLASSES_MARCACAO = ["tok-com", "tok-str", "tok-kw", "tok-fn", "tok-fn", "tok-num"];

function destacarComPadrao(codigo, padrao, classes) {
  let html = "";
  let ultimo = 0;
  for (const m of codigo.matchAll(padrao)) {
    html += escaparHTML(codigo.slice(ultimo, m.index));
    const grupo = classes.findIndex((_, i) => m[i + 1] !== undefined);
    html += `<span class="${classes[grupo]}">${escaparHTML(m[0])}</span>`;
    ultimo = m.index + m[0].length;
  }
  html += escaparHTML(codigo.slice(ultimo));
  return html;
}

// Escolhe o realce certo conforme o tipo do exemplo
function destacarCodigo(codigo, tipo) {
  return tipo === "html"
    ? destacarComPadrao(codigo, PADRAO_MARCACAO, CLASSES_MARCACAO)
    : destacar(codigo);
}

/* ── 3. Executor: roda código com console próprio ──────── */

function formatarValor(valor) {
  if (typeof valor === "string") return valor;
  if (typeof valor === "object" && valor !== null) {
    try {
      return JSON.stringify(valor);
    } catch {
      return String(valor);
    }
  }
  return String(valor);
}

// Cada execução recebe uma "senha". Quando o exemplo roda de novo,
// a senha muda e as animações da execução anterior param sozinhas —
// senão os exemplos do nível avançado ficariam empilhando movimento.
const senhas = new WeakMap();

function executarCodigo(codigo, consoleEl, palcoEl) {
  consoleEl.innerHTML = "";
  if (palcoEl) {
    palcoEl.innerHTML = "";
    palcoEl.removeAttribute("style");
  }

  const dono = palcoEl || consoleEl;
  const senha = (senhas.get(dono) || 0) + 1;
  senhas.set(dono, senha);
  const aindaVale = () => senhas.get(dono) === senha;

  const pedirQuadro = (retorno) =>
    requestAnimationFrame((tempo) => {
      if (aindaVale()) retorno(tempo);
    });

  const repetir = (retorno, intervalo) => {
    const id = setInterval(() => {
      if (aindaVale()) retorno();
      else clearInterval(id);
    }, intervalo);
    return id;
  };

  const esperar = (retorno, atraso) =>
    setTimeout(() => {
      if (aindaVale()) retorno();
    }, atraso);

  const consoleFalso = {
    log(...args) {
      const linha = document.createElement("div");
      linha.className = "console-linha";
      linha.textContent = args.map(formatarValor).join(" ");
      consoleEl.appendChild(linha);
    },
    error(...args) {
      const linha = document.createElement("div");
      linha.className = "console-linha console-erro";
      linha.textContent = args.map(formatarValor).join(" ");
      consoleEl.appendChild(linha);
    },
  };
  consoleFalso.warn = consoleFalso.log;
  consoleFalso.info = consoleFalso.log;

  try {
    const funcao = new Function(
      "console",
      "palco",
      "requestAnimationFrame",
      "setInterval",
      "setTimeout",
      codigo
    );
    funcao(consoleFalso, palcoEl, pedirQuadro, repetir, esperar);
    if (consoleEl.children.length === 0 && (!palcoEl || palcoEl.children.length === 0)) {
      const aviso = document.createElement("div");
      aviso.className = "console-vazio";
      aviso.textContent = "(o código rodou, mas nada foi impresso — use console.log)";
      consoleEl.appendChild(aviso);
    }
  } catch (erro) {
    const linha = document.createElement("div");
    linha.className = "console-linha console-erro";
    linha.textContent = "Erro: " + erro.message;
    consoleEl.appendChild(linha);
  }
}

/* ── 4. Renderiza os níveis e os cards de exemplo ──────── */

const niveisEl = document.getElementById("niveis");
const chipsEl = document.getElementById("niveis-chips");

// Envolve o código do aluno numa página completa, para o preview
function moldarPagina(codigo) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html { color-scheme: light; }
    body { margin: 16px; background: #ffffff; color: #1a1a1a; line-height: 1.5; }
  </style>
</head>
<body>
${codigo}
</body>
</html>`;
}

function criarCartaoExemplo(exemplo, numero) {
  const card = document.createElement("article");
  card.className = "exemplo";

  const ehPagina = exemplo.tipo === "html";
  const saida = ehPagina
    ? `<div class="ex-saida ex-saida-pagina">
         <div class="saida-rotulo">Página</div>
         <iframe class="ex-preview" title="Resultado de ${escaparHTML(exemplo.arquivo)}" sandbox="allow-scripts"></iframe>
       </div>`
    : `<div class="ex-saida">
         <div class="saida-rotulo">Console</div>
         <div class="console" aria-live="polite">
           <div class="console-vazio">aperte ▶ Executar para ver o resultado</div>
         </div>
         <div class="palco"></div>
       </div>`;

  // Título e descrição são texto puro: escapamos para que um "<style>"
  // citado na explicação não vire uma etiqueta de verdade.
  card.innerHTML = `
    <div class="ex-cabeca">
      <span class="ex-num">${numero}</span>
      <h4>${escaparHTML(exemplo.titulo)}</h4>
    </div>
    <p class="ex-desc">${escaparHTML(exemplo.descricao)}</p>
    <div class="ex-corpo">
      <div class="ex-codigo">
        <div class="ex-toolbar">
          <span class="ex-arquivo">${escaparHTML(exemplo.arquivo)}</span>
          <div class="ex-botoes">
            <button class="botao botao-mini botao-copiar" type="button">Copiar</button>
            <button class="botao botao-executar" type="button">▶ Executar</button>
          </div>
        </div>
        <pre><code>${destacarCodigo(exemplo.codigo, exemplo.tipo)}</code></pre>
      </div>
      ${saida}
    </div>
  `;

  const botao = card.querySelector(".botao-executar");

  if (ehPagina) {
    const quadro = card.querySelector(".ex-preview");
    const mostrar = () => (quadro.srcdoc = moldarPagina(exemplo.codigo));
    botao.addEventListener("click", mostrar);
    mostrar(); // páginas já aparecem prontas
  } else {
    const consoleEl = card.querySelector(".console");
    const palcoEl = card.querySelector(".palco");
    botao.addEventListener("click", () => executarCodigo(exemplo.codigo, consoleEl, palcoEl));
  }

  const botaoCopiar = card.querySelector(".botao-copiar");
  botaoCopiar.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(exemplo.codigo);
    } catch {
      // Fallback para navegadores/contextos sem a API de clipboard
      const area = document.createElement("textarea");
      area.value = exemplo.codigo;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    botaoCopiar.textContent = "Copiado ✓";
    setTimeout(() => (botaoCopiar.textContent = "Copiar"), 1600);
  });

  return card;
}

NIVEIS.forEach((nivel) => {
  const chip = document.createElement("a");
  chip.className = "chip";
  chip.href = `#${nivel.id}`;
  chip.innerHTML = `<span class="chip-etiqueta">${nivel.etiqueta}</span> ${nivel.nome}`;
  chipsEl.appendChild(chip);

  const bloco = document.createElement("section");
  bloco.className = "nivel";
  bloco.id = nivel.id;
  bloco.innerHTML = `
    <div class="nivel-cabeca">
      <span class="nivel-etiqueta">${escaparHTML(nivel.etiqueta)}</span>
      <h3>${escaparHTML(nivel.nome)} <span class="nivel-resumo">· ${escaparHTML(nivel.resumo)}</span></h3>
      <p class="nivel-desc">${escaparHTML(nivel.descricao)}</p>
    </div>
    <div class="lista-exemplos"></div>
  `;

  const lista = bloco.querySelector(".lista-exemplos");
  nivel.exemplos.forEach((exemplo, i) => {
    lista.appendChild(criarCartaoExemplo(exemplo, String(i + 1).padStart(2, "0")));
  });

  niveisEl.appendChild(bloco);
});

// Os níveis nascem pelo JavaScript: se a URL veio com #avancado, rola agora
if (location.hash) {
  const alvo = document.querySelector(location.hash);
  if (alvo) alvo.scrollIntoView();
}

/* ── 5. Playground ─────────────────────────────────────── */

const pgEditor = document.getElementById("pg-editor");
const pgConsole = document.getElementById("pg-console");
const pgPalco = document.getElementById("pg-palco");

pgEditor.value = `// Escreva seu próprio código aqui!
const nome = "visitante";
console.log(\`Bem-vindo(a), \${nome}!\`);

for (let i = 3; i > 0; i--) {
  console.log(i + "...");
}
console.log("🚀 Decolar!");`;

document.getElementById("pg-executar").addEventListener("click", () => {
  executarCodigo(pgEditor.value, pgConsole, pgPalco);
});

document.getElementById("pg-limpar").addEventListener("click", () => {
  pgEditor.value = "";
  pgConsole.innerHTML =
    '<div class="console-vazio">aperte ▶ Executar para ver o resultado</div>';
  pgPalco.innerHTML = "";
  pgEditor.focus();
});

// Tab dentro do editor insere dois espaços em vez de sair do campo
pgEditor.addEventListener("keydown", (evento) => {
  if (evento.key === "Tab") {
    evento.preventDefault();
    const { selectionStart, selectionEnd, value } = pgEditor;
    pgEditor.value = value.slice(0, selectionStart) + "  " + value.slice(selectionEnd);
    pgEditor.selectionStart = pgEditor.selectionEnd = selectionStart + 2;
  }
});

/* ── 6. Hero: código que se digita sozinho ─────────────── */

const heroCodigo = document.getElementById("hero-codigo");
const heroCursor = document.getElementById("hero-cursor");
const heroSaida = document.getElementById("hero-saida");

const CODIGO_HERO = `const linguagem = "JavaScript";
const mensagem = \`Olá, mundo! Eu falo \${linguagem}.\`;

console.log(mensagem);`;

const SAIDA_HERO = "Olá, mundo! Eu falo JavaScript.";

const prefereMenosMovimento =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefereMenosMovimento) {
  heroCodigo.innerHTML = destacar(CODIGO_HERO);
  heroSaida.textContent = SAIDA_HERO;
} else {
  let posicao = 0;
  const digitar = () => {
    posicao++;
    heroCodigo.innerHTML = destacar(CODIGO_HERO.slice(0, posicao));
    if (posicao < CODIGO_HERO.length) {
      const pausa = CODIGO_HERO[posicao - 1] === "\n" ? 220 : 28;
      setTimeout(digitar, pausa);
    } else {
      setTimeout(() => {
        heroSaida.textContent = SAIDA_HERO;
        heroCursor.style.display = "none";
      }, 450);
    }
  };
  setTimeout(digitar, 600);
}

/* ── 7. Galeria de atividades ──────────────────────────────
   Duas origens de fotos:
   1) as fixas, lidas da pasta "imagens/" (são as que vão no
      trabalho entregue);
   2) as adicionadas pelo botão "Adicionar fotos", que ficam
      guardadas no próprio navegador (localStorage).
   ───────────────────────────────────────────────────────── */

const ATIVIDADES = [
  {
    arquivo: "imagens/atividade-1.jpg",
    titulo: "Aula de introdução",
    legenda: "Primeiros conceitos de HTML anotados no caderno.",
  },
  {
    arquivo: "imagens/atividade-2.jpg",
    titulo: "Estilo com CSS",
    legenda: "Deixando a página com a nossa cara, cor por cor.",
  },
  {
    arquivo: "imagens/atividade-3.jpg",
    titulo: "Testando o JavaScript",
    legenda: "Rodando os exemplos no navegador e conferindo o console.",
  },
  {
    arquivo: "imagens/atividade-4.jpg",
    titulo: "Resultado final",
    legenda: "A página pronta, com todos os exemplos funcionando.",
  },
];

const CHAVE_FOTOS = "atividades-fotos-v1";
const LARGURA_MAX = 1400;

const galeria = document.getElementById("galeria");
const entradaFoto = document.getElementById("entrada-foto");
const botaoAdicionar = document.getElementById("botao-adicionar-foto");
const recadoGaleria = document.getElementById("galeria-recado");
const lupa = document.getElementById("lupa");
const lupaImg = document.getElementById("lupa-img");
const lupaLegenda = document.getElementById("lupa-legenda");

function lerFotosSalvas() {
  try {
    const bruto = localStorage.getItem(CHAVE_FOTOS);
    return bruto ? JSON.parse(bruto) : [];
  } catch {
    return [];
  }
}

function salvarFotos() {
  try {
    localStorage.setItem(CHAVE_FOTOS, JSON.stringify(fotosEnviadas));
    return true;
  } catch {
    return false;
  }
}

let fotosEnviadas = lerFotosSalvas();

function recado(texto, ehErro) {
  recadoGaleria.textContent = texto;
  recadoGaleria.classList.toggle("recado-erro", Boolean(ehErro));
}

/* Abre a foto ampliada */

function abrirLupa(fonte, texto) {
  lupaImg.src = fonte;
  lupaImg.alt = texto;
  lupaLegenda.textContent = texto;
  lupa.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("lupa-fechar").focus();
}

function fecharLupa() {
  lupa.hidden = true;
  document.body.style.overflow = "";
  lupaImg.removeAttribute("src");
}

/* Reduz a foto antes de guardar: fotos de celular são enormes */

function reduzirImagem(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onerror = () => reject(new Error("não foi possível ler o arquivo"));
    leitor.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("o arquivo não parece ser uma imagem"));
      img.onload = () => {
        const escala = Math.min(1, LARGURA_MAX / img.width);
        const tela = document.createElement("canvas");
        tela.width = Math.round(img.width * escala);
        tela.height = Math.round(img.height * escala);
        tela.getContext("2d").drawImage(img, 0, 0, tela.width, tela.height);
        resolve(tela.toDataURL("image/jpeg", 0.82));
      };
      img.src = leitor.result;
    };
    leitor.readAsDataURL(arquivo);
  });
}

/* Monta os cards */

function criarCartaoFixo(atividade) {
  const figura = document.createElement("figure");
  figura.className = "foto";

  const botao = document.createElement("button");
  botao.className = "foto-moldura";
  botao.type = "button";
  botao.setAttribute("aria-label", `Ampliar: ${atividade.titulo}`);

  const img = document.createElement("img");
  img.src = atividade.arquivo;
  img.alt = atividade.titulo;
  img.loading = "lazy";

  // Enquanto a foto não existir na pasta, o card mostra "foto a incluir"
  img.addEventListener("error", () => {
    figura.classList.add("foto-vazia");
    botao.disabled = true;
  });

  botao.addEventListener("click", () =>
    abrirLupa(atividade.arquivo, `${atividade.titulo} — ${atividade.legenda}`)
  );

  const legenda = document.createElement("figcaption");
  const forte = document.createElement("strong");
  forte.textContent = atividade.titulo;
  legenda.appendChild(forte);
  legenda.appendChild(document.createTextNode(atividade.legenda));

  botao.appendChild(img);
  figura.appendChild(botao);
  figura.appendChild(legenda);
  return figura;
}

function criarCartaoEnviado(foto, posicao) {
  const figura = document.createElement("figure");
  figura.className = "foto foto-enviada";

  const botao = document.createElement("button");
  botao.className = "foto-moldura";
  botao.type = "button";
  botao.setAttribute("aria-label", "Ampliar foto");

  const img = document.createElement("img");
  img.src = foto.dados;
  img.alt = foto.legenda || "Foto da aula";
  botao.appendChild(img);
  botao.addEventListener("click", () =>
    abrirLupa(foto.dados, foto.legenda || "Foto da aula de programação")
  );

  const legenda = document.createElement("figcaption");

  const campo = document.createElement("input");
  campo.className = "foto-legenda-campo";
  campo.type = "text";
  campo.value = foto.legenda || "";
  campo.placeholder = "O que aprendemos nesta foto?";
  campo.setAttribute("aria-label", "Legenda da foto");
  campo.addEventListener("input", () => {
    foto.legenda = campo.value;
    salvarFotos();
  });

  const acoes = document.createElement("div");
  acoes.className = "foto-acoes";

  const baixar = document.createElement("a");
  baixar.className = "botao botao-mini";
  baixar.href = foto.dados;
  baixar.download = `atividade-${ATIVIDADES.length + posicao + 1}.jpg`;
  baixar.textContent = "Salvar arquivo";
  baixar.title = "Baixa a foto já reduzida, pronta para ir na pasta imagens/";

  const remover = document.createElement("button");
  remover.className = "botao botao-mini botao-remover";
  remover.type = "button";
  remover.textContent = "Remover";
  remover.addEventListener("click", () => {
    fotosEnviadas = fotosEnviadas.filter((f) => f !== foto);
    salvarFotos();
    desenharGaleria();
    recado("Foto removida.");
  });

  acoes.appendChild(baixar);
  acoes.appendChild(remover);

  legenda.appendChild(campo);
  legenda.appendChild(acoes);

  figura.appendChild(botao);
  figura.appendChild(legenda);
  return figura;
}

function desenharGaleria() {
  galeria.innerHTML = "";
  ATIVIDADES.forEach((atividade) => galeria.appendChild(criarCartaoFixo(atividade)));
  fotosEnviadas.forEach((foto, i) => galeria.appendChild(criarCartaoEnviado(foto, i)));
}

desenharGaleria();

/* Botão de upload */

botaoAdicionar.addEventListener("click", () => entradaFoto.click());

entradaFoto.addEventListener("change", async () => {
  const arquivos = Array.from(entradaFoto.files || []);
  if (arquivos.length === 0) return;

  recado(`Preparando ${arquivos.length} foto(s)...`);
  let adicionadas = 0;

  for (const arquivo of arquivos) {
    if (!arquivo.type.startsWith("image/")) {
      recado(`"${arquivo.name}" não é uma imagem — pulei este arquivo.`, true);
      continue;
    }
    try {
      const dados = await reduzirImagem(arquivo);
      fotosEnviadas.push({ dados, legenda: "" });
      if (!salvarFotos()) {
        fotosEnviadas.pop();
        recado(
          "A memória do navegador encheu. Remova alguma foto antes de adicionar outra.",
          true
        );
        break;
      }
      adicionadas++;
    } catch (erro) {
      recado(`Não consegui ler "${arquivo.name}": ${erro.message}`, true);
    }
  }

  entradaFoto.value = "";
  desenharGaleria();

  if (adicionadas > 0) {
    recado(
      `${adicionadas} foto(s) adicionada(s). Escreva a legenda de cada uma — e use "Salvar arquivo" para guardar a foto na pasta imagens/ do trabalho.`
    );
  }
});

/* Botão "colocar/tirar imagens": mostra a manipulação do DOM ao vivo.
   Tirar não apaga nada — só remove os cards da página; colocar
   redesenha a galeria inteira a partir dos dados. */

const botaoAlternar = document.getElementById("botao-alternar-fotos");
let imagensNoSite = true;

botaoAlternar.addEventListener("click", () => {
  imagensNoSite = !imagensNoSite;
  botaoAdicionar.disabled = !imagensNoSite;

  if (imagensNoSite) {
    desenharGaleria();
    botaoAlternar.textContent = "Tirar imagens do site";
    recado("Imagens de volta ao site.");
  } else {
    galeria.innerHTML = "";
    const vazio = document.createElement("p");
    vazio.className = "galeria-vazia";
    vazio.textContent =
      "As imagens foram tiradas do site — mas nada foi apagado. " +
      "Clique em “Colocar imagens no site” para elas voltarem.";
    galeria.appendChild(vazio);
    botaoAlternar.textContent = "Colocar imagens no site";
    recado("Imagens tiradas do site.");
  }
});

/* Fechar a foto ampliada */

document.getElementById("lupa-fechar").addEventListener("click", fecharLupa);

lupa.addEventListener("click", (evento) => {
  if (evento.target === lupa) fecharLupa();
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && !lupa.hidden) fecharLupa();
});

/* ── 8. Ano do rodapé ──────────────────────────────────── */

document.getElementById("ano").textContent = new Date().getFullYear();
