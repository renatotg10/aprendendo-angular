# Férias Produtivas — Angular + Spring Boot + PostgreSQL

## **Angular 21 usa standalone.**

**Arquivos principais:**

- main.ts → bootstrap
- app.ts → componente raiz
- app.html → template raiz
- app.routes.ts → rotas
- app.config.ts → providers globais

Componentes ficam em src/app/features
Rotas entram via router-outlet.

---

## 🧠 Por que usar o CLI?

Porque ele:

- cria no lugar certo
- já coloca `@Injectable`
- já define `providedIn: 'root'`
- mantém padrão do projeto
- evita erro de path

---

## 📌 Boa prática

Sempre que criar:

| Tipo | Comando |
| --- | --- |
| Componente | `ng g c nome` |
| Service | `ng g s nome` |
| Interface | `ng g interface nome` |
| Guard | `ng g guard nome` |

Você está evoluindo para trabalhar como projeto real.

---

# 📅 Dia 1 — Fundação do Projeto Angular

---

## Objetivo do dia

Criar a base do frontend com Angular 21, garantindo que:

- o projeto rode localmente
- a estrutura principal seja compreendida
- o primeiro componente seja criado
- a navegação inicial funcione

Resultado esperado ao final do dia:

> ✅ Aplicação abre no navegador
> 
> 
> ✅ Um componente próprio (“Home”) aparece na tela
> 

Nada além disso.

---

## 1. Verificação do ambiente

Antes de iniciar, verifique se Node.js, npm e Angular CLI estão instalados:

```bash
node -v
npm -v
ng version
```

Caso o Angular CLI não esteja instalado:

```bash
npm install -g @angular/cli@21
```

---

## 2. Criação do projeto Angular

Criar o projeto já com rotas habilitadas:

```bash
ng new ferias-produtivas --style=css --routing=truecd ferias-produtivas
```

Durante o assistente:

- Routing: Yes
- Stylesheet: CSS
- SSR: No

Em seguida, rodar o projeto:

```bash
ng serve -o
```

A aplicação deve abrir em:

```
http://localhost:4200
```

---

## 3. Entendimento inicial da estrutura

O Angular 21 utiliza o modelo **standalone** (sem AppModule).

Arquivos principais:

- `main.ts` → ponto de inicialização da aplicação
- `app.ts` → componente raiz
- `app.html` → template principal
- `app.routes.ts` → definição de rotas
- `app.config.ts` → configurações globais
- `src/app/features` → pasta para componentes/páginas

Esse projeto não utiliza mais `AppModule`.

---

## 4. Criação do primeiro componente

Criar o componente Home:

```bash
ng g c features/home
```

Isso gera:

```
src/app/features/home/
  home.ts
  home.html
  home.css
  home.spec.ts
```

No Angular atual, o CLI cria a classe como:

```tsx
exportclassHome { }
```

(em vez de `HomeComponent`).

Isso é apenas convenção — não afeta o funcionamento.

---

## 5. Configuração da rota inicial

Editar o arquivo:

```
src/app/app.routes.ts
```

Conteúdo:

```tsx
import {Routes }from'@angular/router';import {Home }from'./features/home/home';exportconstroutes:Routes = [
  {path:'',component:Home
  }
];
```

Aqui estamos dizendo:

> ao acessar `/`, mostrar o componente Home.
> 

---

## 6. Preparar o template principal

Abrir:

```
src/app/app.html
```

Substituir todo o conteúdo por:

```html
<router-outlet></router-outlet>
```

O `router-outlet` é o local onde as páginas renderizadas pelas rotas aparecem.

---

## 7. Conteúdo do Home (sinal de vida)

Editar:

```
src/app/features/home/home.html
```

Adicionar:

```html
<h1>Dia 1 OK ✅</h1><p>Angular rodando com componente próprio.</p>
```

---

## 8. Executar novamente

Caso não esteja rodando:

```bash
ng serve -o
```

Acessar:

```
http://localhost:4200
```

Deve aparecer:

```
Dia 1 OK ✅
Angular rodando com componentepróprio.
```

---

## ✅ Conclusão do Dia 1

Ao final deste dia temos:

- Projeto Angular criado
- Servidor local funcionando
- Estrutura básica compreendida
- Primeiro componente criado
- Rota inicial configurada
- Componente exibido no navegador

Com isso, o **Dia 1 está oficialmente concluído**.

Nenhum layout extra, nenhum formulário, nenhuma otimização.

O foco foi apenas fazer o projeto nascer.

---

## ✅ Dia 2 — Rotas + Layout

### 1) Criar as páginas (componentes)

No terminal:

```bash
ng g c features/list
ng g c features/create
```

Agora você terá:

- `Home` (já existe)
- `List`
- `Create`

---

### 2) Criar as rotas

Abra `src/app/app.routes.ts` e deixe assim:

```tsx
import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { List } from './features/list/list';
import { Create } from './features/create/create';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'list', component: List },
  { path: 'create', component: Create },

  // fallback (se digitar rota errada)
  { path: '**', redirectTo: '' },
];
```

---

### 3) Criar um “layout” simples com menu

Abra `src/app/app.html` e substitua por:

```html
<nav style="display:flex; gap:12px; padding:12px; border-bottom:1px solid #ddd;">
  <a routerLink="">Home</a>
  <a routerLink="/list">Listagem</a>
  <a routerLink="/create">Cadastro</a>
</nav>

<main style="padding: 12px;">
  <router-outlet></router-outlet>
</main>
```

⚠️ Se aparecer erro dizendo que `routerLink` não é conhecido, faça o item 3.1 abaixo.

### 3.1) Garantir que o App tem RouterLink (standalone)

Abra `src/app/app.ts` e veja se no `@Component` existe `imports: [...]`.

Deixe assim:

```tsx
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
```

> Alguns projetos já vêm com `RouterOutlet`. Aqui a gente adiciona o `RouterLink`.
> 

---

### 4) Colocar “sinal de vida” nas páginas

Edite:

**`src/app/features/list/list.html`**

```html
<h1>Listagem</h1>
<p>Página de listagem OK ✅</p>
```

**`src/app/features/create/create.html`**

```html
<h1>Cadastro</h1>
<p>Página de cadastro OK ✅</p>
```

(Home você já tem.)

---

### 5) Rodar e testar

```bash
ng serve -o
```

Teste no navegador:

- `http://localhost:4200/` (Home)
- `http://localhost:4200/list` (Listagem)
- `http://localhost:4200/create` (Cadastro)

Clique nos links do menu e confirme que troca a página sem recarregar.

---

## ✅ Resultado esperado do Dia 2

Você termina o dia quando:

✔ existem as 3 páginas

✔ rotas funcionam

✔ menu navega entre elas

Parou. Amanhã (Dia 3) é formulário reativo.

---

## ✅ Dia 3 — Formulários

### 1) Criar uma “model” simples (opcional, mas organizado)

Arquivo `src/app/models/person.ts`

Crie o arquivo com o comando:

```bash
ng g interface models/person
```

Substitua o conteúdo do arquivo por:

```tsx
exportinterfacePerson {
  name:string;
  email:string;
  age:number;
}
```

*(Pode ser “person” mesmo; depois você adapta pro sistema da PM.)*

---

### 2) Transformar a página `Create` em formulário reativo

Abra:

`src/app/features/create/create.ts`

Substitua por isto (ou ajuste se estiver diferente):

```tsx
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  submitted = false;
  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [18, [Validators.required, Validators.min(0), Validators.max(120)]],
    });
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('FORM OK ✅', this.form.getRawValue());
  }
}
```

**O que isso faz:**

- cria um form reativo com 3 campos
- valida “nome”, “email” e “idade”
- no submit: se inválido, marca tudo como tocado
- se válido: imprime no console

---

### 3) Criar o HTML do formulário

Abra:

`src/app/features/create/create.html`

Coloque:

```html
<h1>Cadastro</h1>

<form
  [formGroup]="form"
  (ngSubmit)="submit()"
  style="display: grid; gap: 12px; max-width: 420px;"
>
  <!-- Nome -->
  <div>
    <label>Nome</label><br>
    <input type="text" formControlName="name">

    @if ((form.controls.name.touched || submitted) && form.controls.name.invalid) {
      <div style="color: #b00020;">
        @if (form.controls.name.errors?.['required']) {
          <small>Nome é obrigatório.</small>
        }
        @if (form.controls.name.errors?.['minlength']) {
          <small>Nome deve ter no mínimo 3 letras.</small>
        }
      </div>
    }
  </div>

  <!-- Email -->
  <div>
    <label>E-mail</label><br>
    <input type="email" formControlName="email">

    @if ((form.controls.email.touched || submitted) && form.controls.email.invalid) {
      <div style="color: #b00020;">
        @if (form.controls.email.errors?.['required']) {
          <small>E-mail é obrigatório.</small>
        }
        @if (form.controls.email.errors?.['email']) {
          <small>E-mail inválido.</small>
        }
      </div>
    }
  </div>

  <!-- Idade -->
  <div>
    <label>Idade</label><br>
    <input type="number" formControlName="age">

    @if ((form.controls.age.touched || submitted) && form.controls.age.invalid) {
      <div style="color: #b00020;">
        @if (form.controls.age.errors?.['required']) {
          <small>Idade é obrigatória.</small>
        }
        @if (form.controls.age.errors?.['min']) {
          <small>Idade não pode ser negativa.</small>
        }
        @if (form.controls.age.errors?.['max']) {
          <small>Idade muito alta.</small>
        }
      </div>
    }
  </div>

  <button type="submit">
    Enviar
  </button>
</form>

<hr>

<h3>Debug</h3>
<pre>{{ form.value | json }}</pre>
```

---

### 4) Testar

Rode:

```
ng serve-o
```

1. Vá em:
    
    `http://localhost:4200/create`
    
2. Teste cenários:
- enviar vazio → deve mostrar erros
- email errado → erro de email
- nome curto → erro minlength
- tudo certo → abrir console e ver: `FORM OK ✅ { ... }`

> No navegador: pressione **F12 → Console**.
> 

---

## ✅ Resultado esperado do Dia 3

Você conclui o dia quando:

✔ o formulário aparece

✔ validações funcionam

✔ submit não deixa enviar inválido

✔ imprime os dados no console quando válido

---

# 🟢 Dia 4 — Service + Dados em memória

## 🎯 Objetivo do dia

Você vai:

- Criar um **Service**
- Manter um **array em memória**
- Cadastrar pessoas no array
- Listar na tela
- Usar `@for` (Angular moderno)

No final do dia:

👉 Você cadastra na página `/create`

👉 Vai para `/list`

👉 E vê os dados aparecendo

Sem backend ainda.

---

# 🧩 1️⃣ Criar o Service

No terminal:

```
ng g s services/person
```

Isso cria:

```
src/app/services/person.ts
```

---

## 📁 Ajuste o conteúdo do service

`src/app/services/person.ts`

```tsx
import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  
  private persons: Person[] = [];

  getAll(): Person[] {
    return this.persons;
  }

  add(person: Person): void {
    this.persons.push(person);
  }

}
```

✔ `providedIn: 'root'` → singleton global

✔ array em memória

✔ métodos simples

---

# 🧩 2️⃣ Conectar o Create ao Service

Abra:

`src/app/features/create/create.ts`

Atualize:

```tsx
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PersonService } from '../../services/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  submitted = false;
  form;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router
  ) {
    this.form = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [18, [Validators.required, Validators.min(0), Validators.max(120)]],
    });
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.personService.add(this.form.getRawValue());

    this.form.reset({ name: '', email: '', age: 18});
    this.submitted = false;

    this.router.navigate(['/list']);
  }
}
```

---

## ⚠️ Importante: habilitar Router no componente

Abra `create.ts` e adicione no `imports`:

```
import {Router }from'@angular/router';
```

⚠️ E no `app.ts`, garanta que RouterOutlet e RouterLink estejam importados.

---

# 🧩 3️⃣ Implementar Listagem

Abra:

`src/app/features/list/list.ts`

Substitua por:

```tsx
import { Component } from '@angular/core';
import { PersonService } from '../../services/person';
import { Person } from '../../models/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  persons: Person[] = [];

  constructor(private personService: PersonService) {
    this.persons = this.personService.getAll();
  }

}
```

---

# 🧩 4️⃣ HTML da Listagem (Angular moderno)

`src/app/features/list/list.html`

```html
<h1>Listagem</h1>

@if (persons.length === 0) {
    <p>Nenhum registro cadastrado.</p>
} @else {
    <u>
        @for (person of persons; track person) {
            <li>
                {{ person.name }} - {{ person.email }} - {{ person.age }} anos
            </li>
        }
    </u>
}
```

🔥 Aqui você usa `@for` em vez de `*ngFor`.

---

# 🧪 Teste agora

Rode:

```
ng serve-o
```

1. Vá para `/create`
2. Cadastre uma pessoa
3. Clique enviar
4. Você deve ir para `/list`
5. A pessoa aparece listada

Se funcionar:

🎉 Dia 4 concluído.

---

# 🧠 O que você acabou de aprender

- Service singleton
- Estado em memória
- Injeção de dependência
- Navegação programática
- @for moderno
- Comunicação entre páginas

Agora começa a ficar interessante.

---

# 🧭 Referências

[ChatGPT - 15 Dias Férias Produtivas Angular](https://chatgpt.com/share/699cdab4-f424-8011-8b61-accbd124b616)
