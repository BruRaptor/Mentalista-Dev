function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
  
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Parabéns, você acertou!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML = "Você chutou alto demais! Tente novamente.";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML = "Você chutou baixo demais! Tente novamente.";
    }
  }
  
  var numeroSecreto = parseInt(Math.random() * 11);