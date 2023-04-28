const btn = document.querySelector('.win');
const capsbtn = document.querySelector('.capslock');
const shiftBtn = document.querySelector('.shiftleft');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.keyboard__key');
const eng = document.querySelectorAll('.keyboard__row_eng');
const rus = document.querySelectorAll('.keyboard__row_rus');
const down = document.querySelectorAll('.down');
const up = document.querySelectorAll('.up');

btn.addEventListener('click', () => {
  eng.forEach(el => {
    el.classList.toggle('hidden');
  });
  rus.forEach(el => {
    el.classList.toggle('hidden');
  });
});

capsbtn.addEventListener('click', () => {
  down.forEach(el => {
    el.classList.toggle('hidden');
  });
  up.forEach(el => {
    el.classList.toggle('hidden');
  });
});

window.addEventListener('keydown', e => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    down.forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
    up.forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }
});

window.addEventListener('keyup', e => {
  if (e.code === 'CapsLock') {
    down.forEach(el => {
      if (el.dataset.caps === 'true') {
        el.classList.toggle('hidden');
      }
    });
    up.forEach(el => {
      if (el.dataset.caps === 'true') {
        el.classList.toggle('hidden');
      }
    });
  }
});
window.addEventListener('keyup', e => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    down.forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
    up.forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }
});
window.addEventListener('keydown', e => {
  for (let i = 0; i < keys.length; i++) {
    if (e.code === keys[i].dataset.keycode) {
      keys[i].classList.add('active');
    }
  }
});
window.addEventListener('keyup', e => {
  for (let i = 0; i < keys.length; i++) {
    if (e.code === keys[i].dataset.keycode) {
      keys[i].classList.remove('active');
    }
  }
});

window.addEventListener('keydown', e => {
  console.log(e.code);
});
