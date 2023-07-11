let randomButton = document.querySelector('.randomcolor');
let paragraphs = document.getElementsByTagName('p');
let header = document.querySelector('.c-site-header')
let ul = document.getElementsByTagName('ul')
let intro = document.querySelector('.intro')
console.log(paragraphs)

let randomArrayColor = ['blue','red','green','#5D64DE','purple','#32DEC3'];
randomButton.addEventListener('click', () => {
  let randomIndex = Math.floor(Math.random() * randomArrayColor.length);
  let randomColor = randomArrayColor[randomIndex];
  header.style.color = randomColor;
  intro.style.color = randomColor;
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = randomColor;
  }
  for (let i = 0; i < ul.length; i++) {
    ul[i].style.color = randomColor;
  }
});