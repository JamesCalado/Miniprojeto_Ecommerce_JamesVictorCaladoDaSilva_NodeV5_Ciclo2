type Categoria = 
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

type Endereco = {
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

type StatusPedido = "pendente" | "pago" | "enviado"

type Pedido = {
    carrinho: ItemCarrinho[]; 
    cliente: Cliente; 
    numeroDoPedido: number; 
    statusPedido: StatusPedido; 
}