function exibirValor() {
  let reais = parseFloat(document.getElementById("reais").value);
  let opcao = parseInt(document.getElementById("opcao").value);
  let sbl;
  let resultado;
  if (reais) {
    switch (opcao) {
      case 1:
        sbl = "$";
        resultado = reais / 5.69;
        break;

      case 2:
        sbl = "€";
        resultado = reais / 6.47;
        break;

      case 3:
        sbl = "£";
        resultado = reais / 7.58;
        break;

      default:
        sbl = "";
        resultado = "Erro! Valor inválido...";
    }
    document.getElementById(
      "resultado"
    ).innerHTML = `<strong>${sbl} ${resultado.toFixed(2)}</strong>`;

  } else {
    document.getElementById(
      "resultado"
    ).innerHTML = `<strong>Erro! Valor inválido...</strong>`;
  }
}
