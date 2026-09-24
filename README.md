# Petshop Day - Plataforma de Agendamento

Aplicação web para gerenciamento de agendamentos em um petshop.
O sistema permite consultar os agendamentos por data, visualizar os horários organizados por período e criar novos agendamentos.

## Tecnologias

### Frontend

- HTML5
- CSS3
- JavaScript (ES6 Modules)

### Dependências (npm)

- **dayjs** `^1.11.23` - Manipulação e comparação de datas
- **json-server** `^1.0.0-beta.15` - Servidor mock para a API

### Desenvolvimento

- **Webpack** `^5.111.1` - Bundler
- **Babel** `^8.0.6` - Transpilador JavaScript
- **webpack-dev-server** `^6.0.0` - Servidor de desenvolvimento
- **html-loader** - Processamento de arquivos HTML
- **babel-loader** - Integração do Babel com o Webpack

## Instalação

### Pré-requisitos

- Node.js v14 ou superior
- npm

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/guilhermexpc/rocketseat-fs-desafio-agendamento-petshop.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd rocketseat-fs-desafio-agendamento-petshop
   ```

<details>

<summary> Instalação das dependencias </summary>

```bash
npm install
```

4. Inicie a API mock em um terminal:

   ```bash
   npm run server
   ```

   A API estará disponível em `http://localhost:3004`.

5. Inicie a aplicação em outro terminal:

   ```bash
   npm run dev
   ```

 </details>
 
## Funcionalidades

- Seleção de data pelo calendário
- Consulta de agendamentos por dia
- Organização dos agendamentos em ordem crescente de horário
- Separação dos cards nos períodos da manhã, tarde e noite
- Criação de novos agendamentos
- Validação de horários já ocupados

## Arquitetura Técnica

### Estrutura do Projeto

```
src/
├── assets/           # Ícones e recursos visuais
├── libs/             # Bibliotecas utilizadas no projeto
├── modules/          # Regras e componentes da interface
│   ├── card/         # Renderização dos cards de agendamento
│   └── form/         # Formulário e carregamento de horários
├── service/          # Comunicação com a API
├── styles/           # Arquivos de estilo
└── utils/            # Funções utilitárias
```

### API e Endpoints

A aplicação utiliza o `json-server` como uma API mock baseada no arquivo `db.json`.

| Método | Endpoint    | Descrição                         |
| ------ | ----------- | --------------------------------- |
| `GET`  | `/schedule` | Lista os agendamentos cadastrados |
| `POST` | `/schedule` | Cria um novo agendamento          |

**Base URL:** `http://localhost:3004`

**Configuração da API:** `src/service/api-config.js`

### Fluxo de Dados

1. **Carregamento dos agendamentos** (`schedule-fetch.js`)
   - Busca os dados em `GET /schedule`.
   - Filtra os registros pela data selecionada usando Day.js.
   - Ordena os resultados pelo campo `dateFull`.

2. **Renderização dos cards** (`renderCard.js`)
   - Divide os agendamentos nos períodos da manhã, tarde e noite.
   - Cria os cards com as informações do tutor, pet, serviço e horário.
   - Adiciona separadores somente entre cards do mesmo período.

3. **Criação de agendamentos** (`schedule-new.js`)
   - Monta o objeto do novo agendamento.
   - Envia os dados para `POST /schedule`.

### Scripts disponíveis

```bash
npm run dev     # Inicia o servidor de desenvolvimento do Webpack
npm run server  # Inicia a API mock com json-server
npm run build   # Gera a versão de produção em dist/
```
