let currentInkyDinky = '';
let generated = false;
let warning = 'Generate an inky dinky first!';

function generateInkyDinky() {
  // Clear inky dinky
  currentInkyDinky = '';

  // Clear hint, answer, info
  document.getElementById('hint').innerHTML = '';
  document.getElementById('answer').innerHTML = '';
  document.getElementById('info').innerHTML = '';

  // Generate new inky dinky
  let randomId = Math.floor((Math.random() * 8) + 1);
  currentInkyDinky = data[randomId];  
  document.getElementById('inky-dinky').innerHTML = currentInkyDinky.description;

  generated = true;
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