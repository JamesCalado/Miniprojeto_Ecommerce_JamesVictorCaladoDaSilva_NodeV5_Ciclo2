import type { Cliente, StatusPedido, ItemPedido, Pedido, ItemCarrinho, Produto, Carrinho } from "./types"

const pedidos: Pedido[] = [];

function finalizarPedido(carrinho: Carrinho, clientes: Cliente[], produtos: Produto[]): void {
if (carrinho.itemCarrinho.length === 0) {
    console.log("É necessário adicionar pelo menos um item para finalizar um pedido!");
    return; 
} else if (!clientes.some(cliente => cliente.id === carrinho.cliente.id)) {
    console.log("Cliente não cadastrado!")
    return; 
} for (const item of carrinho.itemCarrinho) {
    const produto = produtos.find(p => p.id === item.produto.id);
    if (!produto) {
        console.log("Produto não encontrado no catálogo!"); 
        return; 
    }
    if (item.quantidade > produto.estoque) {
        console.log(`Estoque insuficiente para ${produto.nome}`);
        return;
    }
} 

const itensPedido = carrinho.itemCarrinho.map((ip) => ({
    produto: produtos.find(p => p.id === ip.produto.id)!,
    quantidade: ip.quantidade,
    precoUnitario: produtos.find(p => p.id === ip.produto.id)!.preco
}));

const valorTotal = itensPedido.reduce((total, item) => {
return total + item.precoUnitario * item.quantidade; 
}, 0)

const idDoPedido = pedidos.length + 1;

const pedido: Pedido = {
    carrinho: itensPedido,
    cliente: carrinho.cliente, 
    idDoPedido: idDoPedido, 
    statusPedido: "pendente", 
    valorTotal: valorTotal, 
    dataDoPedido: new Date().toISOString()
};

pedidos.push(pedido);
console.log("Pedido finalizado com sucesso!");

for (const item of carrinho.itemCarrinho) {
    const produto = produtos.find(p => p.id === item.produto.id)!;
    produto.estoque -= item.quantidade;
}

carrinho.itemCarrinho.length = 0;

}

function listarPedidos(): Pedido[] {
    return pedidos;
}

function listarPedidosPorCliente(idCliente: number): Pedido[] {
    return pedidos.filter(pedido => pedido.cliente.id === idCliente);
}

export = { pedidos, finalizarPedido, listarPedidos, listarPedidosPorCliente };