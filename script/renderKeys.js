import { arr, keyboard } from "./constants.js";

export function render() {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    out += `<div class="keyboard__key eng down ${arr[i].code}" data-id="${arr[i].code}" data-caps="${arr[i].capsEng}">${arr[i].key}</div>`
    + `<div class="keyboard__key up eng hidden ${arr[i].code}" data-id="${arr[i].code}" data-caps="${arr[i].capsEng}">${arr[i].shiftEN}</div>`;
  }
  keyboard.innerHTML = out;
}
export function renderRus() {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    out += `<div class="keyboard__key rus down ${arr[i].code}" data-id="${arr[i].code}" data-caps="${arr[i].capsRus}">${arr[i].keyRU}</div>`
    + `<div class="keyboard__key up rus hidden ${arr[i].code}" data-id="${arr[i].code}" data-caps="${arr[i].capsRus}">${arr[i].shiftRU}</div>`;
  }
  keyboard.innerHTML = out;
}