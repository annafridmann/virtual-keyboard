let textareaPos = 0; //позиция курсора

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




// var area = document.getElementById('textarea');
// area.addEventListener('input', () => {
//   console.log('++ '+ textareaPos + ' '+ textarea.selectionStart);
//   textarea.selectionStart = textareaPos;
//   console.log('input '  + textarea.selectionStart);
//  });

// area.addEventListener('click', () => {
//   textareaPos = textarea.selectionStart;
//   console.log('click ' + textareaPos);
// });
  
  
let divkeyboard = document.createElement('div');// создаем контейнер (для ряда)
  divkeyboard.className = "keyboard keyboard-eng keyboard-show";// c классом keyboard-row
  divkeyboard.id = "keyboard";
  document.body.append(divkeyboard); // выбираем элемент в который добавим элемент

let keys1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace']
let keys2 = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','|','Del']
let keys3 = ['CapsLock','a','s','d','f','g','h','j','k','l',';',"'",'Enter']
let keys4 = ['Shift','z','x','c','v','b','n','m',',','.','/','^','Shift']
let keys5 = ['Ctrl','Alt','__________','Alt','Ctrl','Home','Down','End']
let keysRus1 = ['ё','!','@','#','$','%','^','&','*','(',')','_','=','Backspace']
let keysRus2 = ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','Ъ','|','Del']
let keysRus3 = ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter']
let keysRus4 = ['Shift','я','ч','с','м','и','т','ь','б','ю','.','^','Shift']
let keysRus5 = ['Ctrl','Alt','__________','Alt','Ctrl','Home','Down','End']

let div1 = document.createElement('div');
  div1.className = "keyboard-row"
// let keyboard = document.querySelector("div.keyboard"); 
  keyboard.appendChild(div1);

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

          textarea.value = textarea.value.substring(0, textareaPos) + k + textarea.value.substring(textarea.selectionStart);

          textareaPos = textareaPos + 1;
          console.log('virtu '+ textareaPos);
        });
      });
  }

  createBtns(keys1,div1);

 
let div2 = document.createElement('div');
  div2.className = "keyboard-row"
  keyboard.appendChild(div2);

createBtns(keys2,div2);

let div3 = document.createElement('div');
  div3.className = "keyboard-row"
  keyboard.appendChild(div3);

createBtns(keys3,div3);

let div4 = document.createElement('div');
  div4.className = "keyboard-row"
  keyboard.appendChild(div4);

createBtns(keys4,div4);

let div5 = document.createElement('div');
  div5.className = "keyboard-row"
  keyboard.appendChild(div5);

createBtns(keys5,div5);