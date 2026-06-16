// converter o tempo de minutos para horas, segundos e dias
function converterTempo() {
    const minutos = parseFloat(document.getElementById('tempoMinutos').value);
    
    if (isNaN(minutos) || minutos < 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira um número válido de minutos.';
        return;
    }

    const horas = minutos / 60;
    const segundos = minutos * 60;
    const dias = minutos / (60 * 24);

    document.getElementById('resultado').textContent =
        `${minutos} minutos equivalem a ${horas.toFixed(2)} horas, ${segundos.toFixed(2)} segundos e ${dias.toFixed(4)} dias.`;
}