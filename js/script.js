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
enterKey.innerHTML = '&#8617;';

//kyboard__row1
let backquoteKey = document.createElement('button');
backquoteKey.className = 'key';
keyboardRow1.append(backquoteKey);
backquoteKey.innerHTML = '§';

let digit1Key = document.createElement('button');
digit1Key.className = 'key';
keyboardRow1.append(digit1Key); 
digit1Key.innerHTML = '1';

let digit2Key = document.createElement('button');
digit2Key.className = 'key';
keyboardRow1.append(digit2Key);
digit2Key.innerHTML = '2';

let digit3Key = document.createElement('button');
digit3Key.className = 'key';
keyboardRow1.append(digit3Key);
digit3Key.innerHTML = '3';

let digit4Key = document.createElement('button');
digit4Key.className = 'key';
keyboardRow1.append(digit4Key);
digit4Key.innerHTML = '4';

let digit5Key = document.createElement('button');
digit5Key.className = 'key';
keyboardRow1.append(digit5Key);
digit5Key.innerHTML = '5';

let digit6Key = document.createElement('button');
digit6Key.className = 'key';
keyboardRow1.append(digit6Key);
digit6Key.innerHTML = '6';

let digit7Key = document.createElement('button');
digit7Key.className = 'key';
keyboardRow1.append(digit7Key);
digit7Key.innerHTML = '7';

let digit8Key = document.createElement('button');
digit8Key.className = 'key';
keyboardRow1.append(digit8Key);
digit8Key.innerHTML = '8';

let digit9Key = document.createElement('button');
digit9Key.className = 'key';
keyboardRow1.append(digit9Key);
digit9Key.innerHTML = '9';

let digit0Key = document.createElement('button');
digit0Key.className = 'key';
keyboardRow1.append(digit0Key);
digit0Key.innerHTML = '0';

let minusKey = document.createElement('button');
minusKey.className = 'key';
keyboardRow1.append(minusKey);
minusKey.innerHTML = '-';

let equalKey = document.createElement('button');
equalKey.className = 'key';
keyboardRow1.append(equalKey);
equalKey.innerHTML = '=';

let backspaceKey = document.createElement('button');
backspaceKey.className = 'backspace-key key';
keyboardRow1.append(backspaceKey);
backspaceKey.innerHTML = '&#8592;'

//keyboard__row2

let tabKey = document.createElement('button');
tabKey.className = 'tab-key key';
keyboardRow2.append(tabKey);
tabKey.innerHTML = '&#8677;'


let keyQ = document.createElement('button');
keyQ.className = 'key';
keyboardRow2.append(keyQ);
keyQ.innerHTML = 'Q';


let keyW = document.createElement('button');
keyW.className = 'key';
keyboardRow2.append(keyW);
keyW.innerHTML = 'W';

let keyE = document.createElement('button');
keyE.className = 'key';
keyboardRow2.append(keyE);
keyE.innerHTML = 'E';

let keyR = document.createElement('button');
keyR.className = 'key';
keyboardRow2.append(keyR);
keyR.innerHTML = 'R';

let keyT = document.createElement('button');
keyT.className = 'key';
keyboardRow2.append(keyT);
keyT.innerHTML = 'T';

let keyY = document.createElement('button');
keyY.className = 'key';
keyboardRow2.append(keyY);
keyY.innerHTML = 'Y';

let keyU = document.createElement('button');
keyU.className = 'key';
keyboardRow2.append(keyU);
keyU.innerHTML = 'U';

let keyI = document.createElement('button');
keyI.className = 'key';
keyboardRow2.append(keyI);
keyI.innerHTML = 'I';

let keyO = document.createElement('button');
keyO.className = 'key';
keyboardRow2.append(keyO);
keyO.innerHTML = 'O';

let keyP = document.createElement('button');
keyP.className = 'key';
keyboardRow2.append(keyP);
keyP.innerHTML = 'P';

let bracketLeftKey = document.createElement('button');
bracketLeftKey.className = 'key';
keyboardRow2.append(bracketLeftKey);
bracketLeftKey.innerHTML = '[';

let bracketRightKey = document.createElement('button');
bracketRightKey.className = 'key';
keyboardRow2.append(bracketRightKey);
bracketRightKey.innerHTML = ']';

//keyboard__row3

let capsKey = document.createElement('button');
capsKey.className = 'caps-key key';
keyboardRow3.append(capsKey);
capsKey.innerHTML = '&#8682;'

let keyA = document.createElement('button');
keyA.className = 'key';
keyboardRow3.append(keyA);
keyA.innerHTML = 'A';

let keyS = document.createElement('button');
keyS.className = 'key';
keyboardRow3.append(keyS);
keyS.innerHTML = 'S';

let keyD = document.createElement('button');
keyD.className = 'key';
keyboardRow3.append(keyD);
keyD.innerHTML = 'D';

let keyF = document.createElement('button');
keyF.className = 'key';
keyboardRow3.append(keyF);
keyF.innerHTML = 'F';

let keyG = document.createElement('button');
keyG.className = 'key';
keyboardRow3.append(keyG);
keyG.innerHTML = 'G';

let keyH = document.createElement('button');
keyH.className = 'key';
keyboardRow3.append(keyH);
keyH.innerHTML = 'H';

let keyJ = document.createElement('button');
keyJ.className = 'key';
keyboardRow3.append(keyJ);
keyJ.innerHTML = 'J';

let keyK = document.createElement('button');
keyK.className = 'key';
keyboardRow3.append(keyK);
keyK.innerHTML = 'K';

let keyL = document.createElement('button');
keyL.className = 'key';
keyboardRow3.append(keyL);
keyL.innerHTML = 'L';

let semicolonKey = document.createElement('button');
semicolonKey.className = 'key';
keyboardRow3.append(semicolonKey);
semicolonKey.innerHTML = ';';

let quoteKey = document.createElement('button');
quoteKey.className = 'key';
keyboardRow3.append(quoteKey);
quoteKey.innerHTML = "'";

let backslashKey = document.createElement('button');
backslashKey.className = 'key';
keyboardRow3.append(backslashKey);
backslashKey.innerHTML = '\\';

//keyboard__row4

let shiftLeft = document.createElement('button');
shiftLeft.className = 'shift-l-key key';
keyboardRow4.append(shiftLeft);
shiftLeft.innerHTML = '&#8679;';

let intlBackslashKey = document.createElement('button');
intlBackslashKey.className = 'key';
keyboardRow4.append(intlBackslashKey);
intlBackslashKey.innerHTML = '`';

let keyZ = document.createElement('button');
keyZ.className = 'key';
keyboardRow4.append(keyZ);
keyZ.innerHTML = 'Z';

let keyX = document.createElement('button');
keyX.className = 'key';
keyboardRow4.append(keyX);
keyX.innerHTML = 'X';

let keyC = document.createElement('button');
keyC.className = 'key';
keyboardRow4.append(keyC);
keyC.innerHTML = 'C';

let keyV = document.createElement('button');
keyV.className = 'key';
keyboardRow4.append(keyV);
keyV.innerHTML = 'V';

let keyB = document.createElement('button');
keyB.className = 'key';
keyboardRow4.append(keyB);
keyB.innerHTML = 'B';

let keyN = document.createElement('button');
keyN.className = 'key';
keyboardRow4.append(keyN);
keyN.innerHTML = 'N';

let keyM = document.createElement('button');
keyM.className = 'key';
keyboardRow4.append(keyM);
keyM.innerHTML = 'M';

let commaKey = document.createElement('button');
commaKey.className = 'key';
keyboardRow4.append(commaKey);
commaKey.innerHTML = ',';

let periodKey = document.createElement('button');
periodKey.className = 'key';
keyboardRow4.append(periodKey);
periodKey.innerHTML = '.';

let slashKey = document.createElement('button');
slashKey.className = 'key';
keyboardRow4.append(slashKey);
slashKey.innerHTML = '/';

let shiftRight = document.createElement('button');
shiftRight.className = 'shift-r-key key';
keyboardRow4.append(shiftRight);
shiftRight.innerHTML = '&#8679;';

//keyboard__row5

let fnKey = document.createElement('button');
fnKey.className = 'fn-key key';
keyboardRow5.append(fnKey);
fnKey.innerHTML = 'fn';

let ctrlLeftKey = document.createElement('button');
ctrlLeftKey.className = 'ctrl-key key';
keyboardRow5.append(ctrlLeftKey);
ctrlLeftKey.innerHTML = 'ctrl';

let altLeftKey = document.createElement('button');
altLeftKey.className = 'alt-key key';
keyboardRow5.append(altLeftKey);
altLeftKey.innerHTML = 'alt';

let metaLeftKey = document.createElement('button');
metaLeftKey.className = 'meta-key key';
keyboardRow5.append(metaLeftKey);
metaLeftKey.innerHTML = 'cmd';

let spaceKey = document.createElement('button');
spaceKey.className = 'space-key key';
keyboardRow5.append(spaceKey);

let metaRightKey = document.createElement('button');
metaRightKey.className = 'meta-key key';
keyboardRow5.append(metaRightKey);
metaRightKey.innerHTML = 'cmd';

let altRightKey = document.createElement('button');
altRightKey.className = 'alt-key key';
keyboardRow5.append(altRightKey);
altRightKey.innerHTML = 'alt';

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
