/* eslint-disable no-plusplus */
const arr = [{
  code: 'Backquote', key: '`', shiftEN: '~', keyRU: 'ё', shiftRU: 'Ё', capsRus: 'true',
}, {
  code: 'Digi1', key: '1', shiftEN: '!', keyRU: '1', shiftRU: '!',
}, {
  code: 'Digit2', key: '2', shiftEN: '@', keyRU: '2', shiftRU: '"',
}, {
  code: 'Digit3', key: '3', shiftEN: '#', keyRU: '3', shiftRU: '№',
}, {
  code: 'Digit4', key: '4', shiftEN: '$', keyRU: '4', shiftRU: ';',
}, {
  code: 'Digit5', key: '5', shiftEN: '%', keyRU: '5', shiftRU: '%',
}, {
  code: 'Digit6', key: '6', shiftEN: '^', keyRU: '6', shiftRU: ':',
}, {
  code: 'Digit7', key: '7', shiftEN: '&', keyRU: '7', shiftRU: '?',
}, {
  code: 'Digit8', key: '8', shiftEN: '*', keyRU: '8', shiftRU: '*',
}, {
  code: 'Digit9', key: '9', shiftEN: '(', keyRU: '9', shiftRU: '(',
}, {
  code: 'Digit0', key: '0', shiftEN: ')', keyRU: '0', shiftRU: ')',
}, {
  code: 'Minus', key: '-', shiftEN: '_', keyRU: '-', shiftRU: '_',
}, {
  code: 'Equal', key: '=', shiftEN: '+', keyRU: '=', shiftRU: '+',
}, {
  code: 'Backspace', key: 'Backspace', shiftEN: 'Backspace', keyRU: 'Backspace', shiftRU: 'Backspace',
}, {
  code: 'Tab', key: 'Tab', shiftEN: 'Tab', keyRU: 'Tab', shiftRU: 'Tab',
}, {
  code: 'KeyQ', key: 'q', shiftEN: 'Q', keyRU: 'й', shiftRU: 'Й', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyW', key: 'w', shiftEN: 'W', keyRU: 'ц', shiftRU: 'Ц', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyE', key: 'e', shiftEN: 'E', keyRU: 'у', shiftRU: 'У', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyR', key: 'r', shiftEN: 'R', keyRU: 'к', shiftRU: 'К', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyT', key: 't', shiftEN: 'T', keyRU: 'е', shiftRU: 'Е', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyY', key: 'y', shiftEN: 'Y', keyRU: 'н', shiftRU: 'Н', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyU', key: 'u', shiftEN: 'U', keyRU: 'г', shiftRU: 'Г', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyI', key: 'i', shiftEN: 'I', keyRU: 'ш', shiftRU: 'Ш', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyO', key: 'o', shiftEN: 'O', keyRU: 'щ', shiftRU: 'Щ', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyP', key: 'p', shiftEN: 'P', keyRU: 'з', shiftRU: 'З', capsEng: 'true', capsRus: 'true',
},
{
  code: 'BracketLeft', key: '[', shiftEN: '{', keyRU: 'х', shiftRU: 'Х', capsRus: 'true',
}, {
  code: 'BracketRight', key: ']', shiftEN: '}', keyRU: 'ъ', shiftRU: 'Ъ', capsRus: 'true',
}, {
  code: 'Backslash', key: '\\', shiftEN: '|', keyRU: '\\', shiftRU: '/',
}, {
  code: 'Delete', key: 'Del', shiftEN: 'Del', keyRU: 'Del', shiftRU: 'Del',
}, {
  code: 'CapsLock', key: 'CapsLock', shiftEN: 'CapsLock', keyRU: 'CapsLock', shiftRU: 'CapsLock',
}, {
  code: 'KeyA', key: 'a', shiftEN: 'A', keyRU: 'ф', shiftRU: 'Ф', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyS', key: 's', shiftEN: 'S', keyRU: 'ы', shiftRU: 'Ы', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyD', key: 'd', shiftEN: 'D', keyRU: 'в', shiftRU: 'В', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyF', key: 'f', shiftEN: 'F', keyRU: 'а', shiftRU: 'А', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyG', key: 'g', shiftEN: 'G', keyRU: 'п', shiftRU: 'П', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyH', key: 'h', shiftEN: 'H', keyRU: 'р', shiftRU: 'Р', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyJ', key: 'j', shiftEN: 'J', keyRU: 'о', shiftRU: 'О', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyK', key: 'k', shiftEN: 'K', keyRU: 'л', shiftRU: 'Л', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyL', key: 'l', shiftEN: 'L', keyRU: 'д', shiftRU: 'Д', capsEng: 'true', capsRus: 'true',
}, {
  code: 'Semicolon', key: ';', shiftEN: ':', keyRU: 'ж', shiftRU: 'Ж', capsRus: 'true',
}, {
  code: 'Quote', key: "'", shiftEN: '"', keyRU: 'э', shiftRU: 'Э', capsRus: 'true',
}, {
  code: 'Enter', key: 'Enter', shiftEN: 'Enter', keyRU: 'Enter', shiftRU: 'Enter',
}, {
  code: 'ShiftLeft', key: 'Shift', shiftEN: 'Shift', keyRU: 'Shift', shiftRU: 'Shift',
}, {
  code: 'KeyZ', key: 'z', shiftEN: 'Z', keyRU: 'я', shiftRU: 'Я', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyX', key: 'x', shiftEN: 'X', keyRU: 'ч', shiftRU: 'Ч', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyС', key: 'с', shiftEN: 'С', keyRU: 'с', shiftRU: 'С', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyV', key: 'v', shiftEN: 'V', keyRU: 'м', shiftRU: 'М', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyB', key: 'b', shiftEN: 'B', keyRU: 'и', shiftRU: 'И', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyN', key: 'n', shiftEN: 'N', keyRU: 'т', shiftRU: 'Т', capsEng: 'true', capsRus: 'true',
}, {
  code: 'KeyM', key: 'm', shiftEN: 'M', keyRU: 'ь', shiftRU: 'Ь', capsEng: 'true', capsRus: 'true',
}, {
  code: 'Comma', key: ',', shiftEN: '<', keyRU: 'б', shiftRU: 'Б', capsRus: 'true',
}, {
  code: 'Period', key: '.', shiftEN: '>', keyRU: 'ю', shiftRU: 'Ю', capsRus: 'true',
}, {
  code: 'Slash', key: '/', shiftEN: '?', keyRU: '.', shiftRU: ',',
}, {
  code: 'ArrowUp', key: '▲', shiftEN: '▲', keyRU: '▲', shiftRU: '▲',
}, {
  code: 'ShiftRight', key: 'Shift', shiftEN: 'Shift', keyRU: 'Shift', shiftRU: 'Shift',
}, {
  code: 'ControlLeft', key: 'Ctrl', shiftEN: 'Ctrl', keyRU: 'Ctrl', shiftRU: 'Ctrl',
}, {
  code: 'MetaLeft', key: 'Win', shiftEN: 'Win', keyRU: 'Win', shiftRU: 'Win',
}, {
  code: 'AltLeft', key: 'Alt', shiftEN: 'Alt', keyRU: 'Alt', shiftRU: 'Alt',
}, {
  code: 'Space', key: '', shiftEN: '', keyRU: '', shiftRU: '',
}, {
  code: 'AltRight', key: 'Alt', shiftEN: 'Alt', keyRU: 'Alt', shiftRU: 'Alt',
}, {
  code: 'ArrowLeft', key: '◄', shiftEN: '◄', keyRU: '◄', shiftRU: '◄',
}, {
  code: 'ArrowDown', key: '▼', shiftEN: '▼', keyRU: '▼', shiftRU: '▼',
}, {
  code: 'ArrowRight', key: '►', shiftEN: '►', keyRU: '►', shiftRU: '►',
}, {
  code: 'ControlRight', key: 'Ctrl', shiftEN: 'Ctrl', keyRU: 'Ctrl', shiftRU: 'Ctrl',
},
];

const main = document.createElement('main');
main.classList.add('container');
document.body.append(main);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
main.append(keyboard);

function render() {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    out += `<div class="keyboard__key eng down ${arr[i].code}" data-caps="${arr[i].capsEng}">${arr[i].key}</div>`
    + `<div class="keyboard__key up eng hidden ${arr[i].code}" data-caps="${arr[i].capsEng}">${arr[i].shiftEN}</div>`;
  }
  keyboard.innerHTML = out;
}
function renderRus() {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    out += `<div class="keyboard__key rus down ${arr[i].code}" data-caps="${arr[i].capsRus}">${arr[i].keyRU}</div>`
    + `<div class="keyboard__key up rus hidden ${arr[i].code}" data-caps="${arr[i].capsRus}">${arr[i].shiftRU}</div>`;
  }
  keyboard.innerHTML = out;
}

render();

const keys = document.getElementsByClassName('keyboard__key');

window.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    if (keys[0].classList.contains('eng')) {
      renderRus();
      return;
    }
    if (keys[0].classList.contains('rus')) {
      render();
    }
  }
});

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

window.addEventListener('keyup', e => {
  if (e.code === 'CapsLock') {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].dataset.caps === 'true') {
        keys[i].classList.toggle('hidden');
      }
    }
  }
});
window.addEventListener('keydown', e => {
  console.log(e);
});
