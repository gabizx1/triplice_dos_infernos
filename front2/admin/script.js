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
document.getElementById('searchButton').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput').value.trim();
  const resultsArea = document.getElementById('resultsArea');

  // Simulando os resultados da API
  const results = [
      { name: "FULANO", cpf: "123456" },
      { name: "CICRANO", cpf: "654321" },
      { name: "BELTRANO", cpf: "789012" },
  ];

  // Verifica se há algo digitado no campo de busca
  if (searchInput !== "") {
      // Exibe os resultados
      resultsArea.classList.remove('d-none'); // Remove a classe que esconde a área cinza
      resultsArea.innerHTML = results.map(result => `
          <div class="d-flex justify-content-between align-items-center mb-2">
              <span>Nome: ${result.name} CPF: ${result.cpf}</span>
              <button class="btn btn-danger btn-sm">
                  <i class="bi bi-trash"></i>
              </button>
          </div>
      `).join('');
  } else {
      // Se o campo de busca estiver vazio, esconde a área cinza
      resultsArea.classList.add('d-none');
  }
});
