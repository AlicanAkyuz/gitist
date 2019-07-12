const cleanUpTurkishChars = (str: string) =>
  str
    .replace(/[Ç]/g, 'C')
    .replace(/[ç]/g, 'c')
    .replace(/[Ğ]/g, 'G')
    .replace(/[ğ]/g, 'g')
    .replace(/[ı]/g, 'i')
    .replace(/[Ö]/g, 'O')
    .replace(/[ö]/g, 'o')
    .replace(/[Ü]/g, 'U')
    .replace(/[ü]/g, 'u')
    .replace(/[Ş]/g, 'S')
    .replace(/[ş]/g, 's');

export default cleanUpTurkishChars;
