var organAction = require('../actions/organ_actions.js');


var Mapping = {
  65: 'B',
  87: 'As',
  83: 'A',
  69: 'Gs',
  68: 'G',
  82: 'Fs',
  70: 'F',
  71: 'E',
  84: 'Ds',
  72: 'D',
  89: 'Cs',
  74: 'C',
};

var pressedKeys = [];

window.onkeydown = function(e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (Mapping[code] !== undefined) {
    if (pressedKeys.indexOf(code) === -1) {
      organAction.keyPressed(Mapping[code]);
      pressedKeys.push(code);
    }
  }
};

window.onkeyup = function(e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (Mapping[code] !== undefined) {
    if (pressedKeys.indexOf(code) !== -1) {
      organAction.keyReleased(Mapping[code]);
      pressedKeys.splice(pressedKeys.indexOf(code), 1);
    }
  }
};
