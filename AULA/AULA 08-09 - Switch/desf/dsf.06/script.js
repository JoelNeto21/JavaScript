function exibirPreco() {
    let opcao = parseInt(document.getElementById("opcao").value);
    let preco;
  
    switch (mes) {
      case 1:
        preco = "Verão";
        break;
  
      case 2:
        preco = "Outono";
        break;
  
      case 3:
        preco = "Inverno";
        break;
  
      default:
        preco = "Erro! Valor inválido...";
    }
  
    document.getElementById(
      "resultado"
    ).innerHTML = `<strong>${preco}</strong>`;
  }
  