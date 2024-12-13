//Criação dinamica de função para mostrar a senha desmostrar a senha
document.getElementById('toggleSenha').addEventListener('click', function () {
    const inputSenha = document.getElementById('senha');
    const iconeOlho = document.getElementById('iconeOlho');

    const isPassword = inputSenha.type === 'password';
    inputSenha.type = isPassword ? 'text' : 'password';
    iconeOlho.className = isPassword ? 'bi bi-eye' : 'bi bi-eye-slash';
});

// Array de usuários e senhas (simulação de banco de dados)
const usuarios = [
    { nome: "João", usuario: "joao123", senha: "1234" },
    { nome: "Maria", usuario: "maria456", senha: "abcd" },
    { nome: "Pedro", usuario: "pedro789", senha: "senha789" }
  ];
  
  // Array para armazenar os usuários logados em sequência
  let usuariosLogados = [];
  
  // Função para autenticar o usuário
  function autenticarUsuario() {
    const usuarioInput = document.getElementById("user").value.trim();
    const senhaInput = document.getElementById("senha").value.trim();
  
    // Procura pelo usuário no array de usuários
    const usuarioEncontrado = usuarios.find(
      (u) => u.usuario === usuarioInput && u.senha === senhaInput
    );
  
    if (usuarioEncontrado) {
      // Verifica se o usuário já está logado
      if (usuariosLogados.find((u) => u.usuario === usuarioEncontrado.usuario)) {
        alert("Este usuário já está logado.");
        return;
      }
  
      // Adiciona o usuário logado ao array de usuários logados
      usuariosLogados.push(usuarioEncontrado);
  
      // Cria o botão para o usuário logado
      const barraLateral = document.querySelector(".sidebar");
      const botaoUsuario = document.createElement("button");
      botaoUsuario.className = "btnFre mb-1 w-75";
      botaoUsuario.id = `botao-${usuarioEncontrado.usuario}`; // ID único para cada botão
      botaoUsuario.innerHTML = `${usuarioEncontrado.nome}<br>Ativo`;
  
      // Adiciona um evento de clique no botão para remover
      botaoUsuario.addEventListener("click", function () {
        sairUsuario(usuarioEncontrado.usuario);
      });
  
      // Adiciona o botão à barra lateral
      barraLateral.appendChild(botaoUsuario);
  
      alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);
    } else {
      alert("Usuário ou senha inválidos.");
    }
  }
  
  // Função para remover o usuário da sequência de logados e da barra lateral
  function sairUsuario(usuario) {
    const usuarioLogado = usuariosLogados.find((u) => u.usuario === usuario);
    
    if (usuarioLogado) {
      if (confirm(`Deseja desconectar ${usuarioLogado.nome}?`)) {
        // Remove o usuário do array de logados
        usuariosLogados = usuariosLogados.filter((u) => u.usuario !== usuario);
        
        // Remove o botão correspondente na barra lateral
        const botaoUsuario = document.getElementById(`botao-${usuario}`);
        if (botaoUsuario) botaoUsuario.remove();
  
        alert(`${usuarioLogado.nome} foi desconectado.`);
      }
    } else {
      alert("Usuário não encontrado para desconectar.");
    }
  }
  
  // Adiciona o evento ao botão "Entrar"
  document.querySelector("#entrarBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário
    autenticarUsuario(); // Chama a função de autenticação
  });
  
  // Adiciona o evento ao botão "Sair"
  document.querySelector("#sairBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário
    const usuarioInput = document.getElementById("user").value.trim();
    const senhaInput = document.getElementById("senha").value.trim();
  
    // Procura pelo usuário nos dados de entrada
    const usuarioEncontrado = usuariosLogados.find(
      (u) => u.usuario === usuarioInput && u.senha === senhaInput
    );
  
    if (usuarioEncontrado) {
      sairUsuario(usuarioEncontrado.usuario); // Chama a função de saída passando o usuário correto
    } else {
      alert("Usuário ou senha não correspondem ao logado.");
    }
  });

// Função para exibir alertas personalizados com Bootstrap
function mostrarAlerta(tipo, mensagem) {
    const alertContainer = document.getElementById("alert-container");
  
    // Cria o alerta Bootstrap
    const alerta = document.createElement("div");
    alerta.classList.add("alert", `alert-${tipo}`, "alert-dismissible", "fade", "show");
    alerta.setAttribute("role", "alert");
  
    // Adiciona o conteúdo da mensagem
    alerta.innerHTML = `
      <strong>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}!</strong> ${mensagem}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
  
    // Adiciona o alerta ao contêiner
    alertContainer.appendChild(alerta);
  
    // Remove o alerta após 5 segundos
    setTimeout(() => {
      alerta.classList.remove("show");
      alerta.classList.add("fade");
    }, 5000); // Atraso de 5 segundos antes de ocultar
  }