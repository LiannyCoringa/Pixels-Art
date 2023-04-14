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
paletteOne.style.backgroundColor = 'black';
if (localStorage.getItem('colorPalette') === null) {
  paletteTwo.style.backgroundColor = 'red';
  paletteThree.style.backgroundColor = 'purple';
  paletteFour.style.backgroundColor = 'blue';
} else {
  paletteTwo.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette')).paletaDois;
  paletteThree.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette')).paletaTres;
  paletteFour.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette')).paletaQuatro;
}

const button = document.getElementById('button-random-color');
button.addEventListener('click', () => {
  const colors = {
    paletaUm: 'black',
    paletaDois: `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`,
    paletaTres: `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`,
    paletaQuatro: `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`,
  };
  if (colors.paletaDois === 'rgb(255, 255, 255)' || colors.paletaDois === 'rgb(0, 0, 0)') {
    colors.paletaDois = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
  } else if (colors.paletaTres === 'rgb(255, 255, 255)' || colors.paletaTres === 'rgb(0, 0, 0)') {
    colors.paletaTres = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`
  } else if (colors.paletaQuatro === 'rgb(255, 255, 255)' || colors.paletaQuatro === 'rgb(0, 0, 0)') {
    colors.paletaQuatro = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`;
  }
  paletteTwo.style.backgroundColor = colors.paletaDois;
  paletteThree.style.backgroundColor = colors.paletaTres;
  paletteFour.style.backgroundColor = colors.paletaQuatro;

  localStorage.setItem('colorPalette', JSON.stringify(colors));
});

const pixelSection = document.getElementById('pixel-board');
for (let index = 1; index <= 5; index += 1) {
  for (let index = 1; index <= 5; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelSection.appendChild(pixels);
  }
}

paletteOne.classList.add('selected');
const selectedClass = () => {
  const paletasDeCores = document.querySelectorAll('.color');
  for (let paleta of paletasDeCores) {
    paleta.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    })
  }
}
selectedClass();

const pintura = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      event.target.style.backgroundColor = selected.style.backgroundColor;
    })
  }
}
pintura();