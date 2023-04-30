import { textarea, capsBtn, keys } from './constants.js';
import { checkCursorPosition } from './checkCursorPosition.js';

export function writeByMouse() {
  window.addEventListener('click', e => {
    const target = e.target;
    if (target.innerText.length === 1) {
      checkCursorPosition(target.innerText);
    }
    if (target.dataset.id === 'Backspace') {
      let firstPart = textarea.value.slice(0, textarea.selectionStart);
      const secondPart = textarea.value.slice(textarea.selectionStart);
      firstPart = firstPart.slice(0, -1);
      const sum = firstPart + secondPart;
      textarea.value = sum;
      textarea.selectionEnd = firstPart.length;
    }
    if (target.dataset.id === 'Delete') {
      const firstPart = textarea.value.slice(0, textarea.selectionStart);
      let secondPart = textarea.value.slice(textarea.selectionStart);
      secondPart = secondPart.slice(1);
      const sum = firstPart + secondPart;
      textarea.value = sum;
      textarea.selectionEnd = firstPart.length;
    }
    if (target.dataset.id === 'CapsLock') {
      for (let i = 0; i < capsBtn.length; i++) {
        capsBtn[i].classList.toggle('active_caps');
      }
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].dataset.caps === 'true') {
          keys[i].classList.toggle('hidden');
        }
      }
    }
    if (target.dataset.id === 'Enter') {
      checkCursorPosition('\n');
    }
    if (target.dataset.id === 'Space') {
      checkCursorPosition(' ');
    }
    if (target.dataset.id === 'Tab') {
      checkCursorPosition('    ');
    }
  });
}
