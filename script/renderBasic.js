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

  description.classList.add('paragraph');
  main.append(description);

  language.classList.add('paragraph');
  main.append(language);
}
