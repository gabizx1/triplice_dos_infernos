// ELEMENTO COSTUMIZÁVEL DO TÍTULO DE CADASTRO (SE REPETE)
class Titulo extends HTMLElement{
    constructor() {
      super();
    }

    connectedCallback() {
      const titulo = this.getAttribute('titulo') || 'Cadastro';
      const icon = this.getAttribute('icon') || 'bi-person-circle'; // Obtém o atributo 'icon'
      const div = document.createElement("div");
      div.className = "w-100";
      
      div.innerHTML = `
          <div class="text-center mb-3">
              <i class="bi ${icon} display-4"></i>
              <h1 class="mt-3">${titulo}</h1>
          </div>
      `;
      this.appendChild(div);
    }
  
  }
  
  customElements.define("meu-titulo", Titulo);

// ELEMENTO COSTUMIZÁVEL DO FORMULÁRIO DO LOGIN ADMIN/RECEP
  class LoginRecep extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // Defina o valor de caminho, podendo ser alterado conforme necessário
      const caminhoVoltar = 'inicio.html';
      const caminhoEntrar = this.getAttribute('caminhoEntrar');
      const titulo = this.getAttribute('titulo') || 'Título padrão';  // Valor padrão caso não seja fornecido

      const div = document.createElement("div");
      div.className = "container-fluid p-0";
      div.innerHTML = `
        <!-- Row principal com alinhamento e posição relativa -->
        <div class="row m-0 position-relative">
          <div class="col-md-3 col-lg-2 position-absolute start-0 top-50 translate-middle-y p-0" style="width: 350px; height: 100vh;">
            <img src="../CSS/images/transicaoInicio.png" class="img-fluid">
          </div>
          <div class="col-8 d-flex flex-column position-absolute align-items-center text-center position-relative" style="z-index: 3; margin-top: 150px; margin-left: 40vh;">
            <div class="w-100">
              <h1 class="text-center text-white fw-bold tituloADM">FitManager</h1>
              <h3 class="text-center text-white fw-bold mb-5">${titulo}</h3>
  
              <form action="#" method="POST">
                <div style="margin-left: 20vh;">
                  <div class="form-floating mb-3 justify-content-center align-items-center">
                    <input type="text" class="form-control" style="width: 500px;" id="name" placeholder=" " required>
                    <label for="name">Nome: </label>
                  </div>
  
                  <div class="form-floating mb-3 position-relative justify-content-center align-items-center">
                    <input type="password" class="form-control" style="width: 500px;" id="senha" placeholder=" " required>
                    <label for="senha">Chave de acesso: </label>
                    <button type="button" id="toggleSenha" class="btn btn-link-lg position-absolute" style="top: 50%; right: 25vh; transform: translateY(-50%);">
                      <i class="bi bi-eye-slash" id="iconeOlho"></i>
                    </button>
                  </div>
                </div>
  
                <div class="d-flex justify-content-center align-items-center py-2">
                  <button type="button" class="btn btnForms w-25 m-3 mt-2" id="voltarBtn" data-url="${caminhoVoltar}">Voltar</button>
                  <button type="button" class="btn btnForms w-25 m-3 mt-2" id="entrarBtn" data-url="${caminhoEntrar}">Entrar</button>
                </div>
              </form>
            </div>
          </div>
  
          <!-- Imagem da direita -->
          <div class="col-md-3 d-flex justify-content-center align-items-center p-0">
            <img src="../CSS/images/transicaoInicio2.png" style="width: 500px; height: 100vh; right:0px; margin-left: 300vh;">
          </div>
        </div>
      `;
  
      this.appendChild(div);
      
  
      // Adiciona o manipulador de eventos após o HTML ter sido montado
      const toggleSenhaButton = this.querySelector('#toggleSenha');
      const inputSenha = this.querySelector('#senha');
      const iconeOlho = this.querySelector('#iconeOlho');
  
      if (toggleSenhaButton && inputSenha && iconeOlho) {
        toggleSenhaButton.addEventListener('click', function () {
          const isPassword = inputSenha.type === 'password';
          inputSenha.type = isPassword ? 'text' : 'password';
          iconeOlho.className = isPassword ? 'bi bi-eye' : 'bi bi-eye-slash';
        });
      }
       
      this.addEventListeners();
    }

    addEventListeners() {
      // Evento para o botão "Voltar"
      const voltarBtn = this.querySelector('#voltarBtn');
      voltarBtn.addEventListener('click', () => {
        const url = voltarBtn.getAttribute('data-url');  // Captura o URL armazenado
        window.location.href = url;  // Redireciona para o URL
      });
  
      // Evento para o botão "Entrar"
      const entrarBtn = this.querySelector('#entrarBtn');
      entrarBtn.addEventListener('click', () => {
        const url = entrarBtn.getAttribute('data-url');  // Captura o URL armazenado
        window.location.href = url;  // Redireciona para o URL
      });
    }

  }
  
  customElements.define("login-recep", LoginRecep);
  