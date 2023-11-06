export const maskCpf = (cpf: string): string => {
    // Remove todos os caracteres não numéricos
    const numericCPF = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (numericCPF.length !== 11) {
      return numericCPF;
    }
  
    // Formata o CPF no formato desejado
    const formattedCPF = `${numericCPF.substring(0, 3)}.${numericCPF.substring(3, 6)}.${numericCPF.substring(6, 9)}-${numericCPF.substring(9)}`;
    
    return formattedCPF;
  };

