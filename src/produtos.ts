import type { Produto } from "./types";
import type { DadosAtualizacaoProduto } from "./types"

const Produtos: Produto[] = [
    {id: 1, nome: "i3 13100f", categoria: "processador", preco: 779.00,
     estoque: 32}, 
    {id: 2, nome: "i5 13400f", categoria: "processador", preco: 1500.00, 
     estoque: 25
    }
]

function cadastrarProdutos(dadosDoProduto: Produto) {
    const produtoExistente = Produtos.find(produto => produto.id === dadosDoProduto.id);
    if (produtoExistente) {
        console.log("Id já cadastrado!")
        return; 
    } else if (dadosDoProduto.nome.trim() === "") {
        console.log("É preciso inserir um nome ao produto!")
        return; 
    } else if (dadosDoProduto.preco === 0) {
        console.log("O preço deve ser maior que 0!") 
        return; 
    } else if (dadosDoProduto.estoque !== undefined &&
        (!Number.isInteger(dadosDoProduto.estoque) || dadosDoProduto.estoque < 0)) {
        console.log("Não é possível cadastrar um produto com estoque negativo!")
        return;
    }
    Produtos.push(dadosDoProduto); 
    console.log("Produto cadastrado com sucesso!")
}

cadastrarProdutos({
    id: 3, 
    nome: "I5 81293", 
    categoria: "processador", 
    preco: 4444, 
    estoque: -1
})

function mostrarProdutosDisponiveis(Produtos: Produto[]) {
   Produtos.forEach(produto => {
    if(produto.estoque > 0) {
        console.log(produto);
    }})
}

function buscarProdutoPeloId(Produtos: Produto[], id: number) {
    let produtoDesejado: Produto | undefined = Produtos.find(produto => id === produto.id);
    
    if (!produtoDesejado) {
        console.log("Nenhum produto correspondente ao identificador buscado foi encontrado!")
        return; 
    }
    
    console.log(produtoDesejado);
}

function buscarProdutoPeloNome(Produtos: Produto[], termo: string) {
    let produtoDesejado = Produtos.filter(produto => produto.nome.includes(termo));
    
    if (!produtoDesejado) {
        console.log("Nenhum produto correspondente ao termo buscado foi encontrado!")
        return; 
    }
    
    console.log(produtoDesejado);
}; 

function filtrarProdutosPorCategoria(Produtos: Produto[], categoriaBuscada: string) {
    let categoriaDesejada = Produtos.filter(produto => produto.categoria === categoriaBuscada)
    
    if (!categoriaDesejada) {
        console.log("Categoria não encontrado!")
        return; 
    }

    console.log (categoriaDesejada);

}

function atualizarProduto(Produtos: Produto[], id: number, dadosAtualizados: DadosAtualizacaoProduto) {
    let produtoAtualizado: Produto | undefined = Produtos.find(produto => id === produto.id);

    if (!produtoAtualizado) {
        console.log("Produto não encontrado!");
        return;
    } else if (Object.keys(dadosAtualizados).length === 0) {
        console.log("Nenhum campo informado para atualização!");
        return;
    } else if (Object.values(dadosAtualizados).some(
        valor => typeof valor === "string" && valor.trim() === "")
    ) {
        console.log("Não é possível campo de texto em branco!");
        return;
    } else if (
        dadosAtualizados.preco !== undefined &&
        (!Number.isFinite(dadosAtualizados.preco) || dadosAtualizados.preco <= 0)
    ) {
        console.log("O preço deve ser maior que zero!");
        return;
    } else if (
        dadosAtualizados.estoque !== undefined &&
        (!Number.isInteger(dadosAtualizados.estoque) || dadosAtualizados.estoque < 0)
    ) {
        console.log("O estoque deve ser um número inteiro maior ou igual a zero!");
        return;
    }

    Object.assign(produtoAtualizado, dadosAtualizados);

    console.log("Produto atualizado com sucesso!");
}

function removerProduto(Produtos: Produto[], id: number) {
    const indice = Produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        console.log("Produto não encontrado!");
        return;
    }

    Produtos.splice(indice, 1);

    console.log("Produto removido com sucesso!");
}

export = { Produtos, cadastrarProdutos, mostrarProdutosDisponiveis, buscarProdutoPeloId, buscarProdutoPeloNome,
    filtrarProdutosPorCategoria, atualizarProduto, removerProduto}; 

