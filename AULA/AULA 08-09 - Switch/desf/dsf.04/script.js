function exibirEstacao() {
  let mes = parseInt(document.getElementById("mes").value);
  let estacao;

  switch (mes) {
    case 12:
    case 1:
    case 2:
      estacao = "Verão";
      break;

    case 3:
    case 4:
    case 5:
      estacao = "Outono";
      break;

    case 6:
    case 7:
    case 8:
      estacao = "Inverno";
      break;

    case 9:
    case 10:
    case 11:
      estacao = "Primavera";
      break;

    default:
      estacao = "Erro! Valor inválido...";
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `<strong>${estacao}</strong>`;
}
