# ✨ Signal Forms Demo Before

Projeto didático em Angular que explora a criação e o comportamento de formulários orientados a sinais com a API **Signal Forms** (`@angular/forms/signals`). A aplicação acompanha exemplos progressivos de cadastro: começa com a ligação entre um modelo reativo e os campos do formulário e avança para validação, campos dinâmicos, controles personalizados e submissão.

> [!IMPORTANT]
> Signal Forms é uma API experimental do Angular 22. Este repositório é um projeto de estudo, não um formulário de produção. A API pode mudar e as verificações de disponibilidade e submissão incluídas aqui são simuladas.

## 🎯 Sobre a aplicação

A tela principal demonstra um formulário de criação de conta construído a partir de um `signal` como fonte dos dados e de `form()` como definição do estado do formulário. Os campos são conectados no template com `FormField`; o estado expõe informações como validade, interação, erros e submissão sem manter uma cópia paralela dos valores.

O exemplo atualmente exibido é o `Form6`. Ele apresenta validações para nome de usuário e e-mail, uma verificação assíncrona e simulada da disponibilidade do nome de usuário, mensagens de estado enquanto a verificação está pendente e o fluxo de envio com tratamento simulado de indisponibilidade do serviço. O JSON do modelo também aparece na tela para facilitar a observação dos valores.

Os demais componentes mostram a evolução dos conceitos em etapas. Entre os exemplos estão validações síncronas e personalizadas, validação entre campos, regras assíncronas com debounce, campos condicionais, listas dinâmicas de e-mails alternativos e um controle de idade personalizado compatível com Signal Forms. O componente exibido pode ser trocado em `src/app/app.html`.

## 🎓 O que aprendemos neste projeto

- Criar um modelo de formulário com `signal()` e derivar dele a árvore de campos com `form()`.
- Associar controles nativos ao estado do formulário usando a diretiva `FormField`.
- Declarar regras de validação como `required`, `email`, `min`, `max`, `minLength`, `maxLength` e `pattern`.
- Escrever validações personalizadas e entre campos com `validate()`.
- Executar validações assíncronas com `validateAsync()`, `resource()` e `debounce()` e apresentar o estado pendente.
- Controlar campos com regras dinâmicas de leitura, desativação, visibilidade e obrigatoriedade condicional.
- Validar coleções com `applyEach()` e atualizar arrays no modelo.
- Integrar um controle personalizado com `FormValueControl`, sem implementar `ControlValueAccessor`.
- Configurar o envio com `FormRoot` e `submission.action`, incluindo estados de submissão e erros retornados pelo serviço.
- Reconhecer as limitações de uma API experimental e avaliar quando faz sentido adotá-la ou migrar formulários existentes.

## 🛠️ Tecnologias utilizadas

| Tecnologia                                      | Utilização                                                    |
| ----------------------------------------------- | ------------------------------------------------------------- |
| Angular 22.1                                    | Framework da aplicação e componentes standalone               |
| Angular Signal Forms (`@angular/forms/signals`) | Modelo, campos, estado, validação e submissão dos formulários |
| TypeScript 6                                    | Tipagem e implementação dos componentes                       |
| RxJS 7                                          | Biblioteca reativa incluída nas dependências do Angular       |
| SCSS                                            | Estilos globais e estilos dos componentes                     |
| Vitest e jsdom                                  | Execução de testes unitários no ambiente DOM simulado         |
| npm                                             | Instalação e execução dos scripts do projeto                  |

## 📋 Pré-requisitos e dependências

- Git para clonar o repositório.
- Node.js compatível com Angular 22. As dependências do Angular neste projeto requerem, entre as linhas atuais, Node.js `22.22.3` ou superior na linha 22, `24.15.0` ou superior na linha 24, ou `26.0.0` ou superior.
- npm. O projeto declara npm `11.17.0` como gerenciador de pacotes.
- Acesso à internet na primeira instalação das dependências.

As dependências de execução e desenvolvimento estão declaradas em `package.json`; `package-lock.json` registra as versões resolvidas para instalação reproduzível. A API Signal Forms usada pelo projeto é experimental.

## 🚀 Como clonar, instalar e executar

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/marcionavarro/udemy-modern-angular-forms
cd signal-forms-demo-before
```

### 2️⃣ Instalar as dependências

Na raiz do projeto, execute:

```bash
npm ci
```

### 3️⃣ Iniciar o servidor de desenvolvimento

```bash
npm start
```

Abra [http://localhost:4200](http://localhost:4200). O servidor recarrega a aplicação quando os arquivos de origem são alterados.

### 4️⃣ Executar testes e build

Para rodar os testes unitários:

```bash
npm test
```

Para gerar a build de produção:

```bash
npm run build
```

Os artefatos da build são gerados em `dist/`. Também é possível executar `npm run watch` para reconstruir o projeto ao detectar alterações.

## 📸 Screenshots

<!-- ![Formulário de cadastro](screenshots\form_completo.png) -->

Formulario de cadastro

<div style="display:flex; width: 100%; max-width: 870px;">
    <img src="screenshots\preview_1.gif" alt="Clique aqui para ver o GIF animado">
    <img src="screenshots\preview_2.gif" alt="Clique aqui para ver o GIF animado">
</div>

## 📁 Estrutura de diretórios

```text
.
├── docs/                       # Slides sobre os tópicos de Signal Forms
├── public/assets/              # Recursos estáticos, incluindo ícones SVG
├── src/
│   ├── main.ts                 # Inicialização da aplicação Angular
│   ├── styles.scss             # Estilos globais
│   └── app/
│       ├── app.ts              # Componente raiz
│       ├── app.html            # Seleção do exemplo apresentado na tela
│       ├── app.routes.ts       # Configuração de rotas
│       ├── age-stepper/        # Exemplo de controle personalizado de idade
│       ├── form/               # Primeiro formulário com Signal Forms
│       ├── form-2/             # Validações integradas
│       ├── form-3/             # Validações personalizadas e entre campos
│       ├── form-4/             # Validação assíncrona
│       ├── form-5/             # Campos dinâmicos e listas de e-mails
│       ├── form-6/             # Exemplo de submissão exibido atualmente
│       └── service/            # Serviços simulados usados pelos exemplos
├── angular.json                # Configuração do Angular CLI
├── package.json               # Dependências e scripts npm
└── package-lock.json          # Versões exatas das dependências
```

## 📚 Recursos e links úteis

- [Angular Signal Forms: visão geral](https://angular.dev/guide/forms/signals/overview)
- [Angular Signal Forms: validação](https://angular.dev/guide/forms/signals/validation)
- [Angular CLI: documentação e comandos](https://angular.dev/tools/cli)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do RxJS](https://rxjs.dev/)
- [Documentação do Vitest](https://vitest.dev/)
- [Slides 1 e 2: introdução e primeiro Signal Form](docs/slides1.pdf) · [slides2.pdf](docs/slides2.pdf)
- [Slides 3 e 4: validações integradas, personalizadas e entre campos](docs/slides3.pdf) · [slides4.pdf](docs/slides4.pdf)
- [Slides 5 e 6: validação assíncrona e estado global](docs/slides5.pdf) · [slides6.pdf](docs/slides6.pdf)
- [Slides 7, 8 e 9: estado dinâmico, coleções e controles personalizados](docs/slides7.pdf) · [slides8.pdf](docs/slides8.pdf) · [slides9.pdf](docs/slides9.pdf)
- [Slides 10, 11 e 12: ciclo de submissão, erros do servidor e boas práticas](docs/slides10.pdf) · [slides11.pdf](docs/slides11.pdf) · [slides12.pdf](docs/slides12.pdf)
