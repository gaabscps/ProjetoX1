export const maskCpf = (cpf: string): string => {
  const numericCPF = cpf.replace(/\D/g, '');

  if (numericCPF.length !== 11) {
    return numericCPF;
  }
  const formattedCPF = `${numericCPF.substring(0, 3)}.${numericCPF.substring(3, 6)}.${numericCPF.substring(6, 9)}-${numericCPF.substring(9)}`;

  return formattedCPF;
};

export const unmaskCpf = (formattedCPF: string): string => {
  const numericCPF = formattedCPF.replace(/\D/g, '');

  return numericCPF;
};

