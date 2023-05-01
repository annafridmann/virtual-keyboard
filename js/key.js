let textareaPos = 0; //позиция курсора
let capsLock = false;
let lang = 'Gb';

let title = document.createElement('p');
title.className = "title";
title.innerHTML = "Virtual Keyboard";
document.body.append(title);
  
let textarea = document.createElement('textarea');
textarea.addEventListener('focus', () => { //сохраняем курсор при начале ввода склавиатуры
  console.log('focus'+ textareaPos + ' '+ textarea.selectionStart);
  textarea.selectionStart = textareaPos;
});

textarea.addEventListener('input', () => { //ввод с клавиатуры
  textareaPos = textarea.selectionStart;
  console.log('input'+ textareaPos );
 });

 textarea.addEventListener('click', () => {
  textareaPos = textarea.selectionStart;
  console.log('click ' + textareaPos);
});

textarea.className = "body-keyboard";
textarea.id = "textarea";
textarea.rows = 5;
textarea.cols = 50;
document.body.append(textarea);

let description = document.createElement('p');
description.className = "description";
description.innerHTML = "Для переключения языка нажмите комбинацию левых клавиш Shift + Alt";
document.body.append(description);

let divkeyboard = document.createElement('div');// создаем контейнер (для ряда)
divkeyboard.className = "keyboard";// c классом keyboard-row
divkeyboard.id = "keyboard";
document.body.append(divkeyboard);



let keys1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace']
let keys2 = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','|','Del']
let keys3 = ['CapsLock','a','s','d','f','g','h','j','k','l',';',"'",'Enter']
let keys4 = ['Shift','z','x','c','v','b','n','m',',','.','/','^','Shift']
let keys5 = ['Ctrl','Alt','Space','Alt','Ctrl','Home','Down','End']
let keysRus1 = ['ё','!','@','#','$','%','^','&','*','(',')','_','=','Backspace']
let keysRus2 = ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','Ъ','|','Del']
let keysRus3 = ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter']
let keysRus4 = ['Shift','я','ч','с','м','и','т','ь','б','ю','.','^','Shift']
let keysRus5 = ['Ctrl','Alt','Space','Alt','Ctrl','Home','Down','End']

  function createBtns(keys, div){
    keys.forEach(k => {
        console.log(k)
        let btn = document.createElement("button");
        btn.innerHTML = k;
        btn.type = "submit";
        btn.name = "Btn"+ k;
        btn.id = k;
        btn.className = 'keyboard-key';
        div.append(btn);
        if (String(k).length===1)
        btn.addEventListener('click', function handleClick() {
          textarea.selectionStart = textareaPos;
          textarea.selectionEnd = textareaPos;
            
          
          
          if (capsLock){
              textarea.value = textarea.value.substring(0, textareaPos) + String(k).toUpperCase() + textarea.value.substring(textarea.selectionStart);
              CapsLock.classList.add('capslock-pressed');
            } else {
              textarea.value = textarea.value.substring(0, textareaPos) + k + textarea.value.substring(textarea.selectionStart);
              CapsLock.classList.remove('capslock-pressed');
            }

          

          textareaPos = textareaPos + 1;
          console.log('virtu '+ textareaPos);
        });
      });
  }

  langChange();

  function keyboardActions() {
    let backspace = document.getElementById('Backspace')
    backspace.addEventListener('click', function handleClick() {
      textarea.selectionStart = textareaPos;
      textarea.value = textarea.value.substring(0, textarea.selectionStart -1)+textarea.value.substring(textarea.selectionStart );
      textareaPos = textareaPos - 1
      textarea.selectionStart = textareaPos;
      textarea.selectionEnd = textareaPos;
    });

    let enter = document.getElementById('Enter')
    enter.addEventListener('click', function handleClick() {
      textarea.focus();
      textarea.value = textarea.value +"\n";
      textareaPos = textareaPos +"\n";
    });

    let space = document.getElementById('Space');
    space.addEventListener('click', function handleClick() {
      textarea.selectionStart = textareaPos;
      textarea.selectionEnd = textareaPos;
      textarea.value = textarea.value.substring(0, textareaPos) +  " " + textarea.value.substring(textarea.selectionStart);
      textareaPos = textareaPos + 1;
      textarea.focus();
      textarea.selectionStart = textareaPos;
      textarea.selectionEnd = textareaPos;
      console.log('virtu tab'+ textareaPos);
    });

    let tab = document.getElementById('Tab');
    document.getElementById('textarea').addEventListener('keydown', function(e) {
      if (e.key == 'Tab') {
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = textarea.value.substring(0, start) +
          "\t" + textarea.value.substring(end);

        // put caret at right position again
        console.log('real tab '+ textarea.selectionStart + textarea.selectionEnd);
        textarea.selectionStart =
        textarea.selectionEnd = start + 1;
      }
    });

    tab.addEventListener('click', function handleClick() {
      textarea.selectionStart = textareaPos;
      textarea.selectionEnd = textareaPos;

      textarea.value = textarea.value.substring(0, textareaPos) +  "\t" + textarea.value.substring(textarea.selectionStart);

      textareaPos = textareaPos + 1;
      textarea.focus();
      textarea.selectionStart = textareaPos;
      textarea.selectionEnd = textareaPos;
      console.log('virtu tab'+ textareaPos);
    });

    let CapsLock = document.getElementById('CapsLock');
    CapsLock.addEventListener('click', function handleClick() {
      if (capsLock == false) {
        capsLock = true;
        CapsLock.classList.add('capslock-pressed')
      } else {
          capsLock = false;
          CapsLock.classList.remove('capslock-pressed')
        }
  
    });

    document.addEventListener('keydown', function(event) {
      if (event.code === 'CapsLock'){
        if (capsLock == false) {
          capsLock = true;
          CapsLock.classList.add('capslock-pressed');
        } else {
            capsLock = false;
            CapsLock.classList.remove('capslock-pressed');
          }
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.getModifierState('CapsLock')) {
        capsLock = true;
        console.log("Caps Lock is on");
      } else {
          capsLock = false;
          console.log("Caps Lock is off");
        }
    });

    let del = document.getElementById('Del')
    del.addEventListener('click', function handleClick() {
      textarea.selectionStart = textareaPos;
      textarea.value = textarea.value.substring(0, textarea.selectionStart)+textarea.value.substring(textarea.selectionStart+1);
      textarea.selectionStart = textareaPos;
      textarea.selectionEnd = textareaPos;
    });

    // let eng = document.querySelector('#keyboard');
    // let rus = document.querySelector('#keyboard1');
}




function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) { // все ли клавиши из набора нажаты?
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
    
  });

}


function langChange(){
  document.getElementById("keyboard").remove();
  if (lang === 'Rus'){
    createRusKeyboard();
    keyboardActions();
    lang = 'Gb';  
  } else
    if (lang === 'Gb'){
      createGbKeyboard();
      keyboardActions();
      lang = 'Rus';  
    }
}

runOnKeys(
  () => langChange(),
  "AltLeft",
  "ShiftLeft"
);


let prevEl = null;

document.onkeydown = function (e) {
  document.getElementById("textarea").focus();
  e = e || window.event;
  let el = document.getElementById(e.key);
  if (prevEl !== null){
    prevEl.style.backgroundColor = "#444444";
    prevEl = el;
    if (el)
    el.style.backgroundColor = "#a7308d";
  }
  if (el)
  el.style.backgroundColor = "#a7308d";

  prevEl = el;
};


function createGbKeyboard() {

  let divkeyboard = document.createElement('div');// создаем контейнер (для ряда)
  divkeyboard.className = "keyboard";// c классом keyboard-row
  divkeyboard.id = "keyboard";
  document.body.append(divkeyboard);

  let div1 = document.createElement('div');
  div1.className = "keyboard-row"
  divkeyboard.appendChild(div1);

  createBtns(keys1,div1);

 
  let div2 = document.createElement('div');
  div2.className = "keyboard-row"
  divkeyboard.appendChild(div2);

  createBtns(keys2,div2);

  let div3 = document.createElement('div');
  div3.className = "keyboard-row"
  divkeyboard.appendChild(div3);

  createBtns(keys3,div3);

  let div4 = document.createElement('div');
  div4.className = "keyboard-row"
  divkeyboard.appendChild(div4);

  createBtns(keys4,div4);

  let div5 = document.createElement('div');
  div5.className = "keyboard-row"
  divkeyboard.appendChild(div5);

  createBtns(keys5,div5);
}


function createRusKeyboard() {
  let divkeyboard = document.createElement('div');// создаем контейнер (для ряда)
  divkeyboard.className = "keyboard";// c классом keyboard-row
  divkeyboard.id = "keyboard";
  document.body.append(divkeyboard);

  let div1Rus = document.createElement('div');
  div1Rus.className = "keyboard-row"
  divkeyboard.appendChild(div1Rus);

  createBtns(keysRus1,div1Rus);

  let div2Rus = document.createElement('div');
  div2Rus.className = "keyboard-row"
  divkeyboard.appendChild(div2Rus);
  createBtns(keysRus2,div2Rus);

  let div3Rus = document.createElement('div');
  div3Rus.className = "keyboard-row"
  divkeyboard.appendChild(div3Rus);
  createBtns(keysRus3,div3Rus);

  let div4Rus = document.createElement('div');
  div4Rus.className = "keyboard-row"
  divkeyboard.appendChild(div4Rus);
  createBtns(keysRus4,div4Rus);

  let div5Rus = document.createElement('div');
  div5Rus.className = "keyboard-row"
  divkeyboard.appendChild(div5Rus);    

  createBtns(keysRus5,div5Rus);
}
