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

  window.addEventListener('mousedown', e => {
    const target = e.target;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].classList.contains(target.dataset.id)) {
        keys[i].classList.add('active');
      }
    }
    for (let i = 0; i < keys.length; i++) {
      keys[i].addEventListener('mouseout', () => {
        keys[i].classList.remove('active');
      });
    }
  });

  window.addEventListener('mouseup', e => {
    const target = e.target;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].classList.contains(target.dataset.id)) {
        keys[i].classList.remove('active');
      }
    }
  });
}
