import { keys } from './constants.js';

export function animateKeys() {
  window.addEventListener('keydown', e => {
    e.preventDefault();
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].classList.contains(e.code) && !keys[i].classList.contains('CapsLock')) {
        keys[i].classList.add('active');
      }
    }
  });

  window.addEventListener('keyup', e => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].classList.contains(e.code)) {
        keys[i].classList.remove('active');
      }
    }
  });
}
