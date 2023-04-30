import {
  main,
  textarea,
  keyboard,
  description,
  language,
} from './constants.js';

export function renderBasic() {
  main.classList.add('container');
  document.body.append(main);

  textarea.classList.add('textarea');
  main.append(textarea);

  keyboard.classList.add('keyboard');
  main.append(keyboard);

  main.append(description);
  main.append(language);
}
