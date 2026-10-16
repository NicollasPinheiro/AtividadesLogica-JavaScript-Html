function gerartabuada() {
    const numinput = document.getElementById('numinput');
    const resultadoDiv = document.getElementById('resultado');
    const numero = parseInt(numinput.value); // Converte o valor para número inteiro

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido."); // Alerta se não for um número
        return;
    }

    resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

    for (let i = 1; i <= 10; i++) {
        const multiplicacao = `${numero} X ${i} = ${numero * i}`;
        const p = document.createElement('p'); // Cria um parágrafo para cada linha
        p.textContent = multiplicacao;
        resultadoDiv.appendChild(p); // Adiciona o parágrafo à div de resultado
    }
}

const botaolimpar = document.getElementById('botaolimpar');
botaolimpar.addEventListener('click', function () {
    const numinput = document.getElementById('numinput');
    const resultadoDiv = document.getElementById('resultado');
    numinput.value = '';
    resultadoDiv.innerHTML = '';
});