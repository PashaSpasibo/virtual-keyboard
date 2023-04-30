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

//keyboard
let keyboardRow1 = document.createElement('div');
keyboardRow1.className = 'keyboard__row';
keyboard.append(keyboardRow1);

let keyboardRow2 = document.createElement('div');
keyboardRow2.className = 'keyboard__row keyboard__row_left';
keyboard.append(keyboardRow2);

let keyboardRow3 = document.createElement('div');
keyboardRow3.className = 'keyboard__row keyboard__row_left';
keyboard.append(keyboardRow3);

let keyboardRow4 = document.createElement('div');
keyboardRow4.className = 'keyboard__row';
keyboard.append(keyboardRow4);

let keyboardRow5 = document.createElement('div');
keyboardRow5.className = 'keyboard__row';
keyboard.append(keyboardRow5);


let enterKey = document.createElement('button');
enterKey.className = 'enter-key key';
keyboard.append(enterKey);

//kyboard__row1
let backquoteKey = document.createElement('button');
backquoteKey.className = 'key';
keyboardRow1.append(backquoteKey);

let digit1Key = document.createElement('button');
digit1Key.className = 'key';
keyboardRow1.append(digit1Key); 

let digit2Key = document.createElement('button');
digit2Key.className = 'key';
keyboardRow1.append(digit2Key);

let digit3Key = document.createElement('button');
digit3Key.className = 'key';
keyboardRow1.append(digit3Key);

let digit4Key = document.createElement('button');
digit4Key.className = 'key';
keyboardRow1.append(digit4Key);

let digit5Key = document.createElement('button');
digit5Key.className = 'key';
keyboardRow1.append(digit5Key);

let digit6Key = document.createElement('button');
digit6Key.className = 'key';
keyboardRow1.append(digit6Key);

let digit7Key = document.createElement('button');
digit7Key.className = 'key';
keyboardRow1.append(digit7Key);

let digit8Key = document.createElement('button');
digit8Key.className = 'key';
keyboardRow1.append(digit8Key);

let digit9Key = document.createElement('button');
digit9Key.className = 'key';
keyboardRow1.append(digit9Key);

let digit0Key = document.createElement('button');
digit0Key.className = 'key';
keyboardRow1.append(digit0Key);

let minusKey = document.createElement('button');
minusKey.className = 'key';
keyboardRow1.append(minusKey);

let equalKey = document.createElement('button');
equalKey.className = 'key';
keyboardRow1.append(equalKey);

let backspaceKey = document.createElement('button');
backspaceKey.className = 'backspace-key key';
keyboardRow1.append(backspaceKey);

//keyboard__row2

let tabKey = document.createElement('button');
tabKey.className = 'tab-key key';
keyboardRow2.append(tabKey);

let keyQ = document.createElement('button');
keyQ.className = 'key';
keyboardRow2.append(keyQ);

let keyW = document.createElement('button');
keyW.className = 'key';
keyboardRow2.append(keyW);

let keyE = document.createElement('button');
keyE.className = 'key';
keyboardRow2.append(keyE);

let keyR = document.createElement('button');
keyR.className = 'key';
keyboardRow2.append(keyR);

let keyT = document.createElement('button');
keyT.className = 'key';
keyboardRow2.append(keyT);

let keyY = document.createElement('button');
keyY.className = 'key';
keyboardRow2.append(keyY);

let keyU = document.createElement('button');
keyU.className = 'key';
keyboardRow2.append(keyU);

let keyI = document.createElement('button');
keyI.className = 'key';
keyboardRow2.append(keyI);

let keyO = document.createElement('button');
keyO.className = 'key';
keyboardRow2.append(keyO);

let keyP = document.createElement('button');
keyP.className = 'key';
keyboardRow2.append(keyP);

let bracketLeftKey = document.createElement('button');
bracketLeftKey.className = 'key';
keyboardRow2.append(bracketLeftKey);

let bracketRightKey = document.createElement('button');
bracketRightKey.className = 'key';
keyboardRow2.append(bracketRightKey);

//keyboard__row3

let capsKey = document.createElement('button');
capsKey.className = 'caps-key key';
keyboardRow3.append(capsKey);

let keyA = document.createElement('button');
keyA.className = 'key';
keyboardRow3.append(keyA);

let keyS = document.createElement('button');
keyS.className = 'key';
keyboardRow3.append(keyS);

let keyD = document.createElement('button');
keyD.className = 'key';
keyboardRow3.append(keyD);

let keyF = document.createElement('button');
keyF.className = 'key';
keyboardRow3.append(keyF);

let keyG = document.createElement('button');
keyG.className = 'key';
keyboardRow3.append(keyG);

let keyH = document.createElement('button');
keyH.className = 'key';
keyboardRow3.append(keyH);

let keyJ = document.createElement('button');
keyJ.className = 'key';
keyboardRow3.append(keyJ);

let keyK = document.createElement('button');
keyK.className = 'key';
keyboardRow3.append(keyK);

let keyL = document.createElement('button');
keyL.className = 'key';
keyboardRow3.append(keyL);

let semicolonKey = document.createElement('button');
semicolonKey.className = 'key';
keyboardRow3.append(semicolonKey);

let quoteKey = document.createElement('button');
quoteKey.className = 'key';
keyboardRow3.append(quoteKey);

let backslashKey = document.createElement('button');
backslashKey.className = 'key';
keyboardRow3.append(backslashKey);

//keyboard__row4

let shiftLeft = document.createElement('button');
shiftLeft.className = 'shift-l-key key';
keyboardRow4.append(shiftLeft);

let intlBackslashKey = document.createElement('button');
intlBackslashKey.className = 'key';
keyboardRow4.append(intlBackslashKey);

let keyZ = document.createElement('button');
keyZ.className = 'key';
keyboardRow4.append(keyZ);

let keyX = document.createElement('button');
keyX.className = 'key';
keyboardRow4.append(keyX);

let keyC = document.createElement('button');
keyC.className = 'key';
keyboardRow4.append(keyC);

let keyV = document.createElement('button');
keyV.className = 'key';
keyboardRow4.append(keyV);

let keyB = document.createElement('button');
keyB.className = 'key';
keyboardRow4.append(keyB);

let keyN = document.createElement('button');
keyN.className = 'key';
keyboardRow4.append(keyN);

let keyM = document.createElement('button');
keyM.className = 'key';
keyboardRow4.append(keyM);

let commaKey = document.createElement('button');
commaKey.className = 'key';
keyboardRow4.append(commaKey);

let periodKey = document.createElement('button');
periodKey.className = 'key';
keyboardRow4.append(periodKey);

let slashKey = document.createElement('button');
slashKey.className = 'key';
keyboardRow4.append(slashKey);

let shiftRight = document.createElement('button');
shiftRight.className = 'shift-r-key key';
keyboardRow4.append(shiftRight);

//keyboard__row5

let fnKey = document.createElement('button');
fnKey.className = 'fn-key key';
keyboardRow5.append(fnKey);


let ctrlLeftKey = document.createElement('button');
ctrlLeftKey.className = 'ctrl-key key';
keyboardRow5.append(ctrlLeftKey);

let altLeftKey = document.createElement('button');
altLeftKey.className = 'alt-key key';
keyboardRow5.append(altLeftKey);

let metaLeftKey = document.createElement('button');
metaLeftKey.className = 'meta-key key';
keyboardRow5.append(metaLeftKey);

let spaceKey = document.createElement('button');
spaceKey.className = 'space-key key';
keyboardRow5.append(spaceKey);

let metaRightKey = document.createElement('button');
metaRightKey.className = 'meta-key key';
keyboardRow5.append(metaRightKey);

let altRightKey = document.createElement('button');
altRightKey.className = 'alt-key key';
keyboardRow5.append(altRightKey);

let arrows = document.createElement('div');
arrows.className = 'arrows-container';
keyboardRow5.append(arrows);

let arrowUp = document.createElement('button');
arrowUp.className = 'arrow-up arrow key';
arrows.append(arrowUp);

let arrowLeft = document.createElement('button');
arrowLeft.className = 'arrow-left arrow key';
arrows.append(arrowLeft);

let arrowDown = document.createElement('button');
arrowDown.className = 'arrow-down arrow key';
arrows.append(arrowDown);

let arrowRight = document.createElement('button');
arrowRight.className = 'arrow-right arrow key';
arrows.append(arrowRight);

// let  = document.createElement('');
// .className = '';
// .append();
