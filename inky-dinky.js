let currentInkyDinky = '';
let generated = false;
let warning = 'Generate an inky dinky first!';

function generateInkyDinky() {
  // Clear inky dinky
  currentInkyDinky = '';

  // Clear hint, answer, info, banners, input
  document.getElementById('hint').innerHTML = '';
  document.getElementById('answer').innerHTML = '';
  document.getElementById('info').innerHTML = '';
  document.getElementsByClassName('correct-banner')[0].style.display = 'none';
  document.getElementsByClassName('incorrect-banner')[0].style.display = 'none';
  document.getElementById('input-guess').value = '';

  // Generate new inky dinky
  let randomId = Math.floor((Math.random() * 8) + 1);
  currentInkyDinky = data[randomId];  
  document.getElementById('inky-dinky').innerHTML = currentInkyDinky.description;

  generated = true;
  showInput();
}

function showInput() {
  let input = document.getElementsByClassName('input')[0];
  let submit = document.getElementById('submit');
  if (generated) {
    input.style.display = 'inline-block';
    submit.style.display = 'inline-block';
  } else {
    input.style.display = 'none';
  }
}

function submitGuess() {
  let guess = document.getElementById('input-guess').value;
  if (currentInkyDinky.answer.toLowerCase().indexOf(guess) >= 0) {
    showCorrectBanner();
  } else {
    showIncorrectBanner();
  }
}

function showCorrectBanner() {
  document.getElementsByClassName('correct-banner')[0].style.display = 'block';
  document.getElementsByClassName('incorrect-banner')[0].style.display = 'none';
}

function showIncorrectBanner() {
  document.getElementsByClassName('correct-banner')[0].style.display = 'none';
  document.getElementsByClassName('incorrect-banner')[0].style.display = 'block';
}

function showOrHideHint() {
  let element = document.getElementById('hint');

  if (generated) {
    if (element.innerHTML.length > 0) {
      element.innerHTML = ''; 
    } else {
      element.innerHTML = currentInkyDinky.hint;   
    }
  } else {
    element.innerHTML = warning;  
  }
}

function showOrHideAnswer() {
  element = document.getElementById('answer');

  if (generated) {
    if (element.innerHTML.length > 0) {
      element.innerHTML = ''; 
    } else {
      element.innerHTML = currentInkyDinky.answer;   
    }
  } else {
    element.innerHTML = warning;  
  }
}

function showOrHideInfo() {
  let info = 'An inky dinky is a ...';

  element = document.getElementById('info');
  if (element.innerHTML.length > 0) {
    element.innerHTML = ''; 
  } else {
    element.innerHTML = info;   
  }
}