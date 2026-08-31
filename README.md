# Trabalho 3: Semântica e Acessibilidade Web

Repositório destinado ao Trabalho 3 da disciplina de Desenvolvimento Web do curso de Ciência da Computação da Universidade Federal de Roraima (UFRR). 

O projeto consiste na análise comparativa e refatoração de um blog/portfólio pessoal, focado em elevar as métricas de Acessibilidade, Performance, SEO e Boas Práticas a 100% no Google Lighthouse.

## Estrutura do Repositório

O projeto foi dividido em duas versões para evidenciar o contraste entre um código mal estruturado e um código construído sob os padrões da web moderna:

* **Versão 1 (`index.html` e `style.css`):** Código contendo falhas intencionais, como uso excessivo de `<div>` (semântica inadequada), layout quebrado em dispositivos móveis, baixo contraste de cores (falha WCAG) e elementos interativos inacessíveis via teclado.
* **Versão 2 (`versao2.html` e `style2.css`):** Código refatorado aplicando landmarks do HTML5 (`<header>`, `<main>`, `<article>`, `<aside>`), CSS Grid Mobile-First, variáveis de alto contraste, otimização de imagens (LCP/CLS) e atributos nativos ARIA (`aria-expanded`) para tecnologias assistivas.
* **`img/`:** Diretório contendo as mídias locais otimizadas do projeto.
* **`relatorio_trabalho3.pdf`:** Relatório técnico gerado em LaTeX detalhando a refatoração e a auditoria comparativa no Google Lighthouse.

## 🛠️ Tecnologias e Ferramentas

* **HTML5:** Estruturação semântica e atributos de acessibilidade.
* **CSS3:** Variáveis customizadas, CSS Grid Layout e tipografia responsiva.
* **JavaScript:** Manipulação do DOM e controle de estados ARIA para leitores de tela.
* **Google Lighthouse:** Auditoria de métricas (Core Web Vitals e Acessibilidade).
* **LaTeX:** Formatação do relatório acadêmico final.

## 👨‍💻 Autor

**Lucas Matheus Nobre Coelho**  
Discente de Ciência da Computação (DCC).
