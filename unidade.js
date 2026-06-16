function converterMedida() {

    // Pega o valor digitado
    const centimetrosInput = document.getElementById('centimetrosInput');
    let centimetros = parseFloat(centimetrosInput.value);

    // Área de resultado
    const resultadoDiv = document.getElementById('resultado');

    // Limpa resultado anterior
    resultadoDiv.innerHTML = '';

    // Verifica se o valor é válido
    if (isNaN(centimetros)) {
        resultadoDiv.innerHTML = '<p>Digite um valor válido.</p>';
        return;
    }

    // Conversão
    let metros = centimetros / 100;

    // Exibe resultado
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>${centimetros} cm = <strong>${metros} m</strong></p>
    `;
}

// Evento do botão
const btnConverter = document.getElementById('btnConverter');

btnConverter.addEventListener('click', converterMedida);