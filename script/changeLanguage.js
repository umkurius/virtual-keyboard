import { render, renderRus } from './renderKeys.js';
import { keys, capsBtn } from './constants.js';

export function changeLanguage() {
  window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.altKey) {
      if (keys[0].classList.contains('eng') && !capsBtn[0].classList.contains('active_caps')) {
        renderRus();
        return;
      }
      if (keys[0].classList.contains('eng') && capsBtn[0].classList.contains('active_caps')) {
        renderRus();
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].dataset.caps === 'true') {
            keys[i].classList.toggle('hidden');
          }
        }
        for (let i = 0; i < capsBtn.length; i++) {
          capsBtn[i].classList.add('active_caps');
        }
        return;
      }
      if (keys[0].classList.contains('rus') && !capsBtn[0].classList.contains('active_caps')) {
        render();
        return;
      }
      if (keys[0].classList.contains('rus') && capsBtn[0].classList.contains('active_caps')) {
        render();
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].dataset.caps === 'true') {
            keys[i].classList.toggle('hidden');
          }
        }
        for (let i = 0; i < capsBtn.length; i++) {
          capsBtn[i].classList.add('active_caps');
        }
      }
    }
  });
}
