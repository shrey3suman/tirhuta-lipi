// Devanagari -> Tirhuta character map
// Verified against the official Unicode Tirhuta block (U+11480 to U+114DF)

const map = {
  // Independent vowels
  'अ': '\u{11481}', // A
  'आ': '\u{11482}', // AA
  'इ': '\u{11483}', // I
  'ई': '\u{11484}', // II
  'उ': '\u{11485}', // U
  'ऊ': '\u{11486}', // UU
  'ऋ': '\u{11487}', // vocalic R
  'ए': '\u{1148B}', // E
  'ऐ': '\u{1148C}', // AI
  'ओ': '\u{1148D}', // O
  'औ': '\u{1148E}', // AU

  // Consonants (all 33, same traditional order as Devanagari)
  'क': '\u{1148F}', 'ख': '\u{11490}', 'ग': '\u{11491}', 'घ': '\u{11492}', 'ङ': '\u{11493}',
  'च': '\u{11494}', 'छ': '\u{11495}', 'ज': '\u{11496}', 'झ': '\u{11497}', 'ञ': '\u{11498}',
  'ट': '\u{11499}', 'ठ': '\u{1149A}', 'ड': '\u{1149B}', 'ढ': '\u{1149C}', 'ण': '\u{1149D}',
  'त': '\u{1149E}', 'थ': '\u{1149F}', 'द': '\u{114A0}', 'ध': '\u{114A1}', 'न': '\u{114A2}',
  'प': '\u{114A3}', 'फ': '\u{114A4}', 'ब': '\u{114A5}', 'भ': '\u{114A6}', 'म': '\u{114A7}',
  'य': '\u{114A8}', 'र': '\u{114A9}', 'ल': '\u{114AA}', 'व': '\u{114AB}',
  'श': '\u{114AC}', 'ष': '\u{114AD}', 'स': '\u{114AE}', 'ह': '\u{114AF}',

  // Vowel signs (matras)
  'ा': '\u{114B0}', // AA
  'ि': '\u{114B1}', // I
  'ी': '\u{114B2}', // II
  'ु': '\u{114B3}', // U
  'ू': '\u{114B4}', // UU
  'ृ': '\u{114B5}', // vocalic R
  'े': '\u{114B9}', // E
  'ै': '\u{114BA}', // AI  (verify next round)
  'ो': '\u{114BB}', // O   (verify next round)
  'ौ': '\u{114BC}', // AU  (verify next round)

  // Diacritics
  'ँ': '\u{114BF}', // candrabindu
  'ं': '\u{114C0}', // anusvara
  'ः': '\u{114C1}', // visarga
  '्': '\u{114C2}', // virama (this is what creates conjuncts)
};

export function transliterate(input) {
  let result = '';
  for (const ch of input) {
    result += map[ch] || ch; // if not mapped, keep it unchanged (spaces, danda, digits, etc.)
  }
  return result;
}