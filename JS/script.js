const ctx = document.getElementById('myBarChart').getContext('2d');

// Dados fictícios iniciais
const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'Receita (em R$)',
        data: [5000, 7000, 3000, 8000, 9000], // Dados estáticos por enquanto
        backgroundColor: '#bdbdbd', // Cor das barras
        borderColor: 'rgba(75, 192, 192, 1)',// Cor da borda das barras
        color: 'black',
        borderWidth: 1
    }]
};

// Configurações do gráfico
const config = {
    type: 'bar', // Tipo do gráfico
    data: data,
    options: {
        responsive: true,
        scales: {
          
          x: {
            ticks: {
                color: 'black', // Cor dos números no eixo X
            }
          },
          y: {
            ticks: {
                color: 'black', // Cor dos números no eixo Y
            }
          }
        }
    }
};

// Renderizar o gráfico
new Chart(ctx, config);

/* // Suponha que sua API retorna algo como: { labels: [...], data: [...] }
async function fetchChartData() {
  const response = await fetch('/api/receita'); // URL do endpoint da API
  const chartData = await response.json(); // Dados vindos da API

  // Atualizar os dados do gráfico
  myBarChart.data.labels = chartData.labels; // Ex: ['Janeiro', 'Fevereiro', ...]
  myBarChart.data.datasets[0].data = chartData.data; // Ex: [5000, 7000, ...]
  myBarChart.update(); // Re-renderizar o gráfico
}

// Chamar a função fetchChartData() quando necessário
fetchChartData(); */

////////////////////////////////////////////////////////////////
// Parte da renderização das áreas de busca
/* function chamada1() {
    // Simulando os dados (em uma aplicação real, esses dados poderiam vir de uma API)
    const results = [
        { name: "Fulana de Tal", cpf: "123.456.789-00" },
        { name: "Ciclana de Tal", cpf: "987.654.321-00" },
        { name: "Beltrana de Tal", cpf: "456.789.123-00" }
    ];

    // Elementos HTML
    const searchInput = document.getElementById('searchInput').value.trim();
    const resultsArea = document.getElementById('resultsArea');

    // Verifica se o input de pesquisa tem algum valor
    if (searchInput !== "") {
        // Remove a classe que esconde a área cinza
        resultsArea.classList.remove('d-none');

        // Adiciona os resultados dinamicamente
       
        resultsArea.innerHTML = results.map((result, index) => `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span>Nome: ${result.name} | CPF: ${result.cpf}</span>
                <button class="btn btn-transparent text-white p-0" onclick="verMais(${index})">
                    <i class="bi bi-search"></i>
                </button>
            </div>
        `).join('');
        
    } else {
        // Se o campo de pesquisa estiver vazio, esconde a área cinza
        resultsArea.classList.add('d-none');
    }
} */

/*Função de busca do Exibir (chamada1) e do Remover (chamada2)*/
function chamada1() {
    // Simulando os dados (na prática, esses dados viriam de uma API)
    const results = [
        { name: "Fulana de Tal", cpf: "123.456.789-00" },
        { name: "Ciclana de Tal", cpf: "987.654.321-00" },
        { name: "Beltrana de Tal", cpf: "456.789.123-00" }
    ];
    
    const searchInput = document.getElementById('searchInput').value.trim();
    const resultsArea = document.getElementById('resultsArea');
    
    if (searchInput !== "") {
        resultsArea.classList.remove('d-none');
        resultsArea.innerHTML = results
            .filter(result => result.cpf.includes(searchInput)) // Filtra resultados com base no CPF
            .map((result, index) => `
                    <div class="result-item p-2 mb-2" onclick="verMais('${result.cpf}')">
                        <span>Nome: ${result.name} | CPF: ${result.cpf}</span>
                        <button class="btn btn-transparent text-white p-0 ms-5" onclick="verMais(${index})">
                            <i class="bi bi-search" style="margin-left:60px;" ></i>
                        </button>
                    </div>
            `).join('');
    } else {
            resultsArea.classList.add('d-none');
    }
}
function chamada2() {
    // Simulando os dados (na prática, esses dados viriam de uma API)
    const results = [
        { name: "Fulana de Tal", cpf: "123.456.789-00" },
        { name: "Ciclana de Tal", cpf: "987.654.321-00" },
        { name: "Beltrana de Tal", cpf: "456.789.123-00" }
    ];
    
    const searchInput = document.getElementById('searchInput').value.trim();
    const resultsArea = document.getElementById('resultsArea');
    
    if (searchInput !== "") {
        resultsArea.classList.remove('d-none');
        resultsArea.innerHTML = results
            .filter(result => result.cpf.includes(searchInput)) // Filtra resultados com base no CPF
            .map((result, index) => `
                <div class="result-item p-2 mb-2" onclick="('${result.cpf}')">
                    <span>Nome: ${result.name} | CPF: ${result.cpf}</span>
                    <button class="btn btn-transparent text-white p-0 ms-5" onclick="confirmarDelecao(${index}, event)">
                        <i class="bi bi-trash" style="margin-left:60px;"></i>
                    </button>
                </div>
            `).join('');
    } else {
            resultsArea.classList.add('d-none');
    }
}  
// Função para redirecionar para a página de edição
function verMais(cpf) { 
// Pode ser um redirecionamento para a página de edição
    window.location.href = `editar_recep.html?cpf=${cpf}`;
}
function confirmarDelecao(index, event) {
    event.stopPropagation(); // Impede que o clique no botão propague para o item principal

    // Exibe a popup de confirmação
    const confirmacao = confirm('Você tem certeza que deseja deletar este item?');

    if (confirmacao) {
        // Se o usuário confirmar a exclusão, remove o item do array e atualiza a interface
        deletarItem(index);
    }
}

function deletarItem(index) {
    // Simula o array original com dados a serem removidos
    const results = [
        { name: "Fulana de Tal", cpf: "123.456.789-00" },
        { name: "Ciclana de Tal", cpf: "987.654.321-00" },
        { name: "Beltrana de Tal", cpf: "456.789.123-00" }
    ];

    // Deleta o item do array
    results.splice(index, 1);

    // Atualiza a exibição na interface (re-renderiza os itens)
    renderizarResultados(results);

    // Atualiza o servidor via fetch (simulação)
    fetch('https://suaapi.com/deletar', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf: results[index].cpf }) // Envia o CPF do item deletado
    })
    .then(response => response.json())
    .then(data => {
        console.log('Item deletado com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao tentar deletar o item:', error);
    });
}

function renderizarResultados(results) {
    const resultsArea = document.getElementById('resultsArea');
    resultsArea.innerHTML = results.map((result, index) => `
        <div class="result-item p-2 mb-2">
            <span>Nome: ${result.name} | CPF: ${result.cpf}</span>
            <button class="btn btn-transparent text-white p-0 ms-5" onclick="confirmarDelecao(${index}, event)">
                <i class="bi bi-trash" style="margin-left:60px;"></i>
            </button>
        </div>
    `).join('');
}

    