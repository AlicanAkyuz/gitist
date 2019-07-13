import cleanUpTurkishChars from './cleanUpTurkishChars';

test('replaces lower and uppercase -Ç/ç- with  -C/c-', () => {
  expect(cleanUpTurkishChars('Çanakkale')).toBe('Canakkale');
  expect(cleanUpTurkishChars('İçel')).toBe('İcel');
});

test('replaces lower and uppercase -Ğ/ğ- with  -G/g-', () => {
  expect(cleanUpTurkishChars('TekirdaĞ')).toBe('TekirdaG');
  expect(cleanUpTurkishChars('Muğla')).toBe('Mugla');
});

test('replaces -ı- with -i-', () => {
  expect(cleanUpTurkishChars('Ağrı')).toBe('Agri');
});

test('replaces lower and uppercase -Ö/ö- with  -O/o-', () => {
  expect(cleanUpTurkishChars('Ösmaniye')).toBe('Osmaniye');
  expect(cleanUpTurkishChars('Bingöl')).toBe('Bingol');
});

test('replaces lower and uppercase -Ü/ü- with  -U/u-', () => {
  expect(cleanUpTurkishChars('DÜzce')).toBe('DUzce');
  expect(cleanUpTurkishChars('Gümüşhane')).toBe('Gumushane');
});

test('replaces lower and uppercase -Ş/ş- with  -S/s-', () => {
  expect(cleanUpTurkishChars('Şanlıurfa')).toBe('Sanliurfa');
  expect(cleanUpTurkishChars('Eskişehir')).toBe('Eskisehir');
});
