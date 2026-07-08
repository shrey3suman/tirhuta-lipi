import { transliterate } from './index.js';

const devanagariBox = document.getElementById('devanagari');
const tirhutaBox = document.getElementById('tirhuta');
const copyBtn = document.getElementById('copyBtn');
const btnLabel = copyBtn.querySelector('.btn-label');

devanagariBox.addEventListener('input', () => {
  tirhutaBox.value = transliterate(devanagariBox.value);
});

copyBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(tirhutaBox.value);
  btnLabel.textContent = 'Copied';
  copyBtn.classList.add('copied');
  setTimeout(() => {
    btnLabel.textContent = 'Copy';
    copyBtn.classList.remove('copied');
  }, 1400);
});