import { transliterate } from "./index.js";

const devanagariBox = document.getElementById('devanagari');
const tirhutaBox = document.getElementById('tirhuta');
const copyBtn = document.getElementById('copyBtn');

devanagariBox.addEventListener('input', () => {
  tirhutaBox.value = transliterate(devanagariBox.value);
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(tirhutaBox.value);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => (copyBtn.textContent = 'Copy Tirhuta text'), 1500);
});