// Taxas de câmbio fixas (exemplo)
const taxas = {
    "BRL": { "USD": 0.20, "EUR": 0.18 },
    "USD": { "BRL": 5.00, "EUR": 0.91 },
    "EUR": { "BRL": 5.50, "USD": 1.10 }
  };
  
  function converter() {
    const valorInput = document.getElementById('amount').value;
    const de = document.getElementById('from').value;
    const para = document.getElementById('to').value;
    const resultadoDiv = document.getElementById('resultado');
  
    // Verifica se o valor é válido
    if (!valorInput || isNaN(valorInput)) {
      resultadoDiv.innerHTML = "Insira um valor válido.";
      return;
    }
  
    const valor = parseFloat(valorInput);
  
    // Se as moedas forem iguais
    if (de === para) {
      resultadoDiv.innerHTML = `Você escolheu a mesma moeda. Resultado: ${valor.toFixed(2)} ${para}`;
      return;
    }
  
    // Verifica se existe taxa de conversão
    const taxa = taxas[de][para];
    if (!taxa) {
      resultadoDiv.innerHTML = "Conversão não suportada.";
      return;
    }
  
    // Calcula e exibe o valor convertido
    const convertido = valor * taxa;
    resultadoDiv.innerHTML = `${valor.toFixed(2)} ${de} = ${convertido.toFixed(2)} ${para}`;
  }
  