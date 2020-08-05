const header = document.querySelector('.header');
const btn = document.querySelector('.btn');
let timer = false;

const base = 16;
const hexStringLength = 6;
const hex = [];
let counter = 0;

while (counter < base) {
  let hexChar = counter.toString(base);
  hex.push(hexChar);
  counter++;
}

btn.addEventListener('mousedown', (e) => {
  timer = setInterval(() => {
    const colour = generateHexString();
    document.body.style.backgroundColor = colour;
    header.innerHTML = colour;
  }, 1);
});

btn.addEventListener('mouseup', (e) => {
  clearInterval(timer);
});

const generateHexString = () => {
  let result = '#';
  let counter = 0;
  while (++counter <= hexStringLength) {
    const n = getRandomNum(hex.length-1);
    result += hex[n];
  }
  return result;
}

const getRandomNum = (n) => Math.round(Math.random() * n);