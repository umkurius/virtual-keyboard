let btn = document.querySelector('.win');
let capsbtn = document.querySelector('.capslock');
let shiftBtn = document.querySelector('.shiftleft');
let keyboard = document.querySelector('.keyboard');
const eng = document.querySelectorAll('.keyboard__row_eng');
const rus = document.querySelectorAll('.keyboard__row_rus');
const down = document.querySelectorAll('.down');
const up = document.querySelectorAll('.up');


btn.addEventListener('click', () => {
  eng.forEach(el => {
    el.classList.toggle('hidden');
  })
  rus.forEach(el => {
    el.classList.toggle('hidden');
  })
})

capsbtn.addEventListener('click', () => {
  down.forEach( el => {
    el.classList.toggle('hidden');
  })
  up.forEach( el => {
    el.classList.toggle('hidden');
  })
  
})



window.addEventListener('keydown', e => {
  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
    down.forEach( el => {
      el.classList.add('hidden');
    })
    up.forEach( el => {
      el.classList.remove('hidden');
    })
  }
})
window.addEventListener('keyup', (e) => {
  if (e.code == 'CapsLock') {
    down.forEach( el => {
      el.classList.toggle('hidden');
    })
    up.forEach( el => {
      el.classList.toggle('hidden');
    })
  }
})
window.addEventListener('keyup', e => {
  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
    down.forEach( el => {
      el.classList.remove('hidden');
    })
    up.forEach( el => {
      el.classList.add('hidden');
    })
  }
})

