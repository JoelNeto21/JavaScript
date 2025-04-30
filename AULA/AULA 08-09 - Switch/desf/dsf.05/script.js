function exibirInfo() {
  let carro = document.getElementById("carro").value.toLowerCase();
  let marca;
  let modelo;
  let preco;
  let ano;
  let combust;

  switch (carro) {
    case "kwid":
      marca = "Book";
      modelo = "Book";
      preco = 0;
      ano = 0;
      combust = "Book";
      break;

    case "celta":
      marca = "Book";
      modelo = "Book";
      preco = 0;
      ano = 0;
      combust = "Book";
      break;

    case "civic":
      marca = "Book";
      modelo = "Book";
      preco = 0;
      ano = 0;
      combust = "Book";
      break;

    default:
      marca = "Book";
      modelo = "Book";
      preco = 0;
      ano = 0;
      combust = "Book";
      break;
  }

  document.getElementById(
    "resultadoProduto"
  ).innerHTML = `Produto: <strong>${marca} | R$${modelo}</strong>`;
}
