export class HexColour {
  constructor(header) {
    this.header = header;
    this.init();
    this.generateHexChars();
    this.randomise();
    this.detransition();
  }
  init() {
    this.hexStringLength = 6;
    this.hexChars = [];
    this.counter = 0;
    this.timer = null;
  }
  generateHexChars() {
    const base = 16;
    while (++this.counter < base) {
      let char = this.counter.toString(base);
      this.hexChars.push(char);
    }
  }
  generateHexString() {
    let result = '#';
    this.counter = 0;
    while (++this.counter <= this.hexStringLength) {
      const n = Math.round(Math.random() * (this.hexChars.length-1));
      result += this.hexChars[n];
    }
    return result;
  }
  randomise() {
    const colour = this.generateHexString().toLocaleUpperCase();
    document.body.style.backgroundColor = colour;
    this.header.innerHTML = colour;
  }
  detransition() {
    setTimeout(() => {
      document.body.classList.add('detransition');
    }, 500);
  }
}
