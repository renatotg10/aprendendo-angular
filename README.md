# 🚀 Férias Produtivas — Angular + Spring Boot + PostgreSQL

Projeto criado durante 15 dias de estudo estruturado com foco em:

- Angular 21 (frontend)
- Spring Boot (backend)
- PostgreSQL
- Docker (etapa futura)

Este repositório contém a etapa inicial do frontend em Angular.

---

## 📌 Objetivo do Projeto

Construir uma aplicação completa do zero, seguindo boas práticas e evolução progressiva:

1. Estrutura base do Angular
2. Rotas e navegação
3. Formulários reativos com validação
4. Service + dados em memória
5. Integração com API
6. Dockerização

---

## 🛠 Tecnologias

- Angular 21 (Standalone API)
- TypeScript
- Node.js
- HTML5
- CSS

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, instale:

- Node.js (versão LTS recomendada)
- Angular CLI 21

Verifique as versões:

```bash
node -v
npm -v
ng version
````

Se não tiver Angular CLI:

```bash
npm install -g @angular/cli@21
```

---

## 📥 Como clonar e rodar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/renatotg10/aprendendo-angular.git
```

### 2️⃣ Acessar a pasta do projeto

```bash
cd aprendendo-angular
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Rodar a aplicação

```bash
ng serve -o
```

A aplicação estará disponível em:

```
http://localhost:4200
```

---

## 🗂 Estrutura do Projeto

```
src/
 ├── app/
 │   ├── app.ts
 │   ├── app.routes.ts
 │   ├── app.config.ts
 │   ├── features/
 │   │   ├── home/
 │   │   ├── list/
 │   │   └── create/
 │   └── models/
 │       └── person.ts
```

---

## 📅 Progresso Atual

### ✅ Dia 1

* Projeto Angular criado
* Estrutura standalone compreendida
* Primeiro componente (Home)
* Rota inicial funcionando

### ✅ Dia 2

* Implementação de rotas
* Navegação entre páginas
* Estrutura inicial de layout

### ✅ Dia 3

* Formulário reativo
* Validações com Angular 21 (@if)
* Controle de submit
* Debug de dados exibido em tela

### ✅ Dia 4

* Criação do PersonService (singleton global)
* Implementação de armazenamento em memória (array local)
* Método add() para cadastro de registros
* Método getAll() para listagem
* Integração do formulário com o service
* Navegação programática após cadastro
* Implementação da listagem utilizando @for (Angular moderno)
* Exibição condicional com @if quando não há registros

---

### ✅ Dia 5

* Implementação de edição de registros (Update)
* Reutilização do componente de cadastro para edição
* Parametrização de rota (create/:id)
* Uso do ActivatedRoute para captura de parâmetros
* Implementação do método update() no service
* Carregamento de dados no formulário com patchValue()
* Navegação entre listagem e edição
* Evolução do CRUD no frontend (Create + Read + Update)

---

### ✅ Dia 6

* Refatoração e organização da estrutura do projeto
* Padronização de componentes e limpeza de código
* Ajustes de configuração do TypeScript (rootDir)
* Implementação de feedback de navegação (mensagem de sucesso)
* Correção de roteamento para edição de registros
* Implementação da operação de exclusão (Delete)
* Conclusão do CRUD frontend com gerenciamento em memória

---

## 📌 Próximos Passos

* Criar Service com dados em memória
* Implementar listagem dinâmica
* Integração com backend
* Dockerização completa

---

## 🎯 Objetivo Final

Subir toda a stack com:

```bash
docker-compose up
```

E ter uma aplicação full stack funcional.

---

## 📚 Observações

Projeto desenvolvido com foco em aprendizado estruturado, constância e evolução técnica progressiva.

Sem over-engineering.
Sem atalhos.
Construção consciente.

---

## 📚 Documentação do Desenvolvimento

A documentação detalhada de como este projeto está sendo desenvolvido, incluindo decisões técnicas e evolução por etapas, está disponível em:

```bash
documents/Projeto_Férias_Produtivas_Angular__Spring_Boot__PostgreSQL.md
```

---
## 👨‍💻 Autor

Desenvolvido por Renato Gomes - renatotg10@gmail.com
