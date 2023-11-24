export const unmaskDate = (inputDate: string): string => {
    const parts = inputDate.split('/');
    if (parts.length === 3) {
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];

        // Certifique-se de que day, month e year sejam números válidos
        if (!isNaN(Number(day)) && !isNaN(Number(month)) && !isNaN(Number(year))) {
            const formattedDate = `${year}/${month}/${day}`;
            return formattedDate;
        }
    }

    // Se a entrada não for válida, retorne a entrada original
    return inputDate;
};
