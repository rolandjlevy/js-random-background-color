import { Event } from './src/Event.js';
import { HexColour } from './src/HexColour.js';

let timer;
const header = document.querySelector('.header');
const btn = document.querySelector('.btn');
const hexColour = new HexColour(header);

const event = new Event();

btn.addEventListener(event.mouse.down, (e) => {
  timer = setInterval(() => {
    hexColour.randomise();
  }, 100);
});

btn.addEventListener(event.mouse.up, (e) => {
  clearInterval(timer);
});