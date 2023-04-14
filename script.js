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

// const colors = {
//   paletaUm: 'black',
//   paletaDois: atribuiCor(paletaDois),
//   paletaTres: atribuiCor(paletaTres),
//   paletaQuatro: atribuiCor(paletaQuatro),
// };
// if (colors.paletaDois === 'rgb(255, 255, 255)' || colors.paletaDois === 'rgb(0, 0, 0)') {
//   colors.paletaDois = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
// } else if (colors.paletaTres === 'rgb(255, 255, 255)' || colors.paletaTres === 'rgb(0, 0, 0)') {
//   colors.paletaTres = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`
// } else if (colors.paletaQuatro === 'rgb(255, 255, 255)' || colors.paletaQuatro === 'rgb(0, 0, 0)') {
//   colors.paletaQuatro = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`;
// }
// paletteTwo.style.backgroundColor = colors.paletaDois;
// paletteThree.style.backgroundColor = colors.paletaTres;
// paletteFour.style.backgroundColor = colors.paletaQuatro;

// localStorage.setItem('colorPalette', JSON.stringify(colors));
// let backgroundColor02 = paletteTwo.style.backgroundColor;
// let backgroundColor03 = paletteThree.style.backgroundColor;
// let backgroundColor04 = paletteFour.style.backgroundColor;
// const colors = {
//   paletaUm: 'black',
//   paletaDois: `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`,
//   paletaTres: `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`,
//   paletaQuatro: `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`,
// };
// if (colors.paletaDois === 'rgb(255, 255, 255)' || colors.paletaDois === 'rgb(0, 0, 0)') {
//   colors.paletaDois = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
// } else if (colors.paletaTres === 'rgb(255, 255, 255)' || colors.paletaTres === 'rgb(0, 0, 0)') {
//   colors.paletaTres = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`
// } else if (colors.paletaQuatro === 'rgb(255, 255, 255)' || colors.paletaQuatro === 'rgb(0, 0, 0)') {
//   colors.paletaQuatro = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`;
// }
// localStorage.setItem('colorPalette', JSON.stringify(colors));

// paletteTwo.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette')).paletaDois;
// paletteThree.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette')).paletaTres;
// paletteFour.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette')).paletaQuatro;

// const divs = document.querySelectorAll('.color');
// for (let index = 1; index < divs.length; index += 1) {
//   divs[index].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'));
// }

// const button = document.getElementById('button-random-color');
// button.addEventListener('click', () => {
//   colors.paletaDois = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
//   colors.paletaTres = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`;
//   colors.paletaQuatro = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`;
// });

// const atribuiCor = (paleta) => {
//   let cor = '';
//   if (JSON.parse(localStorage.getItem('colorPalette')).paleta === null) {
//     cor = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`;
//   } else {
//     cor = JSON.parse(localStorage.getItem('colorPalette')).paleta;
//   }
//   return cor;
// };

//   colors.paletaDois = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
//   colors.paletaTres = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`;
//   colors.paletaQuatro = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`;
//   if (localStorage.getItem('colorPalette') === null) {

//   }
//   const colors = {
//     paletaUm: 'black',
//     paletaDois: `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`,
//     paletaTres: `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`,
//     paletaQuatro: `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`,
//   };
//   if (colors.paletaDois === 'rgb(255, 255, 255)' || colors.paletaDois === 'rgb(0, 0, 0)') {
//     colors.paletaDois = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
//   } else if (colors.paletaTres === 'rgb(255, 255, 255)' || colors.paletaTres === 'rgb(0, 0, 0)') {
//     colors.paletaTres = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`
//   } else if (colors.paletaQuatro === 'rgb(255, 255, 255)' || colors.paletaQuatro === 'rgb(0, 0, 0)') {
//     colors.paletaQuatro = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`;
//   }
//   localStorage.setItem('colorPalette', JSON.stringify(colors));
//   // colors.paletaDois = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
//   // colors.paletaTres = `rgb(${Math.random() * 350}, ${Math.random() * 450}, ${Math.random() * 50})`;
//   // colors.paletaQuatro = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`;
//   location.reload();
// });



  // if (secondPalette === firstPalette || secondPalette === thirdPalette || secondPalette === fourthPalette) {
  //   secondPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
  // } else if (thirdPalette === firstPalette || thirdPalette === fourthPalette) {
  //   thirdPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
  // } else if (fourthPalette === firstPalette) {
  //   fourthPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
  // } else {
  //   firstPalette;
  //   secondPalette;
  //   thirdPalette;
  //   fourthPalette;
  // }

