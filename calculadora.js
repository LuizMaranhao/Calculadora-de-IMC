
function calcularIMC() {
    // Entrada de dados usando parseFloat para aceitar decimais (como 1.75)
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Verificação simples para evitar erro de divisão por zero
    if (peso > 0 && altura > 0) {
        // Cálculo do IMC: IMC = peso / (altura * altura)
        let imc = peso / (altura * altura);
        
        // Exibe o valor do IMC formatado com 2 casas decimais
        document.getElementById('resultado').innerText = `Seu IMC é: ${imc.toFixed(2)}`;

        // Lógica de classificação (Requisito da Atividade)
        let classificacao = "";
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        document.getElementById('classificacao').innerText = `Classificação: ${classificacao}`;
    } else {
        alert("Por favor, insira valores válidos para peso e altura.");
    }
}
