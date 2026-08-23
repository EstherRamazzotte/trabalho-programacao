# JavaScript na Prática

Trabalho escolar de Programação: uma página interativa que ensina JavaScript com
exemplos executáveis direto no navegador — sem nenhuma biblioteca externa.

## O que tem no site

- **Hero animado** — um trecho de código que se digita sozinho e mostra a saída.
- **Introdução** — o que é JavaScript, história e curiosidades.
- **18 exemplos interativos em três níveis**, cada um com um botão
  **▶ Executar** que roda o código de verdade:
  - **Nível 1 · Básico (HTML e CSS)** — primeira página, listas e links, cores e
    fontes, o modelo de caixa e layout com Flexbox. O resultado aparece como uma
    página de verdade, ao lado do código.
  - **Nível 2 · Intermediário (JavaScript)** — variáveis, funções, condicionais,
    laços, arrays, objetos, DOM e eventos, com a saída num console próprio.
  - **Nível 3 · Avançado (movimento)** — transições e `transform`, `@keyframes`,
    a Web Animations API (`element.animate()`), `requestAnimationFrame` e
    animação guiada pela rolagem (`animation-timeline`).
- **Playground** — um editor livre para escrever e executar qualquer código.
- **Nossas atividades** — galeria com as fotos do que aprendemos em sala, com
  botão para adicionar fotos, legenda editável e visualização ampliada.

## Arquivos

| Arquivo      | Função                                        |
| ------------ | --------------------------------------------- |
| `index.html` | Estrutura da página                           |
| `style.css`  | Visual (tema escuro "editor à noite")         |
| `script.js`  | Exemplos, realce de sintaxe, executor, galeria |
| `imagens/`   | Fotos das atividades                          |

## O botão "Adicionar fotos"

A galeria aceita fotos direto pelo navegador: clique em **＋ Adicionar fotos**,
escolha uma ou várias imagens e escreva a legenda de cada uma.

Como o site é estático (não tem servidor), essas fotos ficam guardadas **no
navegador de quem clicou** — elas não entram nos arquivos do trabalho sozinhas.
Por isso cada foto adicionada tem o botão **Salvar arquivo**: ele baixa a imagem
já reduzida (no máximo 1400 pixels de largura), pronta para ser colocada na
pasta `imagens/`. Depois disso ela passa a aparecer para qualquer pessoa que
abrir o site.

## Como colocar as fotos das atividades

1. Salve as fotos na pasta `imagens/` com os nomes `atividade-1.jpg`,
   `atividade-2.jpg`, `atividade-3.jpg` e `atividade-4.jpg`.
2. Abra o `script.js` e, na lista `ATIVIDADES` (seção 7), ajuste o **título** e a
   **legenda** de cada foto para descrever a atividade de verdade.
3. Recarregue a página. Enquanto uma foto não existir, o card mostra
   "foto a incluir" — o site não quebra.

Para ter mais ou menos de quatro fotos, basta acrescentar ou remover itens dessa
lista. Se as fotos forem `.png`, mude a extensão no campo `arquivo`.

## Como ver localmente

Basta abrir o `index.html` no navegador (clique duplo), ou rodar um servidor:

```bash
npx serve .
```

## Como publicar na Vercel

**Opção 1 — pelo site (mais fácil, sem instalar nada):**

1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Suba esta pasta para um repositório no [GitHub](https://github.com).
3. Na Vercel, clique em **Add New → Project**, importe o repositório e clique
   em **Deploy**. Pronto — a Vercel detecta que é um site estático.

**Opção 2 — pela linha de comando:**

```bash
npm install -g vercel
cd "trabalho site"
vercel
```

Responda às perguntas (pode aceitar tudo com Enter) e o link público aparece no
final. Para atualizar depois de mudar algo, rode `vercel --prod`.

---

Feito com HTML, CSS e JavaScript puro.
