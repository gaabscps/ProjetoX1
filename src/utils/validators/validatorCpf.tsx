export const validateCPF = (cpf: string): string | boolean => {
    const numericCPF = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (numericCPF.length !== 11) {
      return 'CPF informado é inválido';
    }
  
    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1+$/.test(numericCPF)) {
      return 'CPF informado é inválido';
    }
  
    // Calcula os dígitos verificadores
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(numericCPF.charAt(i)) * (10 - i);
    }
    let mod = sum % 11;
    const firstVerifier = (mod < 2) ? 0 : 11 - mod;
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(numericCPF.charAt(i)) * (11 - i);
    }
    mod = sum % 11;
    const secondVerifier = (mod < 2) ? 0 : 11 - mod;
  
    // Verifica se os dígitos verificadores são válidos
    if (
      parseInt(numericCPF.charAt(9)) !== firstVerifier ||
      parseInt(numericCPF.charAt(10)) !== secondVerifier
    ) {
      return 'CPF informado é inválido';
    }
  
    // CPF válido
    return true;
  };