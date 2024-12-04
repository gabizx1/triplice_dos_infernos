class Titulo extends HTMLElement{
    constructor() {
      super();
    }

    connectedCallback() {
      const div = document.createElement("div");
      div.className = "w-100";
      div.innerHTML = `<div class="text-center mb-3">
                            <i class="bi bi-person-circle display-4"></i>
                            <h1 class="mt-3 ">Cadastro</h1>
                        </div>
      `;
      this.appendChild(div);
    }
  
  }
  
  customElements.define("meu-titulo", Titulo);