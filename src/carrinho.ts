import type { Cliente, ItemCarrinho, Produto, Carrinho } from "./types"

function adicionarAoCarrinho(carrinho: Carrinho, produto: Produto, quantidade: number): void{ 
    const itemExistente = carrinho.itemCarrinho.find(item => item.produto.id === produto.id);
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
            console.log("Quantidade deve ser inteira e maior que 0!");
            return; 
        } else if (quantidade + (itemExistente?.quantidade ?? 0) > produto.estoque) {
            console.log(`Estoque insuficiente! Apenas ${produto.estoque} unidades disponíveis!`);
            return; 
        } else if (!itemExistente) {
            carrinho.itemCarrinho.push({ produto, quantidade });
            console.log("Produto adicionado!");
        } else if (itemExistente) {
            itemExistente.quantidade += quantidade;
            console.log("Quantidade atualizada!");
        }
    
}