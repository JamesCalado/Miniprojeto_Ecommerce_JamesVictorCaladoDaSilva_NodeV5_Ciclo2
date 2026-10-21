import type { Cliente } from "./types"

const clientes: Cliente[] = [{
    nome: "Raquel",
    id: 1, 
    email: "raquel@gmail.com",
    cpf: "123.456.789-10",
    idade: 22,
    endereco: {
        estado: "São Paulo",
        cidade: "Jacareí", 
        bairro: "Centro", 
        rua: "Bobos", 
        numero: 13
    }
},
{
    nome: "Talyson", 
    id: 2, 
    email: "talyson@gmail.com",
    cpf: "987.654.321-00",
    idade: 27, 
    endereco: {
        estado: "Rio Grande do Norte",
        cidade: "Caicó", 
        bairro: "Centro", 
        rua: "123", 
        numero: 22
    }
}
]

function cadastrarClientes(dadosDoCliente: Cliente) {
    const clienteExistente = clientes.find(cliente => cliente.id === dadosDoCliente.id);
    const emailExistente = clientes.find(cliente => cliente.email === dadosDoCliente.email);
    if (dadosDoCliente.email.trim() === "" || dadosDoCliente.nome.trim() === "") {
        console.log("Nome ou e-mail não informados!");
        return; 
    } else if (clienteExistente) {
        console.log("Cliente já cadastrado!");
        return; 
    } else if (emailExistente) {
        console.log("E-mail já utilizado!"); 
        return;
    } 
    clientes.push(dadosDoCliente); 
}


cadastrarClientes(
    {
    nome: "Felipe",
    id: 3,
    email: "felipe@gmail.com",
    cpf: "222.222.222-22",
    idade: 22, 
    endereco: {
        estado: "São Paulo",
        cidade: "Limeira", 
        bairro: "Centro", 
        rua: "321", 
        numero: 35
    }
}
)

function mostrarClientes(clientes: Cliente[]) {
    
    clientes.forEach((cliente, index) => {
        console.log(`Nome do Cliente: ${cliente.nome}, Id do Cliente: ${cliente.id}, Índice: ${index}`);
    });
}

mostrarClientes(clientes);

function buscarCliente(clientes: Cliente[], id: number) {
    let clienteDesejado: Cliente | undefined = clientes.find(cliente => id === cliente.id);
    console.log(clienteDesejado);
}

buscarCliente(clientes, 3); 
