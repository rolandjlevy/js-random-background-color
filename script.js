document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  const btn = document.querySelector('.btn');

  const base = 16;
  const hexStringLength = 6;
  const hexChars = [];
  let counter = 0;
  let timer = false;

  while (++counter < base) {
    let char = counter.toString(base);
    hexChars.push(char);
  }

  const generateHexString = () => {
    let result = '#';
    let counter = 0;
    while (++counter <= hexStringLength) {
      const n = getRandomNum(hexChars.length-1);
      result += hexChars[n];
    }
    return result;
  }

  const getRandomNum = (n) => Math.round(Math.random() * n);

  function randomise() {
    const colour = generateHexString();
    document.body.style.backgroundColor = colour;
    header.innerHTML = colour;
  }

  btn.addEventListener('mousedown', (e) => {
    timer = setInterval(randomise, 1);
  });

  btn.addEventListener('mouseup', (e) => {
    clearInterval(timer);
  });

  randomise();

});