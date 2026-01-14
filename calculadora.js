
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
    // -------------------------------------------------------------------------
// FUNÇÃO: limparCalculadora
// OBJETIVO: Resetar todos os valores da tela para o estado inicial
// -------------------------------------------------------------------------
function limparCalculadora() {
    
    // 1. Acessa o elemento HTML com id 'peso' e limpa o texto digitado pelo usuário
    // Usamos o .value porque se trata de um campo de entrada (input)
    document.querySelector('#peso').value = "";
    
    // 2. Acessa o elemento HTML com id 'altura' e limpa o texto digitado
    // Isso garante que o usuário possa começar um novo cálculo do zero
    document.querySelector('#altura').value = "";
    
    // 3. Altera o texto de exibição do resultado para o estado de espera
    // Usamos .innerHTML porque o elemento 'resultado' costuma ser uma <div> ou <span>
    document.querySelector('#resultado').innerHTML = "Aguardando novos dados...";
    
    // 4. Exibe uma mensagem no console do desenvolvedor para fins de depuração (debug)
    // Isso ajuda a confirmar se o clique no botão disparou a função corretamente
    console.log("Sistema: Todos os campos foram resetados.");
}

// DICA DE GIT PARA O SEU TESTE:
// Agora que você adicionou esse código, use o Git Graphics no VS Code para:
// 1. Fazer o 'Stage' (git add) das mudanças no script.js
// 2. Fazer o 'Commit' com a mensagem: "feat: adicionada lógica para limpar campos"
// 3. Fazer o 'Push' para enviar essa melhoria para o seu repositório no GitHub
}
