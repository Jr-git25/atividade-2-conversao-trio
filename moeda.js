
const numeroInput = document.getElementById('numeroInput');
const resultadoConv = document.getElementById('resultadoConversao');
const btnGerar = document.getElementById('btnGerar');


const taxaCambio = 5.11;


const formatoReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

function gerarConversao() {
   
    let valorEmDolar = parseFloat(numeroInput.value);

    resultadoConv.style.display = 'block';
    if (isNaN(valorEmDolar)) {
        resultadoConv.innerHTML = `<p style="color: red;">Por favor, digite um valor válido.</p>`;
        return; 
    }

    
    const valorEmReal = valorEmDolar * taxaCambio;

 
    const valorFormatado = formatoReal.format(valorEmReal);

    resultadoConv.innerHTML = `<h2>Conversão: ${valorFormatado}</h2>`;
}


btnGerar.addEventListener('click', gerarConversao);

