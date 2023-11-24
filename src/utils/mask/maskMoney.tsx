export function maskBRL(valor: string): string {
    const numero: number = parseFloat(valor);

    if (isNaN(numero)) {
        return 'Valor inválido';
    }

    const valorFormatado: string = numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return valorFormatado;
}

export function unmaskBRL(valorFormatado: string): string {
    // Remove o símbolo da moeda e outros caracteres não numéricos, exceto a vírgula
    let valorNumerico: string = valorFormatado.replace(/[^0-9,]/g, '');

    // Substitui a vírgula por ponto para obter um formato decimal válido
    valorNumerico = valorNumerico.replace(',', '.');

    return valorNumerico;
}