// Cadastro Recepcionista

function cadastro_recep(){
    alert('Cadastrado com sucesso!');
}

// Edição Recepcionista
 let dados = {};

 // Obtém o CPF da URL
 const urlParams = new URLSearchParams(window.location.search);
 const cpf = urlParams.get('cpf');

 // Função para carregar os dados ao acessar a página de edição
 window.onload = () => {
     if (cpf) {
         // Simulação de fetch para obter os dados do servidor
         fetch(`https://api.exemplo.com/pessoa/${cpf}`)
             .then(response => response.json())
             .then(data => {
                 dados = data;
                 atualizarCampos();
             })
             .catch(error => console.error('Erro ao carregar dados:', error));
     }
 };

 function atualizarCampos() {
     Object.keys(dados).forEach(key => {
         const input = document.getElementById(key);
         if (input) input.value = dados[key];
     });
 }

 function habilitarEdicao(id) {
     const input = document.getElementById(id);
     if (input) {
         input.disabled = false;
         input.focus();
     }
 }

 function salvarEdicao(event) {
     event.preventDefault();

     // Atualiza os dados com os valores do formulário
     Object.keys(dados).forEach(key => {
         const input = document.getElementById(key);
         if (input) {
             dados[key] = input.value;
             input.disabled = true;
         }
     });

     console.log("Dados atualizados:", dados);

     // Simulação de envio para o backend
     fetch(`https://api.exemplo.com/pessoa/${cpf}`, {
         method: 'PUT',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(dados),
     })
     .then(response => response.json())
     .then(data => {
         alert('Dados atualizados com sucesso!');
         // Redireciona após salvar
         window.location.href = 'exibir_recep.html';
     })
     .catch(error => console.error('Erro ao salvar dados:', error));
 }


