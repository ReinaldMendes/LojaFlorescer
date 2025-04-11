
```markdown
🌸 Loja Florescer - API de Gestão de Estoque

API RESTful para gerenciamento completo de produtos, entradas, saídas, fornecedores e usuários, com autenticação segura via JWT.

🔗 Deploy:[lojaflorescer.onrender.com](https://lojaflorescer.onrender.com)  
📡 Base URL: `https://lojaflorescer.onrender.com/api`

---

 🔐 Autenticação

Todas as rotas (exceto login e cadastro) requerem token JWT.  
Inclua o token no header:

```
Authorization: Bearer <token>
```

---

👥 Usuários

🔸 `POST /signup`  
Cria um novo usuário.

```json
{
  "name": "Maria",
  "email": "maria@email.com",
  "password": "Senha123"
}
```

 🔸 `POST /login`  
Autentica usuário e retorna o token JWT.

```json
{
  "email": "maria@email.com",
  "password": "Senha123"
}
```

### 🔸 `GET /users` *(Admin)*  
Lista todos os usuários.  

### 🔸 `GET /users/:id`  
Busca usuário por ID.

### 🔸 `PUT /users/:id`  
Atualiza dados do usuário.

### 🔸 `DELETE /users/:id` *(Admin)*  
Remove um usuário.

---

## 📦 Produtos

### 🔸 `GET /produtos`  
Lista todos os produtos.

### 🔸 `POST /produtos` *(Admin)*  
Cria um novo produto.

```json
{
  "codigo": "001",
  "descricao": "Sabonete Artesanal",
  "unidade": "un",
  "fornecedor": "Fornecedor A",
  "estoque_minimo": 5,
  "estoque_inicial": 20,
  "preco_fornecedor": 4,
  "margem_percentual": 50,
  "preco_venda": 6
}
```

---

## 🏬 Fornecedores

### 🔸 `GET /fornecedores`  
Lista todos os fornecedores.

### 🔸 `POST /fornecedores` *(Admin)*  
Adiciona novo fornecedor.

```json
{
  "nome": "FlorDistribuidora",
  "cnpj": "00.000.000/0001-00",
  "telefone": "(42) 99999-9999",
  "email": "contato@flordistribuidora.com",
  "endereco": "Rua das Rosas, 123",
  "produtos_fornecidos": ["001", "002"]
}
```

---

## 📥 Entradas de Estoque

### 🔸 `GET /entradas`  
Lista entradas de produtos.

### 🔸 `POST /entradas` *(Admin)*  
Registra nova entrada no estoque.

```json
{
  "produto": "PRODUCT_ID",
  "fornecedor": "FORNECEDOR_ID",
  "quantidade": 30,
  "preco_unitario": 5.00
}
```

---

## 📤 Saídas de Estoque

### 🔸 `GET /saidas`  
Lista saídas de produtos.

### 🔸 `POST /saidas`  
Registra uma nova saída do estoque.

```json
{
  "produto": "PRODUCT_ID",
  "quantidade": 10,
  "preco_unitario": 6.00
}
```

---

## 🛡️ Segurança & Middleware

- `jwtAuthenticator`: protege rotas com token.
- `authorizer("ADMINISTRATOR")`: apenas administradores podem acessar certas rotas.

---

## 🧪 Testando com Postman

1. Faça login com `/login`
2. Copie o token JWT retornado.
3. Nas requisições protegidas, adicione no Header:
```
Authorization: Bearer <token>
```

---

## ⚙️ Tecnologias Usadas

- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticação
- Bcrypt para hash de senhas

---

## 🧑‍💻 Desenvolvedor

**[Reinald Mendes]**  
Desenvolvedor Full Stack e entusiasta de soluções para microempreendedores.

---

## 🤝 Contribua

Pull requests são bem-vindos! Para sugestões ou melhorias, abra uma issue.

---

## 📄 Licença

Este projeto está sob a licença MIT.
```



