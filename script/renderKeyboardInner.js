import { keyboard } from './constants.js';
import { render } from './renderKeys.js';

export function renderKeyboardInner() {
  window.addEventListener('load', () => {
    if (localStorage.getItem('html')) {
      keyboard.innerHTML = JSON.parse(localStorage.getItem('html'));
    } else {
      render();
    }
  });
}
