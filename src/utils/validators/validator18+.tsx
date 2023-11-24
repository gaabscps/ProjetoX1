export function validateBirthDate(birthDateString: string) {
    // Verifique se a data de nascimento foi fornecida
    if (!birthDateString) {
        return 'A data de nascimento é obrigatória.';
    }

    // Converta a data de nascimento em um objeto Date
    const birthDate = new Date(birthDateString);

    // Verifique se a data é válida
    if (isNaN(birthDate.getTime())) {
        return 'A data de nascimento inserida é inválida.';
    }

    // Calcule a data há 18 anos atrás
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    // Verifique se a data de nascimento é anterior a dezoito anos atrás
    if (birthDate > eighteenYearsAgo) {
        return 'Você deve ter pelo menos 18 anos.';
    }

    // Se a data de nascimento for válida e a idade for maior ou igual a 18 anos, retorne verdadeiro
    return true;
}