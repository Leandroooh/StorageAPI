# 🏆 Desafio: Sistema de Gestão de Inventário

## 📌 Objetivo
Criar uma API em **Express** para gerenciar um inventário de produtos, permitindo operações como adição, listagem, atualização e remoção de itens.

---

## 🔥 Funcionalidades Principais

1. **Adicionar um produto**  
   - Cada produto deve ter: **nome, categoria, quantidade em estoque e preço**.

2. **Listar todos os produtos**  
   - Endpoint para retornar a lista completa do inventário.

3. **Buscar produtos**  
   - Deve ser possível buscar produtos pelo **nome** ou **categoria**.

4. **Atualizar informações de um produto**  
   - Permitir a alteração de **preço** ou **quantidade em estoque**.

5. **Deletar um produto**  
   - Endpoint para remover um produto do inventário.

---

## 🔧 Requisitos Extras (Para um desafio maior)

✅ **Evitar estoque negativo**  
   - Se a quantidade for menor que zero, impedir a operação.  

✅ **Registrar vendas**  
   - Criar um endpoint para registrar uma venda e **decrementar** a quantidade dos produtos vendidos.  

✅ **Registro de logs**  
   - Cada operação (adição, remoção, venda, etc.) deve ser registrada para auditoria.  

---

## 🚀 Desafios Extras (Se quiser elevar a dificuldade)
- Criar um **histórico de movimentações** (adição, remoção, vendas).  
- Gerar **relatórios de vendas** com total faturado.  

⚡ **Dica:** Esse desafio vai treinar conceitos como **CRUD**, **rotas REST**, **manipulação de dados no servidor** e **boas práticas com Express**.  
