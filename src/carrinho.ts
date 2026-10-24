import type { Cliente, ItemCarrinho, Produto, Carrinho } from "./types"
import Produtos = require("./produtos");

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

function removerDoCarrinho(carrinho: Carrinho, id: number, quantidade: number): void {

    const itemExistente = carrinho.itemCarrinho.find(item => item.produto.id === id);

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
    console.log("A quantidade deve ser inteira e maior que 0!");
    return; 
    } else if (!itemExistente) {
    console.log("Produto não encontrado!");
    return; 
    } else if (quantidade >= itemExistente.quantidade) {
    const indice = carrinho.itemCarrinho.findIndex(item => item.produto.id === id);
    carrinho.itemCarrinho.splice(indice, 1);
    console.log("Produto removido com sucesso!")
    } else { 
    itemExistente.quantidade -= quantidade;
    console.log(`${quantidade} unidade(s) do produto removida(s) com sucesso!`);
    }


}

function listarCarrinho(carrinho: Carrinho): void {
    carrinho.itemCarrinho.forEach(item => {
        console.log(`Produto: ${item.produto.nome}`);
        console.log(`Id: ${item.produto.id} `);
        console.log(`Quantidade: ${item.quantidade}`);
        console.log(`Preço unitário: R$ ${item.produto.preco.toFixed(2)}`);
        console.log(`Subtotal: R$ ${(item.produto.preco * item.quantidade).toFixed(2)}`);
    });
}

function calcularValorTotal(carrinho: Carrinho): number {
    return carrinho.itemCarrinho.reduce((total, item) => {
        return total + item.produto.preco * item.quantidade; 
    }, 0)
}


export = {
  adicionarAoCarrinho,
  removerDoCarrinho,
  listarCarrinho,
  calcularValorTotal
};   