

function geradorDeTagsDeIdentificacao(nomePet) {
    return nomePet.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    const idadePermitida = 1
    const adocao = idade === idadePermitida && porte === 'M'
        ? true
        : false

    // return adocao
    return adocao
}

function calcularConsumoDeRacao(nome, dia, peso) {
    const gramasDeRacao = peso * 300 * dia

    return gramasDeRacao
}

function decidirTipoDeAtividadePorPorte(porte) {
    let atividade

    switch (porte) {
        case 'pequeno':
            atividade = `brincar dentro de casa`
            break
        case 'médio':
            atividade = `caminhada no quarteirão`
            break
        case 'grande':
            atividade = `correr no parque`
            break
        default:
            atividade = `porte inválido`
    }
    return atividade

}

 async function buscarDadoAsync() {
    return 'Pipoca'
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}