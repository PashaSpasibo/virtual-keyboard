// header
let header = document.createElement('header');
let header__heading = document.createElement('h1');
header__heading.className = 'header__heading'
header__heading.innerHTML = 'Virtual keyboard';

document.body.append(header);
header.append(header__heading);

//main, sections
let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let textWrapper = document.createElement('section');
textWrapper.className = 'text-wrapper';
main.append(textWrapper);

let textarea = document.createElement('textarea');
textarea.className ='textarea';
textWrapper.append(textarea);

let keyboardWrapper = document.createElement('section');
keyboardWrapper.className ='keyboard-wrapper';
main.append(keyboardWrapper);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboardWrapper.append(keyboard);

let description = document.createElement('section');
description.className = 'description-wrapper';
main.append(description);

let descriptionOS = document.createElement('p');
descriptionOS.className = 'description__os';
descriptionOS.innerHTML = 'MacOS keyboard'
description.append(descriptionOS);

let descriptionButton = document.createElement('button');
descriptionButton.className = 'description__button';
descriptionButton.innerHTML = 'Change language'
description.append(descriptionButton);

// let  = document.createElement('');
// .className = '';
// .append();
