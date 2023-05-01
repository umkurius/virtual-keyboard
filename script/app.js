import { renderBasic } from './renderBasic.js';
import { renderKeyboardInner } from './renderKeyboardInner.js';
import { upShift, downShift, addCaps } from './serviceKeys.js';
import { changeLanguage } from './changeLanguage.js';
import { printByKeys } from './printByKeys.js';
import { printByMouse } from './printByMouse.js';
import { animateKeys } from './animateKeys.js';
import { keyboard } from './constants.js';

renderBasic();
renderKeyboardInner();
upShift();
downShift();
addCaps();
changeLanguage();
printByKeys();
printByMouse();
animateKeys();

window.addEventListener('beforeunload', () => {
  const current = JSON.stringify(keyboard.innerHTML);
  localStorage.setItem('html', current);
});
