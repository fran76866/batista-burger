
function simularCompra() {
    // Preços dos produtos
    const precoBurger = 18;
    const precoBatata = 10;
    const precoRefri = 6;

    // Pergunta a quantidade de X-Burgers
    const respostaBurger = prompt(
        "Quantos X-Burgers deseja? (R$ 18,00 cada)"
    );

    if (respostaBurger === null) {
        alert("Compra cancelada.");
        return;
    }

    const qtdBurger = Number(respostaBurger);

    // Pergunta a quantidade de batatas fritas
    const respostaBatata = prompt(
        "Quantas Batatas Fritas deseja? (R$ 10,00 cada)"
    );

    if (respostaBatata === null) {
        alert("Compra cancelada.");
        return;
    }

    const qtdBatata = Number(respostaBatata);

    // Pergunta a quantidade de refrigerantes
    const respostaRefri = prompt(
        "Quantos Refrigerantes deseja? (R$ 6,00 cada)"
    );

    if (respostaRefri === null) {
        alert("Compra cancelada.");
        return;
    }

    const qtdRefri = Number(respostaRefri);

    // Verifica se as quantidades são válidas
    const quantidades = [qtdBurger, qtdBatata, qtdRefri];

    const quantidadeInvalida = quantidades.some(
        quantidade =>
            !Number.isInteger(quantidade) || quantidade < 0
    );

    if (quantidadeInvalida) {
        alert(
            "Digite apenas números inteiros iguais ou maiores que zero."
        );
        return;
    }

    // Verifica se nenhum produto foi selecionado
    if (qtdBurger === 0 && qtdBatata === 0 && qtdRefri === 0) {
        alert("Nenhum produto foi selecionado!");
        return;
    }

    // Calcula o valor de cada produto
    const totalBurger = precoBurger * qtdBurger;
    const totalBatata = precoBatata * qtdBatata;
    const totalRefri = precoRefri * qtdRefri;

    // Calcula o subtotal
    const subtotal = totalBurger + totalBatata + totalRefri;

    // Aplica 10% de desconto para compras a partir de R$ 50,00
    let desconto = 0;

    if (subtotal >= 50) {
        desconto = subtotal * 0.10;
    }

    const totalFinal = subtotal - desconto;

    // Formata os valores em reais
    function moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    // Monta o resumo da compra
    const resultado =
        "BATISTA BURGER - RESUMO DA COMPRA\n\n" +
        "X-Burger: " + qtdBurger + " unidade(s) - " +
        moeda(totalBurger) + "\n" +
        "Batata Frita: " + qtdBatata + " unidade(s) - " +
        moeda(totalBatata) + "\n" +
        "Refrigerante: " + qtdRefri + " unidade(s) - " +
        moeda(totalRefri) + "\n\n" +
        "Subtotal: " + moeda(subtotal) + "\n" +
        "Desconto: " + moeda(desconto) + "\n" +
        "TOTAL A PAGAR: " + moeda(totalFinal);

    // Informa se o desconto foi aplicado
    if (desconto > 0) {
        alert(
            resultado +
            "\n\nParabéns! Você ganhou 10% de desconto!"
        );
    } else {
        alert(
            resultado +
            "\n\nCompras a partir de R$ 50,00 ganham 10% de desconto."
        );
    }
}
