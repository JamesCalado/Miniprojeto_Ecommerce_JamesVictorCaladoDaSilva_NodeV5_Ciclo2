import type { Categoria, Produto, DadosAtualizacaoProduto, Endereco, Cliente, ItemCarrinho, Carrinho, 
    StatusPedido, ItemPedido, Pedido } from "./types"

import clientesImport = require("./clientes");
const { clientes, cadastrarClientes, mostrarClientes, buscarCliente} = clientesImport;

import carrinhoImport = require("./carrinho");
const { adicionarAoCarrinho, removerDoCarrinho, listarCarrinho, calcularValorTotal } = carrinhoImport;

import pedidosImport = require("./pedidos");
const { pedidos, finalizarPedido, listarPedidos, listarPedidosPorCliente} = pedidosImport;

import produtosImport = require("./produtos"); 
const { Produtos, cadastrarProdutos, mostrarProdutosDisponiveis, buscarProdutoPeloId, buscarProdutoPeloNome,
    filtrarProdutosPorCategoria, atualizarProduto, removerProduto } = produtosImport;


