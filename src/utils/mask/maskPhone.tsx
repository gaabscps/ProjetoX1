export const phoneMask = (phone: string): string => {
    // Remover todos os caracteres não numéricos
    const numericPhone = phone.replace(/\D/g, '');

    // Verificar se o número de telefone tem pelo menos 10 dígitos
    if (numericPhone.length < 10) {
        return numericPhone;
    }

    // Formatar o número de telefone no formato desejado
    const formattedPhone = `(${numericPhone.substring(0, 2)}) ${numericPhone.substring(2, 7)}-${numericPhone.substring(7)}`;

    return formattedPhone;
};

export const unmaskPhone = (formattedPhone: string): string => {
    // Remove todos os caracteres não numéricos
    return formattedPhone.replace(/\D/g, '');
};



// para usar esta função, basta importar o arquivo e chamar a função passando o valor que deseja formatar
// Exemplo:
// import phoneMask from '../utils/mask/phone';
// const phone = phoneMask('1234567890');

