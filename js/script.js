const button = document.querySelector(`button`)
const img = document.querySelector(`img`)
button.addEventListener(`click`, function(){
  if (img.src.includes(`white_lamp.png`) ){
    img.src = './img/yellow_lamp.png';
    button.innerText = `spegni`
  }
  else if (img.src.includes(`yellow_lamp.png`) ){
    img.src = './img/white_lamp.png';
    button.innerText = `accendi`
  }
} )