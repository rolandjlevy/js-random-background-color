document.addEventListener('DOMContentLoaded', () => {

  let timer;
  const header = document.querySelector('.header');
  const btn = document.querySelector('.btn');
  const hexColour = new HexColour(header);

  btn.addEventListener('mousedown', (e) => {
    timer = setInterval(() => {
      hexColour.randomise();
    }, 100);
  });

  btn.addEventListener('mouseup', (e) => {
    clearInterval(timer);
  });

});