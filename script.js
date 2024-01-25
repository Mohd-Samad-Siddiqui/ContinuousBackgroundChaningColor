const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let hexColor = '0123456789ABCDEF';
let randomNum;
let bgColorChange;

function changeColor(){
  document.body.style.backgroundColor = colorCode();
}

function colorCode() {
  let hexCode = '#';
  for(let i=0; i<6; i++){
    randomNum = parseInt(Math.random() * 16);
    hexCode += hexColor[randomNum];
  }
  return hexCode;
}

start.addEventListener('click', () => {
  bgColorChange = setInterval(changeColor, 2000);
})

stop.addEventListener('click', () => {
  clearInterval(bgColorChange);
})