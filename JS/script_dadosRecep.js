// Array de dados (exemplo)
const dados = {
    nome: "João Silva",
    cpf: "123.456.789-00",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
    statusPagamento: "Pago",
    dataVencimento: "12/12/2024",
    usuario: "joaosilva",
    senha: "senha123"
};

// Preencher as informações no HTML
document.getElementById("nome").innerText = dados.nome;
document.getElementById("cpf").innerText = dados.cpf;
document.getElementById("email").innerText = dados.email;
document.getElementById("telefone").innerText = dados.telefone;
document.getElementById("statusPagamento").innerText = dados.statusPagamento;
document.getElementById("dataVencimento").innerText = dados.dataVencimento;
document.getElementById("usuario").innerText = dados.usuario;
document.getElementById("senha").innerText = dados.senha;
