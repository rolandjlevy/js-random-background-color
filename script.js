const header = document.querySelector('.header');
const btn = document.querySelector('.btn');

const base = 16;
const hexStringLength = 6;
const hex = [];
let counter = 0;

while (counter < base) {
  let hexChar = counter.toString(base);
  hex.push(hexChar);
  counter++;
}

btn.addEventListener('click', (e) => {
  const colour = generateHexString();
  document.body.style.backgroundColor = colour;
  document.body.style.transition = 'all 0.25s ease';
  header.innerHTML = colour;
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