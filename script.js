const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  +button.addEventListener('click', function(day2){
    console.log(day2);
    console.log(day2.target);
    if(day2.target.id === 'grey'){
      body.style.backgroundColor = 'rgb(235, 160, 160)';
    }

    if(day2.target.id === 'white'){
      body.style.backgroundColor = 'rgb(114, 225, 147)';
    }

    if(day2.target.id === 'blue'){
      body.style.backgroundColor = 'rgb(134, 210, 236)';
    }

    if(day2.target.id === 'yellow'){
      body.style.backgroundColor = 'rgb(253, 145, 244)';
    }

    if(day2.target.id === 'pink'){
      body.style.backgroundColor = 'pink';
    }

  })
})