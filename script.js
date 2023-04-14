const criaDivs = () => {
  const colorPalette = document.getElementById('color-palette');
  for (let index = 1; index <= 4; index += 1) {
    const divs = document.createElement('div');
    divs.className = 'color';
    colorPalette.appendChild(divs);
  }
};
criaDivs();

const paletteOne = document.querySelector('.color');
const paletteTwo = paletteOne.nextElementSibling;
const paletteThree = paletteTwo.nextElementSibling;
const paletteFour = paletteThree.nextElementSibling;

paletteOne.style.backgroundColor = 'rgb(0, 0, 0)';
paletteTwo.style.backgroundColor = 'red';
paletteThree.style.backgroundColor = 'purple';
paletteFour.style.backgroundColor = 'blue';