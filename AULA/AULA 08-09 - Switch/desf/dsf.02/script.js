function exibirClassificacao(){
    let nota = parseFloat(document.getElementById("nota").value)
    let classificacao

    switch (nota) {
        case 10:
            classificacao = "A"
        break

        case 9:
            classificacao = "B"
        break

        case 8:
            classificacao = "C"
        break

        case 7:
            classificacao = "D"
        break

        default:
            if(nota <= 6)
                classificacao = "F"
            else
                classificacao = "Erro! Valor inválido..."
    }

    document.getElementById("resultado").innerHTML = `<strong>${classificacao}</strong>`
}