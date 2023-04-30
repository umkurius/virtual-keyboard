import { textarea } from './constants.js';

export function checkCursorPosition(symbol) {
  let firstPart = textarea.value.slice(0, textarea.selectionStart);
  const secondPart = textarea.value.slice(textarea.selectionStart);
  firstPart += symbol;
  const sum = firstPart + secondPart;
  textarea.value = sum;
  textarea.selectionEnd = firstPart.length;
}
