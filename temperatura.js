// conversao de temperatura
function converterTemperatura() {
    var temperaturaKelvin = parseFloat(document.getElementById("temperaturaKelvin").value);
    var temperaturaCelsius = temperaturaKelvin - 273.15;
    document.getElementById("resultado").textContent = "Temperatura em Celsius: " + temperaturaCelsius.toFixed(2) + " °C";
}
