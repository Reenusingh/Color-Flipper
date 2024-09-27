const button = document.querySelector('.btn-flipper');
const body = document.querySelector('body');
button.addEventListener('click', function(event){
  const randomColor = `#${Math.round(Math.random()* 16777215).toString(16).padStart(6,'0')}`;
  body.style.backgroundColor = randomColor;
})