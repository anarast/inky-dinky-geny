let data = {
            "1": {
              "description": "A primate that likes to get down",
              "hint": "Not an ape",
              "answer": "A funky monkey"
            },
            "2": {
              "description": "A light-headed work of art",
              "hint": "Most have a canvas medium",
              "answer": "A fainting painting"
            },
            "3": {
              "description": "A mysterious three-paneled piece of art",
              "hint": "Very obscure",
              "answer": "A cryptic triptych"
            }
          };

let currentInkyDinky;

function generateInkyDinky() {
  // Clear inky dinky
  currentInkyDinky = '';

  // Clear hint, answer, info
  document.getElementById('hint').innerHTML = '';
  document.getElementById('answer').innerHTML = '';
  document.getElementById('info').innerHTML = '';

  // Generate new inky dinky
  let randomId = Math.floor((Math.random() * 3) + 1);
  currentInkyDinky = data[randomId];  
  document.getElementById('inky-dinky').innerHTML = currentInkyDinky.description;
}

function showHint() {
  document.getElementById('hint').innerHTML = currentInkyDinky.hint;
}

function showAnswer() {
  document.getElementById('answer').innerHTML = currentInkyDinky.answer;
}

function showInfo() {
  let info = 'An inky dinky is a ...';
  document.getElementById('info').innerHTML = info;
}



