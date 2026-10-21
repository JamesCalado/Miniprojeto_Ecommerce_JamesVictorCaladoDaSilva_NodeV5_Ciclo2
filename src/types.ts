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

type itemCarrinho = { 
    produto: Produto; 
    quantidade: number; 
}

type Carrinho = {
    itemCarrinho: itemCarrinho[]; 
}

type StatusPedido = "pendente" | "pago" | "enviado"

type Pedido = {
    carrinho: itemCarrinho[]; 
    cliente: Cliente; 
    numeroDoPedido: number; 
    statusPedido: StatusPedido; 
}