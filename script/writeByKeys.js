import { keys, textarea } from './constants.js';
import { checkCursorPosition } from './checkCursorPosition.js';

export function writeByKeys() {
  window.addEventListener('keydown', e => {
    for (let i = 0; i < keys.length; i++) {
      if (e.code === keys[i].dataset.id
          && !keys[i].classList.contains('hidden')
          && (keys[i].innerText.length === 1)) {
        checkCursorPosition(keys[i].innerText);
      }
    }
    if (e.code === 'Backspace') {
      let firstPart = textarea.value.slice(0, textarea.selectionStart);
      const secondPart = textarea.value.slice(textarea.selectionStart);
      firstPart = firstPart.slice(0, -1);
      const sum = firstPart + secondPart;
      textarea.value = sum;
      textarea.selectionEnd = firstPart.length;
    }
    if (e.code === 'Delete') {
      const firstPart = textarea.value.slice(0, textarea.selectionStart);
      let secondPart = textarea.value.slice(textarea.selectionStart);
      secondPart = secondPart.slice(1);
      const sum = firstPart + secondPart;
      textarea.value = sum;
      textarea.selectionEnd = firstPart.length;
    }
    if (e.code === 'Enter') {
      checkCursorPosition('\n');
    }
    if (e.code === 'Space') {
      checkCursorPosition(' ');
    }
    if (e.code === 'Tab') {
      checkCursorPosition('    ');
    }
  });
}
