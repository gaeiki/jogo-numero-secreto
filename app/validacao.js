function verificaValorValido(chute) {
    const numeroInteiro = +chute;
    
    if (chuteInvalido(numeroInteiro)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }
    
    if (NumeroRange(numeroInteiro)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return;
    }

    if (numeroInteiro === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar-novamente">Jogar novamente</button>
        `
    } else if (numeroInteiro > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numeroInteiro) {
    return Number.isNaN(numeroInteiro);
}

function NumeroRange(numeroInteiro) {
    return numeroInteiro > maiorValor || numeroInteiro <menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})