
function simularCompra() {
    // Preços dos produtos apresentados na página
    const precoBurger = 18;
    const precoBatata = 10;
    const precoRefri = 6;

    // Solicita as quantidades ao usuário
    const qtdBurger = Number(
        prompt("Quantos X-Burgers deseja? (R$ 18,00 cada)")
    );

    // Verifica se o usuário cancelou a primeira pergunta
    if (qtdBurger === null || !Number.isFinite(qtdBurger)) {
        alert("Compra cancelada ou quantidade inválida.");
        return;
    }

    const qtdBatata = Number(
        prompt("Quantas Batatas Fritas deseja? (R$ 10,00 cada)")
    );

    if (!Number.isFinite(qtdBatata)) {
        alert("Compra cancelada ou quantidade inválida.");
        return;
    }

    const qtdRefri = Number(
        prompt("Quantos Refrigerantes deseja? (R$ 6,00 cada)")
    );

    if (!Number.isFinite(qtdRefri)) {
        alert("Compra cancelada ou quantidade inválida.");
        return;
    }

    // Reúne as quantidades para validar os dados
    const quantidades = [qtdBurger, qtdBatata, qtdRefri];

    // Aceita somente números inteiros maiores ou iguais a zero
    const quantidadeInvalida = quantidades.some(
        quantidade =>
            !Number.isInteger(quantidade) || quantidade < 0
    );

    if (quantidadeInvalida) {
        alert("Digite apenas números inteiros iguais ou maiores que zero.");
        return;
    }

    // Verifica se nenhum produto foi escolhido
    if (qtdBurger === 0 && qtdBatata === 0 && qtdRefri === 0) {
        alert("Nenhum produto foi selecionado!");
        return;
    }

    // Calcula o valor de cada produto
    const totalBurger = precoBurger * qtdBurger;
    const totalBatata = precoBatata * qtdBatata;
    const totalRefri = precoRefri * qtdRefri;

    // Soma os valores para obter o subtotal
    const subtotal = totalBurger + totalBatata + totalRefri;

    // Aplica 10% de desconto a partir de R$ 50,00
    let desconto = 0;

    if (subtotal >= 50) {
        desconto = subtotal * 0.10;
    }

    const totalFinal = subtotal - desconto;

    // Formata os números como moeda brasileira
    function moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    // Monta e exibe o resumo do pedido
    const resultado =
        "🍔 BATISTA BURGER - RESUMO DA COMPRA\n\n" +
        "X-Burger: " + qtdBurger + " unidade(s) - " +
        moeda(totalBurger) + "\n" +
        "Batata Frita: " + qtdBatata + " unidade(s) - " +
        moeda(totalBatata) + "\n" +
        "Refrigerante: " + qtdRefri + " unidade(s) - " +
        moeda(totalRefri) + "\n\n" +
        "Subtotal: " + moeda(subtotal) + "\n" +
        "Desconto: " + moeda(desconto) + "\n" +
        "TOTAL A PAGAR: " + moeda(totalFinal) +
        (desconto > 0
            ? "\n\nParabéns! Você ganhou 10% de desconto!"
            : "\n\nCompras a partir de R$ 50,00 ganham 10% de desconto.");

    alert(resultado);
}
