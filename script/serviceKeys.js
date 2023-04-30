import { keys, capsBtn } from './constants.js';

export function upShift() {
  window.addEventListener('keydown', e => {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains('hidden')) {
          keys[i].classList.remove('hidden');
        } else {
          keys[i].classList.add('hidden');
        }
      }
    }
  });
}

export function downShift() {
  window.addEventListener('keyup', e => {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains('hidden')) {
          keys[i].classList.remove('hidden');
        } else {
          keys[i].classList.add('hidden');
        }
      }
    }
  });
}

export function addCaps() {
  window.addEventListener('keyup', e => {
    if (e.code === 'CapsLock') {
      for (let i = 0; i < capsBtn.length; i++) {
        capsBtn[i].classList.toggle('active_caps');
      }
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].dataset.caps === 'true') {
          keys[i].classList.toggle('hidden');
        }
      }
    }
  });
}
