export type Categoria = 
"processador" | 
"placa-mãe" | 
"placa de vídeo" | 
"fonte" | 
"memória RAM" | 
"HD/SSD" | 
"cooler" | 
"periféricos" | 
"acessórios"

export type Produto = {
    id: number; 
    nome: string; 
    categoria: Categoria; 
    preco: number;
    estoque: number;
}

export type DadosAtualizacaoProduto = Partial<Omit<Produto, "id">>;

export type Endereco = {
    estado: string;
    cidade: string; 
    bairro: string; 
    rua: string; 
    numero: number; 
}

export type Cliente = {
    nome: string; 
    id: number; 
    email: string;
    cpf: string; 
    idade: number; 
    endereco: Endereco; 
}

export type ItemCarrinho = { 
    produto: Produto; 
    quantidade: number; 
}

export type Carrinho = {
    cliente: Cliente;
    itemCarrinho: ItemCarrinho[]; 
}

export type StatusPedido = "pendente" | "pago" | "enviado"

export type ItemPedido = {
    produto: Produto; 
    quantidade: number; 
    precoUnitario: number; 
}

export type Pedido = {
    carrinho: ItemCarrinho[]; 
    cliente: Cliente; 
    idDoPedido: number; 
    statusPedido: StatusPedido; 
    valorTotal: number; 
    dataDoPedido: string; 
}